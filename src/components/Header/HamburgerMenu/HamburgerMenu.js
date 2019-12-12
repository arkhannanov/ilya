import React from 'react';
import './HumburgerMenu.scss';
import arrow from './../../../assets/images/arrow.png';

const HamburgerMenu = () => {
    return (
        <div className="nav">
            <input type="checkbox" id="menu"/>
            <label htmlFor="menu" id="nav-icon">&#9776;</label>

            <div className="multi-level">
                <div className="item">

                    <input type="checkbox" id="A"/>
                    <img src={arrow} className="arrow float-left" alt="arrow"/><label htmlFor="A">Services</label>

                    <ul>
                        <li><a href="httpp://yandex.ru">Branding</a></li>
                        <li><a href="httpp://yandex.ru">Web/App Development</a></li>
                        <li><a href="httpp://yandex.ru">Internet Marketing and SEO</a></li>
                    </ul>
                </div>
                <div className="item">
                    <input type="checkbox" id="B"/>
                    <img src={arrow} className="arrow" alt="arrow"/><label htmlFor="B">Jobs</label>
                    <ul>
                        <li>
                            <div className="sub-item">
                                <input type="checkbox" id="B-A"/>
                                <img src={arrow} className="arrow" alt="arrow"/><label htmlFor="B-A">UI/UX</label>
                                <ul className="sub-item-ul">
                                    <li><a href="httpp://yandex.ru">UI/UX Designer</a></li>
                                    <li><a href="httpp://yandex.ru">UI Designer</a></li>
                                    <li><a href="httpp://yandex.ru">UX Designer</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="sub-item">
                                <input type="checkbox" id="B-B"/>
                                <img src={arrow} className="arrow" alt="arrow"/><label
                                htmlFor="B-B">Development</label>
                                <ul className="sub-item-ul">
                                    <li><a href="httpp://yandex.ru">Front end Developer</a></li>
                                    <li><a href="httpp://yandex.ru">Back end Developer</a></li>
                                </ul>

                            </div>
                        </li>
                        <li><a href="httpp://yandex.ru">Graphic Designer</a></li>
                        <li><a href="httpp://yandex.ru">Logo Designer</a></li>

                    </ul>
                </div>
                <div className="item">
                    <input type="checkbox" id="C"/>
                    <img src={arrow} className="arrow" alt="arrow"/><label htmlFor="C">About Us</label>

                    <ul>
                        <li><a href="httpp://yandex.ru">Our Team</a></li>
                        <li><a href="httpp://yandex.ru">Clients</a></li>
                        <li><a href="httpp://yandex.ru">Our Work</a></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default HamburgerMenu;