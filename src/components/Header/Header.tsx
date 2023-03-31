import React from 'react';

interface HeaderProps {
  currentScore: number;
  highScore: number;
}

const Header = (props: HeaderProps) => {
  const { currentScore, highScore } = props;

  return (
    <header className='flex bg-gradient-to-t from-red-700 to-red-500 shadow-md justify-between items-center bg-[#f50303] text-white p-4 font-extrabold'>
      <h1 className='text-4xl'>Memory Game</h1>
      <div className=''>
        <div className='current-score'>Current Score: {currentScore}</div>
        <div className='high-score'>High Score: {highScore}</div>
      </div>
    </header>
  );
};

export default Header;
