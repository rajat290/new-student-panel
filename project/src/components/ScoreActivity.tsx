import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, LabelList, ResponsiveContainer } from 'recharts';

interface ScoreActivityProps {
  scoreData: { week: string; score: number }[];
}

export const ScoreActivity: React.FC<ScoreActivityProps> = ({ scoreData }) => {
   // Find highest and lowest scores for highlighting
  const maxScore = Math.max(...scoreData.map((d) => d.score));
  const minScore = Math.min(...scoreData.map((d) => d.score));
  const averageScore = (scoreData.reduce((sum, d) => sum + d.score, 0) / scoreData.length).toFixed(1);

  // Process data to include color information
  const processedData = scoreData.map((entry) => ({
    ...entry,
    fill: entry.score === maxScore ? "#00C853" : 
          entry.score === minScore ? "#D50000" : "url(#barGradient)"
  }));

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Score Activity</h2>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={processedData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8E2DE2" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#4A00E0" stopOpacity={0.8} />
              </linearGradient>
            </defs>
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            {processedData.map((entry, index) => (
              <Bar
                key={index}
                dataKey="score"
                fill={entry.fill}
                radius={[10, 10, 0, 0]}
                stackId="a"
              />
            ))}
            <LabelList
              dataKey="score"
              position="top"
              formatter={(value: number) => `${value}%`}
              fill="#666"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-50 p-3 rounded-lg">
          <p className="text-sm text-green-700">🏆 Best Score</p>
          <p className="font-semibold">{maxScore}%</p>
        </div>
        <div className="bg-red-50 p-3 rounded-lg">
          <p className="text-sm text-red-700">⚠️ Lowest Score</p>
          <p className="font-semibold">{minScore}%</p>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-sm text-blue-700">📊 Average Score</p>
          <p className="font-semibold">{averageScore}%</p>
        </div>
      </div>
    </div>
  );
};
