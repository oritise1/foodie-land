import './index.css'
import ReciptCard from '../ReciptCard/ReciptCard'
import Card1 from '../../images/card1.svg';

const Category = () => {
    const style1: React.CSSProperties ={
        width:'260px'
    }
    const style2: React.CSSProperties ={
       top: '-190px',
       left: '210px'
    }
    return (
        <div className='cate'>
            <div className='cateHeader'>
                <h1 className='cateHead'> Try this delicious recipe to make your day</h1>
                <p className='cateParag'> Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>
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
            </div>
        </div>
    )
}

export default Category
