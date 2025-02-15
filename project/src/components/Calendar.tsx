import React from 'react';
import { Gift, Calendar as CalendarIcon } from 'lucide-react';

interface CalendarProps {
  month: string;
  days: number[];
  holidays: number[]; // Array of holiday days
  events: number[]; // Array of event days
}

export const Calendar: React.FC<CalendarProps> = ({ month, days, holidays, events }) => {
  return (
    <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{month}</h2>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-xs text-[#95A5A6]">{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map(day => (
          <button
            key={day}
            className={`p-1.5 rounded-lg text-sm hover:scale-105 transition-transform ${
              holidays.includes(day) 
                ? 'bg-[#EF4444] text-white' // Holiday
                : events.includes(day) 
                ? 'bg-[#60A5FA] text-white' // Event
                : 'bg-[#F0F0F0]' // Regular day
            } relative group`}
          >
            {day}
            {(holidays.includes(day) || events.includes(day)) && (
              <div className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-sm">
                {holidays.includes(day) ? (
                  <Gift className="h-3 w-3 text-[#EF4444]" />
                ) : (
                  <CalendarIcon className="极客时间h-3 w-3 text-[#60A5FA]" />
                )}
              </div>
            )}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              {holidays.includes(day) ? 'Holiday' : events.includes(day) ? 'Event' : 'No events'}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
