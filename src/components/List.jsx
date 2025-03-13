import React, { useState } from 'react';

const List = ({ students, addStudent, addToFavorites }) => {
  const [input, setInput] = useState('');
  const [favoriteStudents, setFavoriteStudents] = useState([]);

  const handleAddStudent = () => {
    addStudent(input);
    setInput('');
  };

  const handleAddToFavorites = (student) => {
    if (!favoriteStudents.includes(student)) {
      setFavoriteStudents([...favoriteStudents, student]);
      addToFavorites(student);
    }
  };

  return (
    <div>
      <h1>Main List of Students</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter student name"
        />
        <button onClick={handleAddStudent}>Add</button>
      </div>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student}{' '}
            <button
              onClick={() => handleAddToFavorites(student)}
              disabled={favoriteStudents.includes(student)}
            >
              {favoriteStudents.includes(student) ? 'Added' : 'Add to Favorite'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
