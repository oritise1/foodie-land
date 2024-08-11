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
  backGroundStyle?: React.CSSProperties; 
  imgWidth?: React.CSSProperties;
  position?: React.CSSProperties;
}

const ReciptCard: React.FC<ReciptCardProps> = ({cardImg, textImg,cardInfo1,cardInfo2,backGroundStyle, imgWidth, position}) => {
  const [changeImg, setChangeImg] = useState<string>(HeartOff);
  const toogleImg = () => {
    setChangeImg((prevImg) => (prevImg === HeartOff ? HeartOn : HeartOff))
  }

  return (
    <div className='card' style={backGroundStyle}>
      <img src={cardImg} alt='Chesse Burger' className='cardImg1' style={imgWidth} />
      <img src={changeImg} alt='Heart On' className='cardImg' onClick={toogleImg} style={position} />
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
