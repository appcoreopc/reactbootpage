
import React from 'react';
import DefaultNavBar from '../navbar';
import Footer from '../footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function ShopApp() {
    return (
        <body>
            <div className="App">
                <DefaultNavBar></DefaultNavBar>

                <div className="container">
                </div>

            </div>
            <Footer></Footer>
        
        </body>
    );
}

export default ShopApp;
