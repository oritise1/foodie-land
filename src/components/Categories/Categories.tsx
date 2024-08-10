import './index.css'
import Breakfast from '../../images/breakfast.svg'

const Categories = () => {
  return (
    <div className='cate1'>
      <div className='cateGories'>
            <h1 className='cate2'> Categories </h1>
            <button className='btn'> View All Categories</button>
      </div>
      <div className='cateAll'>
    <div className='singleCate' style={{backgroundImage: 'linear-gradient(rgb(255, 255, 255), rgba(112, 130, 70, 0.5))'}}>
            <img src= {Breakfast} alt='Breakfast Categories' style={{marginTop:'-80px'}} />
            <p style={{marginBottom: '50px'}}>Breakfast</p>
        </div>
        <div className='singleCate' style={{backgroundImage: 'linear-gradient(rgb(255, 255, 255), rgba(112, 130, 70, 0.5))'}}>
            <img src= {Breakfast} alt='Breakfast Categories' style={{marginTop:'-80px'}} />
            <p style={{marginBottom: '50px'}}>Breakfast</p>
        </div>
        <div className='singleCate' style={{backgroundImage: 'linear-gradient(rgb(255, 255, 255), rgba(112, 130, 70, 0.5))'}}>
            <img src= {Breakfast} alt='Breakfast Categories' style={{marginTop:'-80px'}} />
            <p style={{marginBottom: '50px'}}>Breakfast</p>
        </div>
        <div className='singleCate' style={{backgroundImage: 'linear-gradient(rgb(255, 255, 255), rgba(112, 130, 70, 0.5))'}}>
            <img src= {Breakfast} alt='Breakfast Categories' style={{marginTop:'-80px'}} />
            <p style={{marginBottom: '50px'}}>Breakfast</p>
        </div>
        <div className='singleCate' style={{backgroundImage: 'linear-gradient(rgb(255, 255, 255), rgba(112, 130, 70, 0.5))'}}>
            <img src= {Breakfast} alt='Breakfast Categories' style={{marginTop:'-80px'}} />
            <p style={{marginBottom: '50px'}}>Breakfast</p>
        </div>
        <div className='singleCate' style={{backgroundImage: 'linear-gradient(rgb(255, 255, 255), rgba(112, 130, 70, 0.5))'}}>
            <img src= {Breakfast} alt='Breakfast Categories' style={{marginTop:'-80px'}} />
            <p style={{marginBottom: '50px'}}>Breakfast</p>
        </div>
      </div>
    </div>
  ) 
}

export default Categories
