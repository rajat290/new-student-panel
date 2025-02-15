import React from 'react';
import { CheckCircle, Clock, Award, UserCheck } from 'lucide-react';
import { Stat } from '../types';

interface StatsGridProps {
  stats: Stat[];
}

export const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {stats.map((stat, index) => {
        let bgColor = '';
        let icon = null;
        let textColor = '';
        
        switch (stat.label) {
          case 'Attendance':
            bgColor = 'bg-gradient-to-b from-[#D1FAE5] to-[#A8E6CF]';
            textColor = 'text-[#065F46]';
            icon = <UserCheck className="h-6 w-6" />;
            break;
          case 'Task Completed':
            bgColor = 'bg-gradient-to-b from-[#FDE68A] to-[#FFEBA1]';
            textColor = 'text-[#92400E]';
            icon = <CheckCircle className="h-6 w-6" />;
            break;
          case 'Task in Progress':
            bgColor = 'bg-gradient-to-b from-[#BFDBFE] to-[#D1E8FF]';
            textColor = 'text-[#1E40AF]';
            icon = <Clock className="h-6 w-6" />;
            break;
          case 'Reward Points':
            bgColor = 'bg-gradient-to-b from-[#E9D5FF] to-[#E1BEE7]';
            textColor = 'text-[#6B21A8]';
            icon = <Award className="h-6 w-6" />;
            break;
          default:
            bgColor = 'bg-white';
            textColor = 'text-gray-800';
        }
        return (
          <div key={index} className={`${bgColor} ${textColor} p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center`}>
            <div className="mb-3">
              {icon && React.cloneElement(icon, { className: "h-8 w-8" })}
            </div>
            <div className="text-base font-semibold mb-1">{stat.label}</div>
            <div className="text-xl font-bold">{stat.value}</div>
          </div>
        );
      })}
    </div>
  );
};
