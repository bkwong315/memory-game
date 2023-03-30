import React, { useState } from 'react';

import Game from './components/Game/Game';
import CardInfo from './interfaces/CardInfo';
import shuffle from './utility/shuffle';
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
  const [currentScore, setCurrentScore] = useState(0);
  let shuffledChoices: CardInfo[] = shuffle(choices);

  const handleCardClick = (idx: number) => {
    if (choices[idx].selected) {
      console.log('Selected choice already');
      setCurrentScore(0);
    } else {
      setChoices((prevState) => {
        let mutatedArr = [...prevState];
        mutatedArr[idx].selected = true;
        return mutatedArr;
      });
      setCurrentScore((prevState) => prevState + 1);
    }
  };

  return (
    <>
      <h1 className='text-4xl text-white bg-black'>Memory Game</h1>
      <div className='score-container'>
        <div className='current-score'>{currentScore}</div>
      </div>
      <Game choices={shuffledChoices} handleCardClick={handleCardClick} />
    </>
  );
};

export default App;
