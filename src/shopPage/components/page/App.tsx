
import DefaultNavBar from '../navbar';
import Footer from '../footer/Footer';
import AppCarousel from '../carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterLayoutComponent from '../footer/FooterLayout';

function ShopApp() {
    return (
        <body>
            <div className="App">
                <DefaultNavBar></DefaultNavBar>
                <AppCarousel></AppCarousel>

            </div>
            <Footer><FooterLayoutComponent></FooterLayoutComponent></Footer>
        </body>
    );
}

export default ShopApp;
