import React from 'react';
import { Message } from '../types';

interface MessagesProps {
  messages: Message[];
}

export const Messages: React.FC<MessagesProps> = ({ messages }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Messages</h2>
        <button className="text-sm text-blue-500">View All</button>
      </div>
      <div className="space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="flex gap-3">
            <img
              src={message.avatar}
              alt={message.sender}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="font-medium">{message.sender}</h3>
                <span className="text-xs text-gray-500">{message.time}</span>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">{message.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};