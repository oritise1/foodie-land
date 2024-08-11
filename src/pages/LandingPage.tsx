import Categories from '../components/Categories/Categories'
import Category from '../components/Category/Category'
import CheckOut from '../components/CheckOut/CheckOut'
import Everyone from '../components/Everyone/Everyone'
import Footer from '../components/Footer/Footer'
import Inbox from '../components/Inbox/Inbox'
import LandingImg from '../components/LandingImg/LandingImg'
import NavBar from '../components/NavBar/NavBar'
import Recipes from '../components/Recipes/Recipes'

const LandingPage = () => {
    return (
        <div>
            <NavBar />
            <LandingImg />
            <Categories />
            <Recipes />
            <Everyone />
            <CheckOut />
            <Category />
            <Inbox />
            <Footer />
        </div>
    )
}

export default LandingPage
