import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface ActivityChartProps {
  data: any[];
}

const ActivityChart: React.FC<ActivityChartProps> = ({ data }) => {
  return (
    <div className="activity-chart">
       <h2 style={{ color: 'white' }}>Activity Chart</h2>
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" axisLine={{ stroke: 'white' }} tick={{ fill: 'white' }}/>
      <YAxis axisLine={{ stroke: 'white' }} tick={{ fill: 'white' }}/>
      <Tooltip />
      <Legend />
     
      {data[0] && Object.keys(data[0].items.children).map((key, index) => (
        <Line key={index} type="monotone" dataKey={`items.children[${index}].count`} stroke={data[0].items.children[key].fillColor} />
      ))}
      
    </LineChart>
    </div>
  );
};

export default ActivityChart;
