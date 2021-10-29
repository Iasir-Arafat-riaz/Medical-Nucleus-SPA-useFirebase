import React from 'react';
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyringe, faAmbulance } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <div className="footer">
            <h4 className="text-center"><FontAwesomeIcon icon={faAmbulance} /> All right reserved by iasir arafat riaz @2021 <FontAwesomeIcon icon={faSyringe} /></h4>
        </div>
    );
};

export default Footer;