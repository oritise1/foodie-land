
import ReciptCard from '../ReciptCard/ReciptCard'
import './index.css'
import Card1 from '../../images/card1.svg';
import FishLime from '../../images/freshLime.svg';
import OrangePancake from '../../images/orangePancake.svg';
import Pancake from '../../images/pancake.svg';
import Salad from '../../images/salad.svg';
import ChickenMeatball from '../../images/otherRecipies1.svg';
import CreamyChicken from '../../images/otherRecipies2.svg';
import RiceChicken from '../../images/otherRecipes3.svg';
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
                    cardInfo2='Snack'
                    backGroundStyle= {style1}
                    imgWidth={style2}
                    position={style3}
                />
                <ReciptCard
                    cardImg={FishLime}
                    textImg='Fresh Lime Roasted Salmon with Ginger Sauce'
                    cardInfo1='30 Minutes'
                    cardInfo2='Fish'
                    backGroundStyle= {style1}
                    imgWidth={style2}
                    position={style3}
                />
                <ReciptCard
                    cardImg={Pancake}
                    textImg='Strawberry Oatmeal Pancake with Honey Syrup'
                    cardInfo1='30 Minutes'
                    cardInfo2='Breakfast'
                    backGroundStyle= {style1}
                    imgWidth={style2}
                    position={style3}
                />
                <ReciptCard
                    cardImg={Salad}
                    textImg='Fresh and Healthy Mixed Mayonnaise Salad'
                    cardInfo1='30 Minutes'
                    cardInfo2='Heathly'
                    backGroundStyle= {style1}
                    imgWidth={style2}
                    position={style3}
                />
                <ReciptCard
                    cardImg={ChickenMeatball}
                    textImg='Chicken Meatballs with Cream Cheese'
                    cardInfo1='30 Minutes'
                    cardInfo2='Meat'
                    backGroundStyle= {style1}
                    imgWidth={style2}
                    position={style3}
                />
                <div>
                    <img src={Ads} alt="advertisment" width='360px' style={{marginTop:'20px'}} />
                </div>
                <ReciptCard
                    cardImg={OrangePancake}
                    textImg='Fruity Pancake with Orange & Blueberry'
                    cardInfo1='30 Minutes'
                    cardInfo2='Sweet'
                    backGroundStyle= {style1}
                    imgWidth={style2}
                    position={style3}
                />
                <ReciptCard
                    cardImg={RiceChicken}
                    textImg='The Best Easy One Pot Chicken and Rice'
                    cardInfo1='30 Minutes'
                    cardInfo2='Snack'
                    backGroundStyle= {style1}
                    imgWidth={style2}
                    position={style3}
                />
                <ReciptCard
                    cardImg={CreamyChicken}
                    textImg='The Creamiest Creamy Chicken and Bacon Pasta'
                    cardInfo1='30 Minutes'
                    cardInfo2='Noodles'
                    backGroundStyle= {style1}
                    imgWidth={style2}
                    position={style3}
                />
            </div>
        </div>
    )
}

export default Recipes
