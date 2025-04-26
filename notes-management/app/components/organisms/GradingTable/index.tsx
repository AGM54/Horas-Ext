import React from "react";
import Table from "@components/organisms/Table";
import GradeCell from "@components/atoms/GradeCell";
import { GradingProvider } from "@components/contexts/GradingContext";
import type { StudentGrade } from "~/interfaces/grades";

export interface GradingTableProps {
  headers: string[];
  data: StudentGrade[];
  onRowPress: (item: StudentGrade, index?: number) => void;
  isEditing: boolean;
  onSetEditing: (isEditing: boolean) => void;
  onGradeUpdate: (studentId: string, activityId: string, score: number) => void;
  getActivityIdByIndex: (index: number) => string;
  maxHeight?: string | number;
  cellWidth?: number;
  maxWidth?: string;
  alignSelf?: string;
  containerBgColor?: string;
  containerBorderRadius?: string;
}

const GradingTable: React.FC<GradingTableProps> = ({
  headers,
  data,
  onRowPress,
  isEditing,
  onSetEditing,
  onGradeUpdate,
  getActivityIdByIndex,
  maxHeight = '70vh',
  cellWidth = 90,
  maxWidth,
  alignSelf,
  containerBgColor,
  containerBorderRadius,
}) => {
  // Function to generate row values with GradeCells for activity grades
  const getRowValues = (student: StudentGrade, rowIndex: number) => {
    // First column is always student name
    const studentName = student.name;

    // Get activity columns - all columns except first (student name) and last (total)
    const activityColumns = headers.slice(1, -1).map((_, colIndex) => {
      const activityId = getActivityIdByIndex(colIndex);
      const activityScore = student.grades.find(g => g.activityId === activityId)?.score || 0;
      const activityMaxScore = 100; // This would come from your data if available
      
      return (
        <GradeCell
          key={`${student.id}-${activityId}`}
          score={activityScore}
          maxScore={activityMaxScore}
          studentId={student.id}
          activityId={activityId}
          width={cellWidth}
        />
      );
    });

    // Calculate total
    const totalScore = student.total || 0;
    const maxPossibleScore = headers.length > 2 ? (headers.length - 2) * 100 : 100;

    // Return all columns: [student name, ...activity scores, total]
    return [
      studentName,
      ...activityColumns,
      `${totalScore} / ${maxPossibleScore}`
    ];
  };

  return (
    <GradingProvider initialEditMode={isEditing} onGradeUpdate={onGradeUpdate}>
      <Table
        headers={headers}
        data={data}
        onRowPress={onRowPress}
        getRowValues={getRowValues as any}
        maxHeight={maxHeight}
        cellWidth={cellWidth}
        maxWidth={maxWidth}
        alignSelf={alignSelf}
        containerBgColor={containerBgColor}
        containerBorderRadius={containerBorderRadius}
      />
    </GradingProvider>
  );
};

export default GradingTable; 