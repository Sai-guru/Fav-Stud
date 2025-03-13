import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import List from './components/List';
import FavList from './components/FavList';
import './App.css';

const App = () => {
  const [students, setStudents] = useState([]); // Main list of students
  const [favorites, setFavorites] = useState([]); // Favorite students

  const addStudent = (name) => {
    if (name && !students.includes(name)) {
      setStudents([...students, name]);
    }
  };

  const addToFavorites = (name) => {
    if (!favorites.includes(name)) {
      setFavorites([...favorites, name]);
    }
  };

  const removeFromFavorites = (name) => {
    setFavorites(favorites.filter((student) => student !== name));
  };

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Main List of Students</Link> |{' '}
          <Link to="/favorites">Favorite Students</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <List
                students={students}
                addStudent={addStudent}
                addToFavorites={addToFavorites}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <FavList
                favorites={favorites}
                removeFromFavorites={removeFromFavorites}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
