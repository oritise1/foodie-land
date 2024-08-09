import React, { useState } from 'react';
import './index.css'

import HeartOn from '../../images/heartImg.svg';
import HeartOff from '../../images/heartOff.svg';
import Timer from '../../images/timer.svg';
import Fork from '../../images/fork.svg';

interface ReciptCardProps{
  cardImg: string;
  textImg: string;
  cardInfo1: string;
  cardInfo2: string;
}

const ReciptCard: React.FC<ReciptCardProps> = ({cardImg, textImg,cardInfo1,cardInfo2}) => {
  const [changeImg, setChangeImg] = useState<string>(HeartOff);
  const toogleImg = () => {
    setChangeImg((prevImg) => (prevImg === HeartOff ? HeartOn : HeartOff))
  }

  return (
    <div className='card'>
      <img src={cardImg} alt='Chesse Burger' style={{ borderRadius: '5%', margin: '20px 10px', width:'340px'}} />
      <img src={changeImg} alt='Heart On' className='cardImg' onClick={toogleImg} />
      <h2 className='cardHead'>
        {textImg}
      </h2>
      <div className='cardInfo'>
        <div className='cardItem'>
          <img src={Timer} alt='timer' />
          <span>{cardInfo1}</span>

        </div>
        <div className='cardItem'>
          <img src={Fork} alt='timer' />
          <span>{cardInfo2}</span>
        </div>
      </div>
    </div>
  )
}

export default ReciptCard
