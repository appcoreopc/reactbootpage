
import { Container, Row, Col } from 'react-bootstrap';

const Footer = (props: any) => {
    return (

        <Container>
                {props.children}
        </Container>

    );
};

export default Footer;