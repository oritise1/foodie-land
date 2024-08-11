import './index.css'
import John from '../../images/john.svg'

const FriedRice = () => {
    return (
        <div className='riceWrapper'>
            <div className='riceWrap'>
                <div>
                    <h1>Health Japanese Fried Rice</h1>
                    <div className='john'>
                            <img src={John} alt='John Profile Picture' />
                            <span style={{ marginTop: '10px' }}>
                                <h1 className='johnHead'> John Smith </h1>
                                <p className='johnParag'> 15 March 2020 </p>
                            </span>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default FriedRice
