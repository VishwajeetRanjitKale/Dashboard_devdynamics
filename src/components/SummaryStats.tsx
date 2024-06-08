// import React from 'react';

// interface SummaryStatsProps {
//   data: any[];
// }

// const SummaryStats: React.FC<SummaryStatsProps> = ({ data }) => {
//   const totalActivities = data.reduce((acc, row) => {
//     row.totalActivity.forEach((activity: any) => {
//       acc[activity.name] = (acc[activity.name] || 0) + parseInt(activity.value, 10);
//     });
//     return acc;
//   }, {} as Record<string, number>);

//   return (
//     <div className='summary-stats'>
//       {Object.keys(totalActivities).map((key, index) => (
//         <div key={index}>
//           <strong>{key}:</strong> {totalActivities[key]}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SummaryStats;
import React from 'react';

interface SummaryStatsProps {
  data: any[];
}

const SummaryStats: React.FC<SummaryStatsProps> = ({ data }) => {
  const totalActivities = data.reduce((acc, row) => {
    row.totalActivity.forEach((activity: any) => {
      acc[activity.name] = (acc[activity.name] || 0) + parseInt(activity.value, 10);
    });
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className='summary-stats'>
      {/* <h2 style={{ color: 'white' }}>Summary Stats</h2> */}
      {Object.keys(totalActivities).map((key, index) => (
        <div key={index} className="activity-card">
          <div className="activity-name">{key}</div>
          <div className="activity-value">{totalActivities[key]}</div>
        </div>
      ))}
    </div>
  );
};

export default SummaryStats;
