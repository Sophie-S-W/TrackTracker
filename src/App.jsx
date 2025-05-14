import React, { useState, useEffect } from 'react';
import './App.css'; // Ensure you import the necessary CSS file for styling

import EnvelopIcon from './assets/Envelop.svg';
import FireworkGroup from './assets/FireworkGroup.svg';
import Icon from './assets/TrackTracker.svg';
import Logo from './assets/Logo-2.svg';

function App() {
  // State hooks for managing data
  const [colleges, setColleges] = useState([]); // List of colleges added by the user
  const [searchResult, setSearchResult] = useState([]); // Colleges fetched from API based on search query
  const [search, setSearch] = useState(''); // Search query entered by user
  const [selectedCollege, setSelectedCollege] = useState(''); // College selected by user
  const [program, setProgram] = useState(''); // Program selected by user
  const [dueDate, setDueDate] = useState(''); // Due date for the application

  // Fetch colleges from API based on search query
  useEffect(() => {
    if (search === '') return; // Do not fetch if the search is empty

    const apiKey = '2Bsb40fhvOmx8Epam3lXOeTrwSZlw09vlxV2o2ZZ'; // Your API key for fetching college data
    fetch(`https://api.data.gov/ed/collegescorecard/v1/schools?api_key=${apiKey}&school.name=${search}`)
      .then((res) => res.json())
      .then((data) => {
        // Handle API response and store college data in searchResult state
        setSearchResult(data.results || []); // In case no results, fallback to an empty array
      })
      .catch((err) => console.error('Error fetching colleges:', err));
  }, [search]); // Re-run whenever the search query changes

  // Add selected college to user's college list
  const addCollege = () => {
    if (!selectedCollege || !program || !dueDate) return; // Ensure all fields are filled

    const newEntry = {
      name: selectedCollege,
      program,
      dueDate,
    };
    setColleges([...colleges, newEntry]); // Add new college entry to the list
    setSelectedCollege(''); // Clear selected college
    setProgram(''); // Clear program field
    setDueDate(''); // Clear due date field
  };

  return (
    <div className="App">
      {/* Top bar with icon */}
      <div className="top-bar">
        <img src={Logo} alt="TrackTracker Logo" className="logo" />
        <img src={Icon} alt="TrackTracker Icon" className="icon" />
      </div>

      {/* Search Box */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search colleges"
          value={search}
          onChange={(e) => setSearch(e.target.value)} // Update search query
        />
      </div>

      {/* Display Search Results */}
      {searchResult.length > 0 && (
        <div className="search-results">
          <ul>
            {searchResult.map((college, index) => (
              <li key={index} onClick={() => setSelectedCollege(college.name)}>
                {/* Display college logo and name */}
                <img
                  src={college.school?.school_logo || EnvelopIcon} // Display logo if available
                  alt={college.name}
                  className="college-logo"
                />
                <span>{college.name}</span>
                <button onClick={() => setSelectedCollege(college.name)}>
                  Add to My List
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* College Details Form */}
      {selectedCollege && (
        <div className="college-details">
          <h2>{selectedCollege}</h2>
          <input
            type="text"
            placeholder="Program (e.g. Computer Science)"
            value={program}
            onChange={(e) => setProgram(e.target.value)} // Update program
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)} // Update due date
          />
          <button onClick={addCollege} disabled={!program || !dueDate}>Add to My List</button> {/* Add college to user's list */}
        </div>
      )}

      {/* User's College List */}
      <h2>My College List</h2>
      <ul>
        {colleges.length === 0 ? (
          <div className="empty-college-list">
            <p>No colleges added yet. Please add some colleges.</p> {/* Display message if no colleges added */}
          </div>
        ) : (
          colleges.map((entry, idx) => (
            <li key={idx}>
              <strong>{entry.name}</strong> - {entry.program}, Due: {entry.dueDate}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
