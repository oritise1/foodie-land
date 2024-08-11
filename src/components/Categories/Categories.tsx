import './index.css'
import Breakfast from '../../images/breakfast.svg'
import Dessert from '../../images/dessert.svg'
import Lunch from '../../images/luanch.svg'
import Meat from '../../images/meat.svg'
import Vegan from '../../images/vegan.svg'
import Chocolate from '../../images/chocolate.svg'

const Categories = () => {
  return (
    <div className='cate1'>
      <div className='cateGories'>
            <h1 className='cate2'> Categories </h1>
            <button className='btn1'> View All Categories</button>
      </div>
      <div className='cateAll'>
    <div className='singleCate' style={{backgroundImage: 'linear-gradient(rgb(255, 255, 255), rgba(112, 130, 70, 0.5))'}}>
            <img src= {Breakfast} alt='Breakfast Categories' style={{marginTop:'-80px'}} />
            <p style={{marginBottom: '50px'}}>Breakfast</p>
        </div>
        <div className='singleCate' style={{backgroundImage: 'linear-gradient(rgb(255, 255, 255), rgba(112, 130, 70, 0.5))'}}>
            <img src= {Vegan} alt='Breakfast Categories' style={{marginTop:'-80px'}} />
            <p style={{marginBottom: '50px'}}>Vegan</p>
        </div>
        <div className='singleCate' style={{backgroundImage: 'linear-gradient(rgb(255, 255, 255), rgba(112, 130, 70, 0.5))'}}>
            <img src= {Meat} alt='Breakfast Categories' style={{marginTop:'-80px'}} />
            <p style={{marginBottom: '50px'}}>Meat</p>
        </div>
        <div className='singleCate' style={{backgroundImage: 'linear-gradient(rgb(255, 255, 255), rgba(112, 130, 70, 0.5))'}}>
            <img src= {Dessert} alt='Breakfast Categories' style={{marginTop:'-80px'}} />
            <p style={{marginBottom: '50px'}}>Dessert</p>
        </div>
        <div className='singleCate' style={{backgroundImage: 'linear-gradient(rgb(255, 255, 255), rgba(112, 130, 70, 0.5))'}}>
            <img src= {Lunch} alt='Breakfast Categories' style={{marginTop:'-80px'}} />
            <p style={{marginBottom: '50px'}}>Lunch</p>
        </div>
        <div className='singleCate' style={{backgroundImage: 'linear-gradient(rgb(255, 255, 255), rgba(112, 130, 70, 0.5))'}}>
            <img src= {Chocolate} alt='Breakfast Categories' style={{marginTop:'-80px'}} />
            <p style={{marginBottom: '50px'}}>Chocolate</p>
        </div>
      </div>
    </div>
  ) 
}

export default Categories
