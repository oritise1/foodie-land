import './index.css'
import DirectionImg from '../../images/directionImg.svg'
import OtherRecipes1 from '../../images/otherRecipies1.svg'
import OtherRecipes2 from '../../images/otherRecipies2.svg'
import OtherRecipes3 from '../../images/otherRecipes3.svg'
import Ads from '../../images/Ads.svg'
const Ingredent = () => {
    return (
        <div className='ingredentWrapper'>
            <div className='sideSplit'>
                <div className='leftSplit'>
                    <div>
                        <h1 className='gredientHead'> Ingredients </h1>
                        <h3 className='head'>For main dish</h3>
                        <div className='gredientList'>
                            <input type='checkbox' name='fname' className='boxList' />
                            <span className='dientList'>Lorem ipsum dolor sit amet </span>
                            <hr style={{ margin: '20px 0' }} />
                            <input type='checkbox' name='fname' className='boxList' />
                            <span className='dientList'>Lorem ipsum dolor sit amet </span>
                            <hr style={{ margin: '20px 0' }} />
                            <input type='checkbox' name='fname' className='boxList' />
                            <span className='dientList'>Lorem ipsum dolor sit amet </span>
                            <hr style={{ margin: '20px 0' }} />
                            <input type='checkbox' name='fname' className='boxList' />
                            <span className='dientList'>Lorem ipsum dolor sit amet </span>
                            <hr style={{ margin: '20px 0' }} />
                            <input type='checkbox' name='fname' className='boxList' />
                            <span className='dientList'>Lorem ipsum dolor sit amet </span>
                            <hr style={{ margin: '20px 0' }} />
                        </div>
                        <div>
                            <h3 className='head12'>For the sauce</h3>
                            <div className='gredientList'>
                                <input type='checkbox' name='fname' className='boxList' />
                                <span className='dientList'>Lorem ipsum dolor sit amet </span>
                                <hr style={{ margin: '20px 0' }} />
                                <input type='checkbox' name='fname' className='boxList' />
                                <span className='dientList'>Lorem ipsum dolor sit amet </span>
                                <hr style={{ margin: '20px 0' }} />
                                <input type='checkbox' name='fname' className='boxList' />
                                <span className='dientList'>Lorem ipsum dolor sit amet </span>
                                <hr style={{ margin: '20px 0' }} />
                            </div>
                        </div>
                        <div>
                            <h1 className='gredientHead'> Directions </h1>
                            <input type='checkbox' name='fname' className='boxList' style={{marginRight:'30px'}} />
                            <span className='head12'>1. Lorem ipsum dolor sit amet </span>
                            <p className='footerP1'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                            <img src={DirectionImg} alt='A woman cooking with smile' style={{marginLeft:'50px'}} width='750px'/>
                            <p className='footerP1'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                            <hr style={{ margin: '20px 0' }} />
                            <input type='checkbox' name='fname' className='boxList' style={{marginRight:'30px'}} />
                            <span className='head12'>2. Lorem ipsum dolor sit amet </span>
                            <p className='footerP1'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                            <hr style={{ margin: '20px 0' }} />
                            <input type='checkbox' name='fname' className='boxList' style={{marginRight:'30px'}} />
                            <span className='head12'>3. Lorem ipsum dolor sit amet </span>
                            <p className='footerP1'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                            
                        </div>
                    </div>
                </div>
                <div className='rightSplit'>
                    <h1 className='gredientHead'>Other Recipe </h1>
                    <div style={{display:'flex', gap:'20px' , marginBottom: '20px'}}>
                        <img src={OtherRecipes1} alt='Chicken Meatball plate' style={{borderRadius:'16px'}} width='150px' height='90px'/>
                        <span style={{ marginTop: '10px' }}>
                                <h3 className='johnHead11'> Chicken Meatball with Creamy Chees...</h3>
                                <p className='johnParag11'>By Andreas Paula</p>
                            </span>
                    </div>
                    <div style={{display:'flex', gap:'20px' , marginBottom: '20px'}}>
                        <img src={OtherRecipes2} alt='Creamy cream chicken' style={{borderRadius:'16px'}} width='150px' height='90px'/>
                        <span style={{ marginTop: '10px' }}>
                                <h3 className='johnHead11'>The Creamiest Creamy Chicken an...</h3>
                                <p className='johnParag11'>By Andreas Paula</p>
                            </span>
                    </div>
                    <div style={{display:'flex', gap:'20px' , marginBottom: '20px'}}>
                        <img src={OtherRecipes3} alt='Chicken Meatball plate' style={{borderRadius:'16px'}} width='150px' height='90px'/>
                        <span style={{ marginTop: '10px' }}>
                                <h3 className='johnHead11'>The Best Easy One Pot Chicken and Rice</h3>
                                <p className='johnParag11'>By Andreas Paula</p>
                            </span>
                    </div>
                    <img src={Ads} alt='page ads' width='350px' height='400px' style={{marginTop:'40px'}} />
                </div>
            </div>
        </div>
    )
}

export default Ingredent
