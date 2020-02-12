import React from 'react';
import './LoginPage.scss';
import {compose} from "redux";
import {connect} from "react-redux";
import {login, toggleRegistrationWindowAction} from "../../../redux/login-reducer";
import {Login} from "../Login";

const LoginFull = (props) => {

    return (
        <div>
            <div className='login-full'>
                <div className='login-full__header'>
                    <img className='login-full__header-image'
                         src='http://cdn.onlinewebfonts.com/svg/download_258083.png' alt="Avatar" height={100}
                         width={100}/>
                    <div className='login-full__header-content'>
                        <div className='login-full__header-content-name'>{props.login}</div>
                        <div className='login-full__header-content-job'>Дизайнер, Frontend-разработчик</div>
                    </div>
                </div>
                <div className='login-full__content'>
                    <div className='login-full__content-header'>О себе</div>
                    <div className='login-full__content-content'>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim
                    </div>
                </div>
                <div className='login-full__footer'>
                    <div className='login-full__footer-header'>Контакты</div>
                    <div className='login-full__content-content'>
                        <div className='login-full__content-content-website'>Веб-сайт: <a
                            href='www.kotow.pro'>www.kotov.pro</a></div>
                        <div className='login-full__content-content-email'>E-mail: <a
                            href='maito:kir@kotov.pro'>kir@kotov.pro</a></div>
                    </div>
                </div>
            </div>

        </div>
    )
};

const mapStateToProps = (state) => ({
    login: state.login.login
})


export default connect(mapStateToProps, {})(LoginFull);