import React from 'react';
import { Settings, LogOut, Plus } from 'lucide-react';
import { Assignment } from '../types';

interface AssignmentsTableProps {
  assignments: Assignment[];
}

export const AssignmentsTable: React.FC<AssignmentsTableProps> = ({ assignments }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Assignments</h2>
        <button className="p极客时间-2 rounded-full bg-[#F1C40F]">
          <Plus className="h-5 w-5 text-white" />
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="text-left text-sm text-gray-600 bg-gray-50">
              <th className="pb-4">No</th>
              <th className="pb-4">Task</th>
              <th className="pb-4">Subject</th>
              <th className="pb-4">Due Date</th>
              <th className="pb-4">Time</th>
              <th className="pb-4">Status</th>
              <th className="pb-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {assignments.slice(0, 3).map((assignment) => (
              <tr 
                key={assignment.id} 
                className="border-t border-[#D5DBDB] hover:bg-gray-50 animate-slide-up"
              >
              <td className="py-4 px-4 text-gray-800">{assignment.id}</td>
              <td className="py-4 px-4 font-medium text-gray-800 truncate max-w-[200px]">{assignment.task}</td>
              <td className="py-4 px-4 text-gray-600 truncate max-w-[150px]">{assignment.subject}</td>
              <td className="py-4 px-4 text-gray-800">{assignment.dueDate}</td>
              <td className="py-4 px-4 text-gray-800">{assignment.time}</td>

                <td className="py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    assignment.status === 'In Progress' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {assignment.status}
                  </span>
                </td>
                <td className="py-4">
                  <div className="flex gap-2">
                    <div className="relative">
                    <button className="p-1 rounded bg-gray-100 hover:bg-gray-200 transition-colors group">
                      <Settings className="h-4 w-4 text-gray-600 hover:text-gray-800" />

                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          Edit Task
                        </div>
                      </button>
                    </div>
                    <div className="relative">
                      <button className="p-1 rounded bg-gray-100 group">
                        <LogOut className="h-4 w-4 text-gray-600" />
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          Mark as Done
                        </div>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {assignments.length > 3 && (
          <div className="flex justify-center mt-4">
            <button className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all duration-200 shadow-sm hover:shadow-md">
              See More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
