import React from 'react';
import { Home, DollarSign, MessageCircle, Calendar } from 'lucide-react';

const BottomNav: React.FC = () => {
  return (
    <div className="lg:hidden fixed bottom-0 w-full bg-white shadow-md flex justify-around py-3 border-t border-gray-200 pb-8">

      <button className="text-blue-600 flex flex-col items-center gap-1">
        <Home className="w-6 h-6" />
        <span className="text-xs font-medium">Home</span>
      </button>
      <button className="text-gray-600 flex flex-col items-center gap-1">
        <DollarSign className="w-6 h-6" />
        <span className="text-xs font-medium">Fees</span>
      </button>
      <button className="text-gray-600 flex flex-col items-center gap-1">
        <MessageCircle className="w-6 h-6" />
        <span className="text-xs font-medium">Messages</span>
      </button>
      <button className="text-gray-600 flex flex-col items-center gap-1">
        <Calendar className="w-6 h-6" />
        <span className="text-xs font-medium">Events</span>
      </button>
    </div>

  );
};

export default BottomNav;
