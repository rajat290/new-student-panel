import React from 'react';

const Teachers: React.FC = () => {
  const teachers = [
    { name: 'Ms. Elizabeth Johnson', id: 'SJ-ENG-123', subject: 'English Literature', classes: '9A, 10B', phone: '(555) 101-0101', address: '123 Elm St., Springfield, IL' },
    { name: 'Mr. Carlos Garcia', id: 'GRC-HIS-456', subject: 'History', classes: '8C, 11A', phone: '(555) 101-0102', address: '456 Oak Ave, Springfield, IL' },
    { name: 'Ms. Angela Jackson', id: 'JCK-MATH-789', subject: 'Math', classes: '7A, 12 AP Calculus', phone: '(555) 101-0103', address: '789 Pine Rd, Springfield, IL' },
    { name: 'Mr. Luis Rodrigue', id: 'ROD-DRA-012', subject: 'Drama', classes: 'Drama Club', phone: '(555) 101-0104', address: '012 Maple Dr, Springfield, IL' },
    { name: 'Ms. Susan Chen', id: 'CHN-SCI-345', subject: 'Science', classes: '8B, 9B Biology', phone: '(555) 101-0105', address: '345 Birch Ln, Springfield, IL' },
    { name: 'Mr. William Blake', id: 'THM-HIS-678', subject: 'History', classes: '10A, 11 AP World History', phone: '(555) 101-0106', address: '678 Cedar Blvd, Springfield, IL' },
    { name: 'Ms. Emily Lee', id: 'LEE-ENG-901', subject: 'English', classes: '7B, 8A', phone: '(555) 101-0107', address: '901 Walnut St, Springfield, IL' },
    { name: 'Mr. Fernando Davis', id: 'HER-SPA-234', subject: 'Spanish', classes: 'Spanish I, Spanish II', phone: '(555) 101-0108', address: '234 Spruce Way, Springfield, IL' },
    { name: 'Ms. Laura Lopez', id: 'LOP-MATH-567', subject: 'Math', classes: '7C, Pre-Algebra', phone: '(555) 101-0109', address: '567 Redwood Ct, Springfield, IL' },
    { name: 'Mr. Daniel Kim', id: 'KIM-ART-901', subject: 'Art', classes: 'Art I, Art II', phone: '(555) 101-0110', address: '890 Fir St, Springfield, IL' },
  ];

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm">
      <h1 className="text-2xl font-semibold">All Teachers List</h1>
      <table className="min-w-full mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2">Teacher Name</th>
            <th className="py-2">School ID</th>
            <th className="py-2">Subject</th>
            <th className="py-2">Class(es)</th>
            <th className="py-2">Phone Number</th>
            <th className="py-2">Address</th>
            <th className="py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher, index) => (
            <tr key={index} className="border-b">
              <td className="py-2">{teacher.name}</td>
              <td className="py-2">{teacher.id}</td>
              <td className="py-2">{teacher.subject}</td>
              <td className="py-2">{teacher.classes}</td>
              <td className="py-2">{teacher.phone}</td>
              <td className="py-2">{teacher.address}</td>
              <td className="py-2">
                <button className="text-blue-500">Edit</button>
                <button className="text-red-500 ml-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Teachers;
