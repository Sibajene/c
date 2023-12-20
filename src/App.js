import React, { useState, useEffect } from 'react';
import ChildForm from './components/ChildForm';
import ChildList from './components/ChildList';
import ChildProfile from './components/ChildProfile';
import { saveChild, getChildren } from './services/storage';
import './App.css';

const App = () => {
  const [children, setChildren] = useState([]);
  const [selectedChild, setSelectedChild] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate a network failure
    const simulateNetworkFailure = Math.random() < 0.2;

    if (simulateNetworkFailure) {
      setError('Network failure. Please try again later.');
    } else {
      // Load children from local storage on app mount
      const storedChildren = getChildren();
      if (storedChildren) {
        setChildren(storedChildren);
      }
    }
  }, []);

  const handleRegister = (child) => {
    // Save the new child to local storage and update state
    saveChild(child);
    setChildren([...children, child]);

    // Display an alert when the child is successfully registered
    alert('Child Successfully Registered');
  };

  const handleSort = (key) => {
    // Implement sorting logic based on the selected key
    const sortedChildren = [...children].sort((a, b) => {
      if (key === 'name') {
        return a.firstName.localeCompare(b.firstName);
      } else if (key === 'age') {
        return a.age - b.age;
      }
      return 0;
    });

    setChildren(sortedChildren);
  };

  const handleSelect = (child) => {
    // Set the selected child for the profile view
    setSelectedChild(child);
  };

  return (
    <div className="app-container">
      <h1>Child Registration App</h1>
      <ChildForm onRegister={handleRegister} />
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="content-container">
          <ChildList children={children} onSort={handleSort} onSelect={handleSelect} />
          {selectedChild && <ChildProfile child={selectedChild} />}
        </div>
      )}
    </div>
  );
};

export default App;
