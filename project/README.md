# New Student Panel

A comprehensive student management dashboard built with React and Tailwind CSS.

## Project Structure

```
project/
├── public/                  # Static assets
├── src/
│   ├── components/            # Reusable UI components
│   ├── pages/                 # Main page components
│   ├── data/                  # Mock data and constants
│   ├── types/                 # TypeScript type definitions
│   ├── App.tsx                # Main application component
│   ├── main.tsx               # Application entry point
│   └── index.css              # Global styles
├── .gitignore                 # Git ignore rules
├── package.json               # Project dependencies
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── vite.config.ts             # Vite configuration
```

## Key Components

### 1. Dashboard Components
- **Header.tsx**: Top navigation bar
- **Sidebar.tsx**: Left-side navigation menu
- **StatsGrid.tsx**: Displays key statistics in a grid layout
- **Performance.tsx**: Visualizes student performance metrics
- **ScoreActivity.tsx**: Shows score trends over time

### 2. Academic Components
- **AssignmentsTable.tsx**: Manages and displays assignments
- **Agenda.tsx**: Displays upcoming events and deadlines
- **GradeBySubject.tsx**: Shows grades organized by subject

### 3. UI Components
- **WelcomeCard.tsx**: Welcome message and quick actions
- **ProfileModal.tsx**: User profile management
- **BottomNav.tsx**: Mobile navigation bar
- **Calendar.tsx**: Interactive calendar component

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/rajat290/new-student-panel.git
   ```

2. Install dependencies:
   ```bash
   cd new-student-panel
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:5173
   ```

## Usage

1. **Navigation**:
   - Use the sidebar to access different sections
   - Mobile users can use the bottom navigation

2. **Dashboard**:
   - View key statistics at a glance
   - Check performance metrics
   - Monitor score trends

3. **Assignments**:
   - View upcoming assignments
   - Check due dates and status
   - Manage tasks using action buttons

4. **Profile**:
   - Access your profile information
   - Update personal details

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- Lucide Icons

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License

MIT License
