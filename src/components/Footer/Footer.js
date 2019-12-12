import React from 'react';
import './Footer.scss';
import footerNavigation from './../../assets/images/footer-navigation.png';


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__content'>© 2019 год. Job & Work. Все права защищены.</div>
            <div className='footer__navigation'>
                <img src={footerNavigation} className='footer__navigation-image' alt='footer-navigation'/>
            </div>
        </div>
    )
};

export default Footer;