import React from 'react';

import Game from './components/Game/Game';
import './style.css';

const App = () => {
  return (
    <>
      <h1 className='text-4xl text-white bg-black'>Memory Game</h1>
      <Game />
    </>
  );
};

export default App;
