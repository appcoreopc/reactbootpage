
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';


const NoBulletList = styled.li`
    list-style: none;
`;

const AboutUsComponent = () => {
    return (

        <Col>

            <div>
                <ul>
                    <NoBulletList>
                        Contact Us
                </NoBulletList>
                    <NoBulletList>
                        Store Locator
                </NoBulletList>
                    <NoBulletList>
                        Careers
                    </NoBulletList>
                </ul>
            </div>
        </Col>

    );
};

export default AboutUsComponent;