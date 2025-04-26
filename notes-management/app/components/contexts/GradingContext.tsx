import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';

interface GradingContextType {
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
  updateGrade: (studentId: string, activityId: string, score: number) => void;
}

const GradingContext = createContext<GradingContextType | undefined>(undefined);

interface GradingProviderProps {
  children: ReactNode;
  initialEditMode?: boolean;
  onGradeUpdate: (studentId: string, activityId: string, score: number) => void;
}

export const GradingProvider: React.FC<GradingProviderProps> = ({ 
  children, 
  initialEditMode = false,
  onGradeUpdate
}) => {
  const [isEditing, setIsEditing] = useState(initialEditMode);
  
  useEffect(() => {
    setIsEditing(initialEditMode);
  }, [initialEditMode]);

  const updateGrade = useCallback((studentId: string, activityId: string, score: number) => {
    onGradeUpdate(studentId, activityId, score);
  }, [onGradeUpdate]);

  const contextValue = React.useMemo(() => ({
    isEditing,
    setIsEditing,
    updateGrade
  }), [isEditing, updateGrade]);

  return (
    <GradingContext.Provider value={contextValue}>
      {children}
    </GradingContext.Provider>
  );
};

export const useGradingContext = () => {
  const context = useContext(GradingContext);
  if (context === undefined) {
    throw new Error('useGradingContext must be used within a GradingProvider');
  }
  return context;
};

export default GradingContext; 