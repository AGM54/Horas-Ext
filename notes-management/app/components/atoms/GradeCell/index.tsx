import React, { useState, useEffect } from "react";
import TableCell from "@components/atoms/TableCell";
import { useGradingContext } from "@components/contexts/GradingContext";
import { EditableInput, GradeCellContainer } from "./styles";

interface GradeCellProps {
  score: number;
  maxScore: number;
  studentId: string;
  activityId: string;
  width?: number;
  height?: number;
  fixed?: 'left' | 'right';
  isHovered?: boolean;
  backgroundColor?: string;
}

const GradeCell: React.FC<GradeCellProps> = ({
  score,
  maxScore,
  studentId,
  activityId,
  width,
  height,
  fixed,
  isHovered,
  backgroundColor
}) => {
  const { isEditing, updateGrade } = useGradingContext();
  const [inputValue, setInputValue] = useState(score.toString());
  
  // Update inputValue when score prop changes
  useEffect(() => {
    setInputValue(score.toString());
  }, [score]);
  
  // When not editing, display the score normally
  if (!isEditing) {
    return (
      <TableCell
        content={`${score} / ${maxScore}`}
        fixed={fixed}
        width={width}
        height={height}
        isHovered={isHovered}
        backgroundColor={backgroundColor}
      />
    );
  }
  
  // When editing, show an input for the score
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  
  const handleBlur = () => {
    const numValue = Number(inputValue);
    if (!isNaN(numValue) && numValue >= 0 && numValue <= maxScore) {
      updateGrade(studentId, activityId, numValue);
    } else {
      // Reset to original value if invalid
      setInputValue(score.toString());
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.currentTarget.blur(); // Trigger blur to save
    }
  };
  
  // Create an editable component to render inside TableCell
  const editableContent = (
    <GradeCellContainer>
      <EditableInput
        type="text"
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onClick={(e) => e.stopPropagation()} // Prevent row click when clicking on input
      />
      {/* The span will inherit color from GradeCellContainer which inherits from TableCell */}
      <span style={{color: 'inherit' }}>{` / ${maxScore}`}</span>
    </GradeCellContainer>
  );
  
  return (
    <TableCell
      content={editableContent}
      fixed={fixed}
      width={width}
      height={height}
      isHovered={isHovered}
      backgroundColor={backgroundColor}
    />
  );
};

export default GradeCell; 