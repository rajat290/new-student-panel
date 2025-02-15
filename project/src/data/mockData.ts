// Mock data for the application
import { Assignment } from '../types'; // Importing the Assignment type

export const student = {
  name: 'Rajat Singh Tomar',
  grade: 12,
  email: 'rajatsinghtomarofficial@gmail.co',
  phone: '+917348765761',
  gpa: 8.4
};

export const stats = [
  { label: 'Attendance', value: '97%' },
  { label: 'Task Completed', value: '258+' },
  { label: 'Task in Progress', value: '64%' },
  { label: 'Reward Points', value: '245' }
];

export const assignments: Assignment[] = [
  { id: '01', task: 'Read Chapters 1-3', subject: 'English Literature', dueDate: 'May 1, 2024', time: '09:00 AM', status: 'In Progress' as 'In Progress' },
  { id: '02', task: 'Complete Problem Set #5', subject: 'Mathematics', dueDate: 'May 3, 2024', time: '10:30 AM', status: 'Not Started' as 'Not Started' },
  { id: '03', task: 'Write Lab Report on Acid-Base Titration', subject: 'Chemistry', dueDate: 'May 5, 2024', time: '11:12 AM', status: 'In Progress' as 'In Progress' },
  { id: '04', task: 'Prepare for Oral Presentation', subject: 'History', dueDate: 'May 2, 2024', time: '12:00 PM', status: 'Not Started' as 'Not Started' },
  { id: '05', task: 'Create Art Piece for Final Project', subject: 'Art', dueDate: 'May 6, 2024', time: '03:00 PM', status: 'In Progress' as 'In Progress' }
];

export const holidays = [1, 15, 25]; // Example holiday days
export const events = [5, 10, 20]; // Example event days

export const subjects = [
  { name: 'Biology', progress: 75 },
  { name: 'Chemistry', progress: 60 },
  { name: 'Geography', progress: 85 },
  { name: 'History', progress: 90 },
  { name: 'Literature', progress: 95 },
  { name: 'Art', progress: 100 }
];

export const messages = [
  {
    id: 1,
    sender: 'Ms. Carter',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=80',
    message: "Don't forget tomorrow's lab report on titration is due by 9AM. Make sure you...",
    time: '4:15 PM'
  },
  {
    id: 2,
    sender: 'Jake',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=80',
    message: 'Hey, are we still meeting up after school for the math study?',
    time: '12:30 PM'
  },
  {
    id: 3,
    sender: 'Coach Simmons',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=80',
    message: 'Practice is moved to 5 PM today because of the assembly. Please inform the rest of...',
    time: '2:00 PM'
  }
];

export const agenda = [
  { date: 'Monday - March 24, 2024', event: 'Homeroom & Announcement', subject: 'Mathematics' },
  { date: 'Wednesday - April 24, 2024', event: 'Science Fair Preparation', subject: 'Science' },
  { date: 'Friday - April 26, 2024', event: 'History Documentary Viewing', subject: 'History' },
  { date: 'Monday - April 29, 2024', event: 'Art Champion Announcement', subject: 'Art' }
];

export const calendar = {
  month: 'March 2024',
  days: Array.from({ length: 31 }, (_, i) => i + 1)
};
