
import { Row } from 'react-bootstrap';
import BrowseComponent from './browseComponent';
import AboutUsComponent from './aboutUsComponent';

const FooterLayoutComponent = () => {
    return (

        <Row>
            <BrowseComponent></BrowseComponent>
            <AboutUsComponent></AboutUsComponent>
        </Row>
    );
};

export default FooterLayoutComponent;