import React from 'react';
import CardInfo from '../../interfaces/CardInfo';

interface CardProps {
  cardInfo: CardInfo;
  idx: number;
  onClickHandler: (idx: number) => void;
}

const Card = (props: CardProps) => {
  const { imgUrl } = props.cardInfo;
  const { idx, onClickHandler } = props;

  return (
    <div
      className='flex justify-center items-center transition hover:scale-105 hover:shadow-lg hover:shadow-red-600  bg-orange-300 border-solid border-4 border-[#fff235] rounded-lg p-4'
      onClick={onClickHandler.bind(null, idx)}>
      <img src={imgUrl} alt={imgUrl} className='h-full object-contain' />
    </div>
  );
};

export default Card;
