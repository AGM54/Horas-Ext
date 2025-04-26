import React, { useState, useEffect, useRef } from "react";
import { EditableCellContainer, EditableInput } from "./styles";

interface EditableCellProps {
  initialValue: string;
  onChange: (value: string) => void;
}

const EditableCell: React.FC<EditableCellProps> = ({ initialValue, onChange }) => {
  const [value, setValue] = useState(initialValue);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Update local value when initialValue prop changes
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange(newValue);
  };
  
  return (
    <EditableCellContainer>
      <EditableInput
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </EditableCellContainer>
  );
};

export default EditableCell; 