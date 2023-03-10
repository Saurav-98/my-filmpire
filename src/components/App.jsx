import React from 'react';

import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import { Profile, Actors, NavBar, Movies, MovieInformation } from './';

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
      }}
    >
      <CssBaseline />

      <NavBar />
      <main
        style={{
          flexGrow: '1',
          padding: '2em',
        }}
      >
        <div
          style={{
            height: '70px',
          }}
        />
        <Routes>
          <Route exact path="/movie/:id" element={<MovieInformation />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
