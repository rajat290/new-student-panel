import React, { useState } from 'react';
import { ChevronRight, Mail, Phone } from 'lucide-react';
import { Student } from '../types';
import ProfileModal from './ProfileModal';

interface WelcomeCardProps {
  student: Student;
}

export const WelcomeCard: React.FC<WelcomeCardProps> = ({ student }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div 
        className="bg-[#E0F2FE] rounded-xl p-6 animate-fade-in cursor-pointer hover:bg-[#BAE6FD] transition-colors"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex items-center gap-6">
          <img
            src="/Untitled (1).jpg"
            alt="Profile"
            className="h-24 w-24 rounded-full object-cover border-4 border-[#38BDF8] hover:animate-bounce"
          />
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-2xl font-bold text-[#0F172A]">{student.name}</h1>
              <button className="p-1 rounded-full bg-white">
                <ChevronRight className="h-4 w-4 text-gray-600" />
              </button>
            </div>
            {/* <p className="text-[#2C3E50] mb-4">Red House.</p> */}
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#0F172A]">Grade {student.grade}</span>
            </div>
          </div>

          </div>
        </div>
      </div>
      <ProfileModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        student={student}
      />
    </>
  );
};
