import React from 'react';
import { useState } from 'react';

import Game from './components/Game/Game';
import CardInfo from './interfaces/CardInfo';
import './style.css';

const App = () => {
  const [choices, setChoices] = useState<CardInfo[]>([
    {
      imgUrl: 'bg-orange-50',
      selected: false,
    },
    {
      imgUrl: 'bg-orange-100',
      selected: false,
    },
    {
      imgUrl: 'bg-orange-200',
      selected: false,
    },
    {
      imgUrl: 'bg-orange-300',
      selected: false,
    },
    {
      imgUrl: 'bg-orange-400',
      selected: false,
    },
    {
      imgUrl: 'bg-orange-500',
      selected: false,
    },
    {
      imgUrl: 'bg-orange-600',
      selected: false,
    },
    {
      imgUrl: 'bg-orange-700',
      selected: false,
    },
    {
      imgUrl: 'bg-orange-800',
      selected: false,
    },
    {
      imgUrl: 'bg-orange-900',
      selected: false,
    },
  ]);

  return (
    <>
      <h1 className='text-4xl text-white bg-black'>Memory Game</h1>
      <Game choices={choices} />
    </>
  );
};

export default App;
