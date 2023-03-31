import React from 'react';
import CardInfo from '../../interfaces/CardInfo';

interface CardProps {
  cardInfo: CardInfo;
  idx: number;
  onClickHandler: (idx: number) => void;
}

const Card = (props: CardProps) => {
  const { imgUrl, selected } = props.cardInfo;
  const { idx, onClickHandler } = props;

  return (
    <div onClick={onClickHandler.bind(null, idx)}>
      <img src={imgUrl} alt={imgUrl} />
    </div>
  );
};

export default Card;
