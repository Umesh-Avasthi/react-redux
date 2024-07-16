import react from 'react'
function Home()
{
    return(
        <div> 
            <div className='add-to-card'> 
                <img src="https://www.freeiconspng.com/thumbs/shopping-cart-icon/red-simple-shopping-cart-icon-12.png"></img>

            </div>
           <h1> Home component</h1>
           <div className='cart-wrapper'>
            <div className='img-wrapper item'>
                <img src="https://w7.pngwing.com/pngs/599/150/png-transparent-iphone-x-front-view-apple%E6%89%8B%E6%9C%BA-iphone-intelligent-mobile-phone-thumbnail.png"></img>
            </div>
            <div className='text-wrapper item comon'>
                <span>
                    I-phone
                </span>
                <span>
                    Price:$1000
                </span>
            </div>
            <div className='btn-wrapper item comon'>
                <button>Add to card</button>
               
            </div>
           </div>
        </div>
    )
}
export default Home