export interface Activity {
  id: string;
  name: string;
  maxScore: number;
}

export interface StudentGrade {
  id: string;
  name: string;
  grades: {
    activityId: string;
    score: number;
  }[];
  total?: number;
}

export interface CourseData {
  id: string;
  name: string;
  activities: Activity[];
  students: StudentGrade[];
} 