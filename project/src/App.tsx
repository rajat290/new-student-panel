import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import BottomNav from './components/BottomNav';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { WelcomeCard } from './components/WelcomeCard';
import { StatsGrid } from './components/StatsGrid';
import { Performance } from './components/Performance';
import { ScoreActivity } from './components/ScoreActivity';
import { AssignmentsTable } from './components/AssignmentsTable';
import { Calendar } from './components/Calendar';
import { Agenda } from './components/Agenda';
import { Messages } from './components/Messages';
import { Footer } from './components/Footer';
import { student, stats, assignments, subjects, messages, agenda, calendar, holidays, events } from './data/mockData';

const scoreData = [
  { week: 'Week 1', score: 85 },
  { week: 'Week 2', score: 90 },
  { week: 'Week 3', score: 78 },
  { week: 'Week 4', score: 92 },
  { week: 'Week 5', score: 88 },
  { week: 'Week 6', score: 95 },
  { week: 'Week 7', score: 83 }
];

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#ECF0F1]">

      <Sidebar isMobileMenuOpen={isMobileMenuOpen} />

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 md:p-8">
        <Header onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Left Column */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              <WelcomeCard student={student} />
              <StatsGrid stats={stats} />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <Performance gpa={student.gpa} />
                <Agenda items={agenda} />
              </div>

              <ScoreActivity scoreData={scoreData} />
            </div>

          {/* Right Column */}
          <div className="space-y-4 sm:space-y-6">
            <Calendar month={calendar.month} days={calendar.days} holidays={holidays} events={events} />
            <AssignmentsTable assignments={assignments} />
            <Messages messages={messages} />
          </div>
        </div>

        <Footer />
      </div>
      <BottomNav />
    </div>
  );
}

export default App;
