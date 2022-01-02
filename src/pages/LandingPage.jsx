import Coursel from './../components/Coursel';
import Products from '../components/Products';
import About from '../components/About';
import ContactUs from '../components/ContactUs';
import Advantage from '../components/Advantage';
import Categories from '../components/Categories';

export default function LandingPage() {

    return (
        <div>
            <Coursel/>
            <Advantage/>
            <Categories/>
            <Products latest={true} apiProducts ='http://fakestoreapi.com/products'/>
            <About/>
            <ContactUs/>
        </div>
    )
}
