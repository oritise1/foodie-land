
import ReciptCard from '../ReciptCard/ReciptCard'
import './index.css'
import Card1 from '../../images/card1.svg';
import  Ads  from '../../images/Ads.svg'

const Recipes: React.FC = () => {
    const style1: React.CSSProperties ={
        backgroundImage: 'linear-gradient(rgba(255,255,255),rgba(231, 249, 253,0.5), rgb(231, 249, 252))'
    }
    const style2: React.CSSProperties ={
        width:'340px'
    }
    const style3: React.CSSProperties ={
        top: '-245px',
        left: '285px'
    }
    return (
        <div className='recipes'>
            <div style={{ marginLeft: '22%' }}>
                <h1 className='recipeHead'> Simple and tasty recipes </h1>
                <p className='recipeParag'> Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>
            <div className='recipeList'>
                <ReciptCard
                    cardImg={Card1}
                    textImg='Big and Juicy Wagyu Beef Cheeseburger'
                    cardInfo1='30 Minutes'
                    cardInfo2='Fork'
                    backGroundStyle= {style1}
                    imgWidth={style2}
                    position={style3}
                />
                <ReciptCard
                    cardImg={Card1}
                    textImg='Big and Juicy Wagyu Beef Cheeseburger'
                    cardInfo1='30 Minutes'
                    cardInfo2='Fork'
                    backGroundStyle= {style1}
                    imgWidth={style2}
                    position={style3}
                />
                <ReciptCard
                    cardImg={Card1}
                    textImg='Big and Juicy Wagyu Beef Cheeseburger'
                    cardInfo1='30 Minutes'
                    cardInfo2='Fork'
                    backGroundStyle= {style1}
                    imgWidth={style2}
                    position={style3}
                />
                <ReciptCard
                    cardImg={Card1}
                    textImg='Big and Juicy Wagyu Beef Cheeseburger'
                    cardInfo1='30 Minutes'
                    cardInfo2='Fork'
                    backGroundStyle= {style1}
                    imgWidth={style2}
                    position={style3}
                />
                <ReciptCard
                    cardImg={Card1}
                    textImg='Big and Juicy Wagyu Beef Cheeseburger'
                    cardInfo1='30 Minutes'
                    cardInfo2='Fork'
                    backGroundStyle= {style1}
                    imgWidth={style2}
                    position={style3}
                />
                <div>
                    <img src={Ads} alt="advertisment" width='360px' style={{marginTop:'20px'}} />
                </div>
                <ReciptCard
                    cardImg={Card1}
                    textImg='Big and Juicy Wagyu Beef Cheeseburger'
                    cardInfo1='30 Minutes'
                    cardInfo2='Fork'
                    backGroundStyle= {style1}
                    imgWidth={style2}
                    position={style3}
                />
                <ReciptCard
                    cardImg={Card1}
                    textImg='Big and Juicy Wagyu Beef Cheeseburger'
                    cardInfo1='30 Minutes'
                    cardInfo2='Fork'
                    backGroundStyle= {style1}
                    imgWidth={style2}
                    position={style3}
                />
                <ReciptCard
                    cardImg={Card1}
                    textImg='Big and Juicy Wagyu Beef Cheeseburger'
                    cardInfo1='30 Minutes'
                    cardInfo2='Fork'
                    backGroundStyle= {style1}
                    imgWidth={style2}
                    position={style3}
                />
            </div>
        </div>
    )
}

export default Recipes
