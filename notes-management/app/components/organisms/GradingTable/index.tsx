import React, { useEffect, useRef, useCallback } from "react";
import Table from "@components/organisms/Table";
import GradeCell from "@components/atoms/GradeCell";
import { GradingProvider, useGradingContext } from "@components/contexts/GradingContext";
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

// Inner component to use context
const GradingTableContent: React.FC<Omit<GradingTableProps, 'onGradeUpdate'>> = ({
  headers,
  data,
  onRowPress,
  isEditing,
  onSetEditing,
  getActivityIdByIndex,
  maxHeight,
  cellWidth,
  maxWidth,
  alignSelf,
  containerBgColor,
  containerBorderRadius,
}) => {
  const { isEditing: contextIsEditing, setIsEditing } = useGradingContext();
  const isSyncingRef = useRef(false);
  
  // One-way sync from props to context (parent to child)
  useEffect(() => {
    // Skip if we're already in the middle of a sync operation
    if (isSyncingRef.current) return;
    
    // Only update if different
    if (contextIsEditing !== isEditing) {
      // Mark that we're syncing to prevent circular updates
      isSyncingRef.current = true;
      // Update context state
      setIsEditing(isEditing);
      // Reset sync flag after a delay
      setTimeout(() => {
        isSyncingRef.current = false;
      }, 50);
    }
  }, [isEditing, contextIsEditing, setIsEditing]);
  
  // Handle context editing state change
  const handleContextEditingChange = useCallback((newValue: boolean) => {
    if (!isSyncingRef.current && newValue !== isEditing) {
      onSetEditing(newValue);
    }
  }, [isEditing, onSetEditing]);
  
  // Subscribe to context changes (only log for now)
  useEffect(() => {
    if (!isSyncingRef.current && contextIsEditing !== isEditing) {
      handleContextEditingChange(contextIsEditing);
    }
  }, [contextIsEditing, isEditing, handleContextEditingChange]);

  // Function to generate row values with GradeCells for activity grades
  const getRowValues = (student: StudentGrade, rowIndex: number) => {
    // First column is always student name
    const studentName = student.name;

    // Get activity columns - all columns except first (student name) and last (total)
    const activityColumns = headers.slice(1, -1).map((_, colIndex) => {
      const activityId = getActivityIdByIndex(colIndex);
      const grade = student.grades.find(g => g.activityId === activityId);
      // Find both score and maxScore from student data
      const activityScore = grade?.score || 0;
      // Get maxScore from first student if available
      const firstStudentGrade = data[0]?.grades.find(g => g.activityId === activityId);
      const activityMaxScore = firstStudentGrade ? 100 : 100; // Fallback to 100
      
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
    const totalMaxScore = student.grades.reduce((sum, grade) => {
      // We need to find the max score for each activity
      const firstStudentGrade = data[0]?.grades.find(g => g.activityId === grade.activityId);
      return sum + (firstStudentGrade ? 100 : 100); // Fallback to 100
    }, 0);

    // Return all columns: [student name, ...activity scores, total]
    return [
      studentName,
      ...activityColumns,
      `${totalScore} / ${totalMaxScore || headers.length - 2 * 100}`
    ];
  };

  return (
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
  );
};

const GradingTable: React.FC<GradingTableProps> = (props) => {
  return (
    <GradingProvider 
      initialEditMode={props.isEditing} 
      onGradeUpdate={props.onGradeUpdate}
    >
      <GradingTableContent {...props} />
    </GradingProvider>
  );
};

export default GradingTable; 