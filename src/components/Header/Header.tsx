import React from 'react';

interface HeaderProps {
  currentScore: number;
  highScore: number;
}

const Header = (props: HeaderProps) => {
  const { currentScore, highScore } = props;

  return (
    <header className='flex bg-gradient-to-t from-red-700 to-red-500 shadow-md justify-between items-center text-white p-4 font-extrabold'>
      <h1 className='text-4xl shadow-inner shadow-slate-700 rounded p-4 py-2 bg-slate-800'>
        Pokemon Memory Game
      </h1>
      <div className='shadow-inner shadow-slate-700 rounded px-4 py-2 bg-slate-800'>
        <div className='text-end'>Current Score: {currentScore}</div>
        <div className='text-end'>High Score: {highScore}</div>
      </div>
    </header>
  );
};

export default Header;
