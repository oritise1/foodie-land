import ReciptCard from '../../components/ReciptCard/ReciptCard'
import Card1 from '../../images/card1.svg';
import './index.css'

const Maylike = () => {
    const style1: React.CSSProperties ={
        width:'300px'
    }
    const style2: React.CSSProperties ={
        top: '-245px',
        left: '285px'
    }
  return (
    <div className='mayWrapper'>
        <div>
            <h1>You may like these recipe too</h1>
            <div className='cateDetails'>
                <ReciptCard
                    cardImg={Card1}
                    textImg='Big and Juicy Wagyu Beef Cheeseburger'
                    cardInfo1='30 Minutes'
                    cardInfo2='Fork'
                    imgWidth={style1}
                    position={style2}
                />
                <ReciptCard
                    cardImg={Card1}
                    textImg='Big and Juicy Wagyu Beef Cheeseburger'
                    cardInfo1='30 Minutes'
                    cardInfo2='Fork'
                    imgWidth={style1}
                    position={style2}
                />
                <ReciptCard
                    cardImg={Card1}
                    textImg='Big and Juicy Wagyu Beef Cheeseburger'
                    cardInfo1='30 Minutes'
                    cardInfo2='Fork'
                    imgWidth={style1}
                    position={style2}
                />
                <ReciptCard
                    cardImg={Card1}
                    textImg='Big and Juicy Wagyu Beef Cheeseburger'
                    cardInfo1='30 Minutes'
                    cardInfo2='Fork'
                    imgWidth={style1}
                    position={style2}
                />
                 <ReciptCard
                    cardImg={Card1}
                    textImg='Big and Juicy Wagyu Beef Cheeseburger'
                    cardInfo1='30 Minutes'
                    cardInfo2='Fork'
                    />
            </div>
      </div>
    </div>
  )
}

export default Maylike
