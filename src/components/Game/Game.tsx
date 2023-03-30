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
    <main>
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
