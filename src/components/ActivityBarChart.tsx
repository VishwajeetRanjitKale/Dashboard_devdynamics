import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

interface ActivityPieChartProps {
  data: any[];
}

const ActivityPieChart: React.FC<ActivityPieChartProps> = ({ data }) => {
  // Process data for the pie chart
  const processedData = data.reduce((acc, day) => {
    day.items.children.forEach((activity: any) => {
      const existing = acc.find((a: any) => a.name === activity.label);
      if (existing) {
        existing.value += parseInt(activity.count, 10);
      } else {
        acc.push({
          name: activity.label,
          value: parseInt(activity.count, 10),
          fill: activity.fillColor,
        });
      }
    });
    return acc;
  }, []);

  // Debugging log
  console.log('Processed Data for PieChart:', processedData);

  return (
    <div className="activity-pie-chart">
       <h2 style={{ color: 'white' }}>Activity Pie Chart</h2>
      <PieChart width={600} height={300}>
        <Pie
          data={processedData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={90}
          fill="#8884d8"
          label
        >
          {processedData.map((entry: any, index: number) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default ActivityPieChart;