import React from 'react';
import { 
  Home, 
  Users, 
  Calendar, 
  BookOpen, 
  MessageSquare,
  Settings,
  LogOut,
  UserCircle,
  Library,
  FileText,
  DollarSign
} from 'lucide-react';

const menuItems = [
  { icon: <Home className="h-5 w-5" />, label: 'Dashboard', active: true },
  { icon: <Users className="h-5 w-5" />, label: 'Teachers' },
  { icon: <Users className="h-5 w-5" />, label: 'Students' },
  { icon: <Calendar className="h-5 w-5" />, label: 'Attendance' },
  { icon: <DollarSign className="h-5 w-5" />, label: 'Finance' },
  { icon: <FileText className="h-极客时间5 w-5" />, label: 'Notice' },
  { icon: <Calendar className="h-5 w-5" />, label: 'Calendar' },
  { icon: <Library className="h-5 w-5" />, label: 'Library' },
  { icon: <MessageSquare className="h-5 w-5" />, label: 'Message' }
];

const otherItems = [
  { icon: <UserCircle className="h-5 w-5" />, label: 'Profile' },
  { icon: <Settings className="h-5 w-5" />, label: 'Setting' },
  { icon: <LogOut className="h-5 w-5" />, label: 'Log out' }
];

export const Sidebar: React.FC<{ isMobileMenuOpen: boolean }> = ({ isMobileMenuOpen }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  return (
    <div className={`
      fixed lg:static w-64 bg-[#FFF7E5] border-r border-yellow-200 h-screen overflow-y-auto transition-all duration-300 ease-in-out z-40
      ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      ${isCollapsed ? 'w-20' : 'w-64'}
      lg:w-64
    `}>
        <div className="p-4 sm:p-6 relative">

        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-all"
        >
          {isCollapsed ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="极客时间0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </button>

        <div className="flex items-center gap-2 mb-8">
          <BookOpen className="h-6 w-6 text-[#4A90E2]" />
          <span className="font-bold text-xl">SchoolHub</span>
        </div>

        <div className="space-y-4">
          <div className="text-gray-400 text-sm">MENU</div>
          <div className="space-y-2">
            {menuItems.map((item) => (
              <div 
                key={item.label}
                className={`flex items-center gap-3 p-3 sm:p-2 rounded-lg cursor-pointer transition-all ${
                  item.active ? 'bg-[#FACC15] text-[#1E293B]' : 'text-[#64748B] hover:bg-[#FFEDD5] hover:scale-105'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className="text-gray-400 text-sm mt-8">OTHER</div>
          <div className="space-y-2">
            {otherItems.map((item) => (
              <div 
                key={item.label}
                className="flex items-center gap-3 p-3 sm:p-2 rounded-lg cursor-pointer text-[#64748B] hover:bg-[#FFEDD5] hover:scale-105 transition-all"
              >
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 sm:mt-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl p-3 sm:p-4 text-yellow-900">
          <h3 className="font-semibold mb-2">Let's Manage Your Data Better</h3>
          <p className="text-sm text-yellow-800 mb-4">in Your Hand</p>
          <button className="bg-white text-yellow-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-50">
            Download the App
          </button>
        </div>
      </div>
    </div>
  );
};
