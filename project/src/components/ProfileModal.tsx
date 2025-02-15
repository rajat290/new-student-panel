import React from 'react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  student: {
    name: string;
    email: string;
    phone: string;
    grade: number;
  };
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose, student }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-11/12 max-w-md">
        <h2 className="text-2xl font-bold mb-4">Profile Details</h2>
        <p className="mb-2"><strong>Name:</strong> {student.name}</p>
        <p className="mb-2"><strong>Email:</strong> {student.email}</p>
        <p className="mb-2"><strong>Phone:</strong> {student.phone}</p>
        <p className="mb-2"><strong>Grade:</strong> {student.grade}</p>
        <button 
          onClick={onClose} 
          className="mt-4 bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProfileModal;
