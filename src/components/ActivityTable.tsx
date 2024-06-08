import React from 'react';

interface ActivityTableProps {
  data: any[];
}

const ActivityTable: React.FC<ActivityTableProps> = ({ data }) => {
  return (
    <div className="activity-table">
    <table>
      <thead>
        <tr>
          <th>Email</th>
          <th>PR Open</th>
          <th>PR Merged</th>
          <th>Commits</th>
          <th>PR Reviewed</th>
          <th>PR Comments</th>
          <th>Incident Alerts</th>
          <th>Incidents Resolved</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.name}</td>
            {row.totalActivity.map((activity: any, index: number) => (
              <td key={index}>{activity.value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default ActivityTable;