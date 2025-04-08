// Type definitions
export interface Student {
  name: string;
  grade: number;
  email: string;
  phone: string;
  gpa: number;
}

export interface Assignment {
  id: string;
  task: string;
  subject: string;
  dueDate: string;
  time: string;
  status: 'In Progress' | 'Not Started';
}

export interface Message {
  id: number;
  sender: string;
  avatar: string;
  message: string;
  time: string;
}

export interface Subject {
  name: string;
  progress: number;
}

export interface AgendaItem {
  date: string;
  event: string;
  subject: string;
  description?: string;
}

export interface Stat {
  label: string;
  value: string;
}

// New type definitions for Teachers feature
export interface Teacher {
  id: string;
  name: string;
  subject: string;
  classes: string;
  phone: string;
  address: string;
  email?: string;
  profileImage?: string;
}

export interface SubjectTeacherMapping {
  subject: string;
  teachers: Teacher[];
  studentCount: number;
}

export interface TeacherAssignment {
  studentId: string;
  subject: string;
  teacherId: string;
}
