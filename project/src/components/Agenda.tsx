import React, { useState } from 'react';
import { BookOpen, Calendar, Clipboard, Presentation } from 'lucide-react';
import { AgendaItem } from '../types';

interface AgendaProps {
  items: AgendaItem[];
}

export const Agenda: React.FC<AgendaProps> = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const getSubjectIcon = (subject: string) => {
    switch (subject.toLowerCase()) {
      case 'mathematics':
        return <Presentation className="h-4 w-4 text-[#64748B]" />;
      case 'english':
        return <BookOpen className="h-4 w-4 text-[#64748B]" />;
      default:
        return <Clipboard className="h-4 w-4 text-[#64748B]" />;
    }
  };

  return (
    <div className="bg-[#F1F5F9] rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Agenda</h2>
        <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-yellow-600 transition-all duration-200 shadow-sm hover:shadow-md">
              See More
            </button>
      </div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div 
            key={index}
            className={`border-l-2 border-blue-500 pl-4 animate-slide-in hover:bg-[#E2E8F0] rounded-lg p-2 cursor-pointer ${
              expandedIndex === index ? 'bg-[#E2E8F0]' : ''
            }`}
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
          >
            <div className="text-sm text-[#64748B]">{item.date}</div>
            <div className="font-bold text-[#0F172A]">{item.event}</div>
            <div className="flex items-center gap-2 text-sm text-[#64748B]">
              {getSubjectIcon(item.subject)}
              <span>{item.subject}</span>
            </div>
            {expandedIndex === index && (
              <div className="mt-2 text-sm text-[#64748B]">
                {item.description || 'No additional details available'}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
