import React from 'react';
import CardInfo from '../../interfaces/CardInfo';

interface CardProps {
  cardInfo: CardInfo;
}

const Card = (props: CardProps) => {
  const { imgUrl, selected } = props.cardInfo;

  return <div className={imgUrl + ' '}>{selected.toString()}</div>;
};

export default Card;
