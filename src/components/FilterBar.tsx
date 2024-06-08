import React from 'react';

interface FilterBarProps {
  filters: string[];
  onFilterChange: (filter: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ filters, onFilterChange }) => {
  return (
    <div>
      {filters.map((filter, index) => (
        <button key={index} onClick={() => onFilterChange(filter)}>
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
// import React from 'react';

// interface FilterBarProps {
//   filters: string[];
//   onFilterChange: (filter: string) => void;
// }

// const FilterBar: React.FC<FilterBarProps> = ({ filters, onFilterChange }) => {
//   return (
//     <div className="filter-bar">
//       {filters.map((filter, index) => (
//         <button key={index} onClick={() => {
//           console.log('Button clicked:', filter); // Add this line for debugging
//           onFilterChange(filter);
//         }}>
//           {filter}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default FilterBar;
