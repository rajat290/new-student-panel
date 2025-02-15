import React, { useState } from 'react';
import { Bell, Search, ChevronDown, Menu, Home, ArrowLeft } from 'lucide-react';

export const Header: React.FC<{ onMenuToggle: () => void }> = ({ onMenuToggle }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8 bg-white p-3 sm:p-4 rounded-lg shadow-sm">
      <div className="flex items-center gap-4 sm:w-full">
        <button 
          onClick={onMenuToggle}
          className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors sm:mr-2"
        >
          <Menu className="h-6 w-6" />
        </button>
        <button
          className="hidden sm:flex p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors mr-2"
        >
          <Home className="h-6 w-6" />
        </button>
        <button
          className="hidden sm:flex p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <div className="relative w-48 sm:w-64 sm:mb-0">
          <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#64748B]" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-[#64748B] focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-300 w-full"
          />
        </div>

        <div className="relative sm:mr-4 ml-auto">
          <Bell className="h-6 w-6 text-[#64748B] cursor-pointer hover:text-blue-600 transition-colors" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>
        <div className="flex items-center gap-2 group relative">
          <img
            src="/Untitled (1).jpg"
            alt="Profile"
            className="h-8 w-8 rounded-full object-cover cursor-pointer"
          />
          <ChevronDown className="h-4 w-4 text-[#64748B] group-hover:text-blue-600 transition-colors" />
          <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg hidden group-hover:block">
            <div className="py-2">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
              <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50">Log out</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
