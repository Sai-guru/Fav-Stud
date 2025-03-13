import React from 'react';

const FavList = ({ favorites, removeFromFavorites }) => {
  return (
    <div>
      <h1>Favorite Students</h1>
      <ul>
        {favorites.map((student, index) => (
          <li key={index}>
            {student}{' '}
            <button onClick={() => removeFromFavorites(student)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavList;
