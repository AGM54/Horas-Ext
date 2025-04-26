import React, { useState, useCallback } from "react";
import Table, { type TableProps } from "../Table";
import EditableCell from "../../atoms/EditableCell";
import { useTheme } from "@emotion/react";

export interface EditableTableProps<T> extends Omit<TableProps<T>, 'getRowValues'> {
  getRowValues: (item: T, index: number) => React.ReactNode[];
  isEditing: boolean;
  editableColumns: number[]; // Array of column indices that are editable
  onCellValueChange: (rowIndex: number, colIndex: number, newValue: string) => void;
}

function EditableTable<T>({
  headers,
  data,
  onRowPress,
  getRowValues,
  cellWidth,
  cellHeight = 50,
  maxHeight = '90vh',
  maxWidth,
  alignSelf,
  containerBgColor,
  containerBorderRadius,
  isEditing,
  editableColumns,
  onCellValueChange,
}: EditableTableProps<T>): React.ReactElement {
  const theme = useTheme();
  
  // This transforms the regular cell values into editable cells when in edit mode
  const getEditableRowValues = useCallback((item: T, rowIndex: number) => {
    const values = getRowValues(item, rowIndex);
    
    if (!isEditing) {
      return values; // Return original values if not in edit mode
    }
    
    // Transform editable columns into editable inputs
    return values.map((value, colIndex) => {
      // If this column is marked as editable, return an editable cell
      if (editableColumns.includes(colIndex)) {
        return (
          <EditableCell
            initialValue={value?.toString() || ""}
            onChange={(newValue) => onCellValueChange(rowIndex, colIndex, newValue)}
          />
        );
      }
      
      // Otherwise return the original value
      return value;
    });
  }, [getRowValues, isEditing, editableColumns, onCellValueChange]);
  
  return (
    <Table
      headers={headers}
      data={data}
      onRowPress={onRowPress}
      getRowValues={getEditableRowValues}
      cellWidth={cellWidth}
      cellHeight={cellHeight}
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      alignSelf={alignSelf}
      containerBgColor={containerBgColor}
      containerBorderRadius={containerBorderRadius}
    />
  );
}

export default EditableTable;
