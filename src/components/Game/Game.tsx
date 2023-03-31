import React from 'react';

import Card from './Card';
import CardInfo from '../../interfaces/CardInfo';

interface GameProps {
  choices: CardInfo[];
  handleCardClick: (idx: number) => void;
}

const Game = (props: GameProps) => {
  const { choices, handleCardClick } = props;

  return (
    <main className='grid grid-rows-2 grid-cols-5 gap-4 p-8 min-h-0 min-w-0 bg-red-800'>
      {choices.map((choice, idx) => (
        <Card
          cardInfo={choice}
          key={idx}
          idx={idx}
          onClickHandler={handleCardClick}
        />
      ))}
    </main>
  );
};

export default Game;
