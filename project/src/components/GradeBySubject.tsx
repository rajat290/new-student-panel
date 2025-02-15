import React from 'react';
import { Subject } from '../types';

const getSubjectColor = (subject: string): string => {
  switch (subject.toLowerCase()) {
    case 'biology':
      return '#4F46E5';
    case 'chemistry':
      return '#60A5FA';
    case 'physics':
      return '#10B981';
    case 'mathematics':
      return '#F43F5E';
    default:
      return '#3B82F6';
  }
};

interface GradeBySubjectProps {
  subjects: Subject[];
}

export const GradeBySubject: React.FC<GradeBySubjectProps> = ({ subjects }) => {
  return (
    <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Grade by Subject</h2>
        <div className="flex gap-4">
          <button className="text-sm text-gray-500">Weekly</button>
          <button className="text-sm text-gray-500">Grade 3</button>
        </div>
      </div>
      <div className="space-y-4">
        {subjects.map((subject) => (
          <div key={subject.name} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{subject.name}</span>
              <span>{subject.progress}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full rounded-full transition-all duration-500 animate-progress hover:brightness-110"
                style={{ 
                  width: `${subject.progress}%`,
                  backgroundColor: getSubjectColor(subject.name)
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
