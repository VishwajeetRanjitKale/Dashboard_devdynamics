// // src/App.tsx
// import React, { useEffect, useState } from 'react';
// import ActivityChart from './components/ActivityChart';
// import ActivityTable from './components/ActivityTable';
// import FilterBar from './components/FilterBar';
// import SummaryStats from './components/SummaryStats';
// import { sampleData } from './data/sampleData';
// import './App.css';

// const App: React.FC = () => {
//   const [data, setData] = useState<any[]>([]);
//   const [filteredData, setFilteredData] = useState<any[]>([]);
//   const [filter, setFilter] = useState<string>('All');

//   useEffect(() => {
//     const data = sampleData.data.AuthorWorklog.rows;
//     setData(data);
//     setFilteredData(data);
//   }, []);

//   const handleFilterChange = (filter: string) => {
//     setFilter(filter);
//     if (filter === 'All') {
//       setFilteredData(data);
//     } else {
//       setFilteredData(data.filter(row => row.totalActivity.some((activity: any) => activity.name === filter)));
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Developer Activity Dashboard</h1>
//       <FilterBar filters={['All', 'PR Open', 'PR Merged', 'Commits', 'PR Reviewed', 'PR Comments', 'Incident Alerts', 'Incidents Resolved']} onFilterChange={handleFilterChange} />
//       <SummaryStats data={filteredData} />
//       <ActivityChart data={filteredData.map(row => row.dayWiseActivity).flat()} />
//       <ActivityTable data={filteredData} />
//     </div>
//   );
// };

// export default App;

import React, { useEffect, useState } from 'react';
import ActivityChart from './components/ActivityChart';
import ActivityTable from './components/ActivityTable';
import FilterBar from './components/FilterBar';
import SummaryStats from './components/SummaryStats';
import ActivityBarChart from './components/ActivityBarChart'; // New import
import { sampleData } from './data/sampleData';
import './App.css';

const App: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [filter, setFilter] = useState<string | null>(null);

  useEffect(() => {
    const data = sampleData.data.AuthorWorklog.rows;
    setData(data);
    setFilteredData(data);
  }, []);

  const handleFilterChange = (filter: string) => {
    setFilter(filter);
    if (filter === 'All') {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter(row => row.totalActivity.some((activity: any) => activity.name === filter)));
    }
  };

  return (
    <div className="App">
      <h1 className='app'>Developer Activity Dashboard</h1>
      <FilterBar filters={['All', 'PR Open', 'PR Merged', 'Commits', 'PR Reviewed', 'PR Comments', 'Incident Alerts', 'Incidents Resolved']} onFilterChange={handleFilterChange} />
      <SummaryStats data={filteredData} />
      <div className="charts-container">
        <ActivityChart data={filteredData.map(row => row.dayWiseActivity).flat()} />
        <ActivityBarChart data={filteredData.map(row => row.dayWiseActivity).flat()} />
      </div>
      <ActivityTable data={filteredData} />
    </div>
  );
};

export default App;


