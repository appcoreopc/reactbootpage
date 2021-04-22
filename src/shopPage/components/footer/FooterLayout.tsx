
import { Row, Col } from 'react-bootstrap';
import BrowseComponent from './browseComponent';
import AboutUsComponent from './aboutUsComponent';

const FooterLayoutComponent = () => {
    return (

        <Row>
            <Col>  <BrowseComponent></BrowseComponent></Col>
            <Col xs={6}> </Col>
            <Col>  <AboutUsComponent></AboutUsComponent></Col>
        </Row>
    );
};

export default FooterLayoutComponent;