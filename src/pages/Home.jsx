// src/pages/Home.jsx
import '../styles/home.css';

import React from 'react';
import Exercises from '../components/Exercises';

function Home() {
  return (
    <div className='home-container' style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <Exercises />
    </div>
  );
}

export default Home;
