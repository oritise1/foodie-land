import ReciptCard from '../ReciptCard/ReciptCard'
import './index.css'
import Card1 from '../../images/card1.svg';

const Recipes = () => {
    return (
        <div className='recipes'>
            <div style={{marginLeft:'22%'}}>
            <h1 className='recipeHead'> Simple and tasty recipes </h1>
            <p className='recipeParag'> Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>
            <div className='recipeList'>
                                <ReciptCard 
                    cardImg={Card1}
                    textImg='Big and Juicy Wagyu Beef Cheeseburger'
                    cardInfo1='30 Minutes'
                    cardInfo2='Fork'
                />
                                                <ReciptCard 
                    cardImg={Card1}
                    textImg='Big and Juicy Wagyu Beef Cheeseburger'
                    cardInfo1='30 Minutes'
                    cardInfo2='Fork'
                />
                                                <ReciptCard 
                    cardImg={Card1}
                    textImg='Big and Juicy Wagyu Beef Cheeseburger'
                    cardInfo1='30 Minutes'
                    cardInfo2='Fork'
                />
                                                <ReciptCard 
                    cardImg={Card1}
                    textImg='Big and Juicy Wagyu Beef Cheeseburger'
                    cardInfo1='30 Minutes'
                    cardInfo2='Fork'
                />
            </div>
        </div>
    )
}

export default Recipes
