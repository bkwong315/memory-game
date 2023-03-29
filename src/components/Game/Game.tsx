import React from 'react';

import Card from './Card';
import CardInfo from '../../interfaces/CardInfo';

interface GameProps {
  choices: CardInfo[];
}

const Game = (props: GameProps) => {
  const { choices } = props;

  return (
    <main>
      {choices.map((choice, idx) => (
        <Card cardInfo={choice} key={idx} />
      ))}
    </main>
  );
};

export default Game;
