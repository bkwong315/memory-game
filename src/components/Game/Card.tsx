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
    <div className={imgUrl + ' '} onClick={onClickHandler.bind(null, idx)}>
      {selected.toString()}
    </div>
  );
};

export default Card;
