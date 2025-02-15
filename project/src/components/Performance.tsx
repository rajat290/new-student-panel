import React, { useEffect, useState } from 'react';
import { Trophy, Star, TrendingUp } from 'lucide-react';

interface PerformanceProps {
  gpa: number;
}

export const Performance: React.FC<PerformanceProps> = ({ gpa }) => {
  const gpaPercentage = (gpa / 10.0) * 100;

  useEffect(() => {
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
      progressBar.style.width = `${gpaPercentage}%`;
    }
  }, [gpaPercentage]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Academic Performance</h2>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm">GPA Progress</span>
            <span className="text-sm">{gpa.toFixed(1)}/10</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 relative overflow-hidden">
            <div 
              className="absolute h-2.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 transition-all duration-1000" 
              style={{ width: '0%' }}
              id="progressBar"
            ></div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <div className="text-sm text-gray-600">Current GPA</div>
            </div>
            <div className="text-2xl font-bold mt-2">{gpa.toFixed(1)}</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-teal-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-green-600" />
              <div className="text-sm text-gray-600">Target GPA</div>
            </div>
            <div className="text-2xl font-bold mt-2">9.0</div>
          </div>
        </div>
      </div>
    </div>
  );
};
