import React, { useState } from 'react';

import abraImg from './assets/imgs/abra.png';
import bulbasaurImg from './assets/imgs/bulbasaur.png';
import charmanderImg from './assets/imgs/charmander.png';
import diglettImg from './assets/imgs/diglett.png';
import eeveeImg from './assets/imgs/eevee.png';
import meowthImg from './assets/imgs/meowth.png';
import mewImg from './assets/imgs/mew.png';
import oddishImg from './assets/imgs/oddish.png';
import pikachuImg from './assets/imgs/pikachu.png';
import squirtleImg from './assets/imgs/squirtle.png';

import Game from './components/Game/Game';
import CardInfo from './interfaces/CardInfo';
import shuffle from './utility/shuffle';
import Header from './components/Header/Header';
import './style.css';

const App = () => {
  const defaultState = [
    {
      imgUrl: abraImg,
      selected: false,
    },
    {
      imgUrl: bulbasaurImg,
      selected: false,
    },
    {
      imgUrl: charmanderImg,
      selected: false,
    },
    {
      imgUrl: diglettImg,
      selected: false,
    },
    {
      imgUrl: eeveeImg,
      selected: false,
    },
    {
      imgUrl: meowthImg,
      selected: false,
    },
    {
      imgUrl: mewImg,
      selected: false,
    },
    {
      imgUrl: oddishImg,
      selected: false,
    },
    {
      imgUrl: pikachuImg,
      selected: false,
    },
    {
      imgUrl: squirtleImg,
      selected: false,
    },
  ];
  const [choices, setChoices] = useState<CardInfo[]>(defaultState);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  let shuffledChoices: CardInfo[] = shuffle(choices);

  const handleCardClick = (idx: number) => {
    if (choices[idx].selected) {
      if (currentScore > highScore) setHighScore(currentScore);
      console.log('Selected choice already');
      setChoices(defaultState);
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
      <Header currentScore={currentScore} highScore={highScore} />
      <Game choices={shuffledChoices} handleCardClick={handleCardClick} />
    </>
  );
};

export default App;
