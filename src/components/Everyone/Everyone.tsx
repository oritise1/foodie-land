import './index.css'
import EveryoneImg from '../../images/everyoneImg.svg'

const Everyone = () => {
  return (
    <div className='everyWrapper'>
       <span className='leftSide'>
            <h1 className='sideHead'>Everyone can be a chef in their own kitchen</h1>
            <p className='sideParag'> Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            <button className='btnSide'>Learn More</button>
       </span>
       <span>
        <img src={EveryoneImg} alt='Chef happy with is concusion' width='650px' height='500px'/>
       </span>
    </div>
  )
}

export default Everyone
