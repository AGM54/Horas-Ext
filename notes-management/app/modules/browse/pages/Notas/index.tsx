import React, { useState } from "react";
import { PencilLine, PlusCircle, ChevronDown } from "lucide-react";
import { useTheme } from "@emotion/react";
import components from "~/components";
import useNotesScreen from "~/hooks/useGradesScreen";
import Select from "~/components/atoms/Select";
import { NotasContainer, NotasContent } from "./styles";
import type { StudentGrade } from "~/interfaces/grades";

const { Text, Button, Table } = components;

export default function NotasPage() {
  const theme = useTheme();

  const {
    // State
    courses,
    selectedCourse,
    menuAbierto,
    currentCourseData,
    studentsWithTotal,
    isLoading,

    // Actions
    handleCourseSelect,
    toggleMenu,

    // Table functions
    getTableHeaders,
    getRowValues,
    handleRowPress,
  } = useNotesScreen();

  return (
    <NotasContainer>
      <NotasContent>
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <Text variant="H3">Notas</Text>

          {/* Botones */}
          <div className="flex gap-4">
            <Button
              variant="secondary"
              className="flex items-center gap-2"
              style={{
                whiteSpace: "nowrap",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              <PencilLine className="h-4 w-4 text-primaryDark" />
              Editar Notas
            </Button>

            <Button
              variant="secondary"
              className="flex items-center gap-2"
              style={{
                whiteSpace: "nowrap",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              <PlusCircle className="h-4 w-4 text-primaryDark" />
              Nueva Actividad
            </Button>
          </div>
        </div>

        {/* Selección del Curso */}
        <div className="mb-6">
          <Text variant="body" color="primaryDark">
            Curso:
          </Text>

          <div className="mt-2 w-64">
    <Select
  value={selectedCourse ?? "Seleccionar"}
  onChange={(e) => handleCourseSelect(e.target.value)}
  options={["Seleccionar", ...courses]}
  className="w-full"
/>

          </div>
        </div>

        {/* Tabla de estudiantes */}
        {studentsWithTotal.length > 0 && (
          <Table
            headers={getTableHeaders()}
            data={studentsWithTotal as StudentGrade[]}
            onRowPress={handleRowPress as (item: unknown, index?: number) => void}
            getRowValues={getRowValues as (item: unknown, index: number) => React.ReactNode[]}
            maxHeight={"70vh"}
            maxWidth="85vw"
            alignSelf="center"
            containerBgColor="white"
            containerBorderRadius={`${theme.sizes.md}px`}
          />
        )}
      </NotasContent>
    </NotasContainer>
  );
}
