import { useState, useEffect } from 'react'
/*import reactLogo from './assets/react.svg'*/
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [colleges, setColleges] = useState([]); //User Created College List
  const [searchResult, setSearchResult] = useState([]); //store all colleges name, sample of using API
  const [search, setSearch] = useState(''); //not functioned yet

  //User input
  const [selectedCollege, setSelectedCollege] = useState('');
  const [program, setProgram] = useState('');
  const [dueDate, setDueDate] = useState('');

  // Jas: Fetch all colleges name (need filter)
  useEffect(() => {
    const apiKey = "2Bsb40fhvOmx8Epam3lXOeTrwSZlw09vlxV2o2ZZ";
    fetch(`https://api.data.gov/ed/collegescorecard/v1/schools?api_key=${apiKey}&{school.name}`)
      .then(res => res.json())
      .then(data => setSearchResult(data))
      .catch(err => console.error('Error fetching colleges:', err));
  }, [search]);

  // Jas: Add college to user list
  const addCollege = () => {
    if (!selectedCollege || !program || !dueDate) return;

    const newEntry = {
      name: selectedCollege,
      program,
      dueDate,
    };
    setColleges([...colleges, newEntry]);
    setSelectedCollege('');
    setProgram('');
    setDueDate('');
    setSearch('');
    setSearchResult([]);
  }


  return ( //Jas: This is a placeholder APP right now
    <div className="App">
      <h1>Track Tracker</h1>

      <input
        type="text"
        placeholder="Search colleges"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {searchResult.length > 0 && (
        <ul>
          {searchResult.map((college, index) => (
            <li key={index} onClick={() => setSelectedCollege(college.name)}>
              {college.name}
            </li>
          ))}
        </ul>
      )}

      {selectedCollege && (
        <div>
          <h2>{selectedCollege}</h2>
          <input
            type="text"
            placeholder="Program (e.g. Computer Science)"
            value={program}
            onChange={(e) => setProgram(e.target.value)}
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <button onClick={addCollege}>Add to My List</button>
        </div>
      )}

      <h2>My College List</h2>
      <ul>
        {colleges.map((entry, idx) => (
          <li key={idx}>
            <strong>{entry.name}</strong> – {entry.program}, Due: {entry.dueDate}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
