import React from 'react';
import { Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <div className="mt-8 py-4 border-t border-[#D5DBDB]">
      <div className="flex flex-wrap justify-between items-center text-sm text-[#95A5A6]">
        <div className="flex gap-4">
          <a href="mailto:emailaddress@mail.com" className="hover:text-[#2C3E50]">
            <Mail className="h-4 w-4 inline mr-1" />
            emailaddress@mail.com
          </a>
          <span>
            <Phone className="h-4 w-4 inline mr-1" />
            +91-7348765761
          </span>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-[#2C3E50]">Terms of Use</a>
          <a href="#" className="hover:text-[#2C3E50]">Privacy Policy</a>
          <span>Copyright © Rajat Singh</span>
        </div>
      </div>
    </div>
  );
};
