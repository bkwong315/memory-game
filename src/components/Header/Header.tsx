import React from 'react';

interface HeaderProps {
  currentScore: number;
  highScore: number;
}

const Header = (props: HeaderProps) => {
  const { currentScore, highScore } = props;

  return (
    <header>
      <h1 className='text-4xl text-white bg-black'>Memory Game</h1>
      <div className='score-container'>
        <div className='current-score'>Current Score: {currentScore}</div>
        <div className='high-score'>High Score: {highScore}</div>
      </div>
    </header>
  );
};

export default Header;
