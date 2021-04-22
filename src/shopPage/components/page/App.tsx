
import DefaultNavBar from '../navbar';
import Footer from '../footer/footer';
import AppCarousel from '../carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterLayoutComponent from '../footer/footerLayout';

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
