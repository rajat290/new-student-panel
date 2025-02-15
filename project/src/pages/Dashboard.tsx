import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 bg-white rounded-xl shadow-sm w-full max-w-full overflow-hidden">
      <h1 className="text-xl sm:text-2xl font-semibold break-words">Dashboard</h1>
      <p className="text-sm sm:text-base mt-2 break-words whitespace-normal overflow-ellipsis overflow-hidden">
        Welcome to the Dashboard! Here you can find an overview of your activities.
      </p>



    </div>
  );
};

export default Dashboard;
