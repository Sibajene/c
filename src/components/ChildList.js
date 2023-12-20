import React, { useState } from 'react';

const ChildList = ({ children, onSort, onSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSort = (key) => {
    onSort(key);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredChildren = children.filter((child) => {
    const fullName = `${child.firstName} ${child.lastName}`;
    return fullName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      <h2>Child List</h2>
      <label>Sort by:</label>
      <select onChange={(e) => handleSort(e.target.value)}>
        <option value="name">Name</option>
        <option value="age">Age</option>
      </select>
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={handleSearch}
      />
      <ul>
        {filteredChildren.map((child) => (
          <li key={child.firstName} onClick={() => onSelect(child)}>
            {child.firstName} {child.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChildList;
