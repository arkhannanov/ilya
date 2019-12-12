import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import './Header.scss';
import locationIcon from './../../assets/images/location-icon.png';
import logo from './../../assets/images/jw.svg';
import logoActiveImage from './../../assets/images/jw-active.svg';
import Modal from "reactstrap/lib/Modal";
import ModalHeader from "reactstrap/lib/ModalHeader";
import ModalBody from "reactstrap/lib/ModalBody";
import 'bootstrap/dist/css/bootstrap.css';
import AutoCompletedText from "./AutoCompletedText/AutoCompletedText";
import {connect} from "react-redux";
import {toggleModal} from "../../redux/header-reducer";

export class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            logoActive: true,
            homeActive: false,
            aboutActive: false,
            skillsActive: false,
            educationActive: false,
            fade: false
        }
    }

    toggle = (e) => {
        e.preventDefault();
        this.props.toggleModal();
    }

    handleClick = (e) => {

        if (e.target.name === 'logo') {
            this.setState({
                logoActive: true,
                homeActive: false,
                aboutActive: false,
                skillsActive: false,
                educationActive: false
            })
        }

        if (e.target.name === 'home') {
            this.setState({
                logoActive: false,
                homeActive: true,
                aboutActive: false,
                skillsActive: false,
                educationActive: false
            })
        }

        if (e.target.name === 'about') {
            this.setState({
                logoActive: false,
                homeActive: false,
                aboutActive: true,
                skillsActive: false,
                educationActive: false
            })
        }

        if (e.target.name === 'skills') {
            this.setState({
                logoActive: false,
                homeActive: false,
                aboutActive: false,
                skillsActive: true,
                educationActive: false
            })
        }

        if (e.target.name === 'education') {
            this.setState({
                logoActive: false,
                homeActive: false,
                aboutActive: false,
                skillsActive: false,
                educationActive: true
            })
        }
    }


    render() {
        const {logoActive, homeActive, aboutActive, skillsActive, educationActive} = this.state;
        const {city, modal} = this.props;

        const closeBtn = <button className="header__modal-close" onClick={this.toggle}>x</button>;

        return (
            <div>
                <nav className='header'>
                    <div className={!logoActive ? 'header__logo-active' : 'header__logo'}>
                        <NavLink to="/home" className='header__item-link'><img name='logo'
                                                                               onClick={(e) => this.handleClick(e)}
                                                                               className="header__logo-image"
                                                                               src={!logoActive ? logoActiveImage : logo}
                                                                               alt='Logo' vspace={16}/></NavLink>
                    </div>
                    <div className={!homeActive ? 'header__item' : 'header__item_active'}>
                        <NavLink to="/home" className='header__item-link' name='home'
                                 onClick={(e) => this.handleClick(e)}>Home</NavLink>
                    </div>
                    <div className={!aboutActive ? 'header__item' : 'header__item_active'}>
                        <NavLink to="/about" className='header__item-link' name='about'
                                 onClick={(e) => this.handleClick(e)}>About</NavLink>
                    </div>
                    <div className={!skillsActive ? 'header__item' : 'header__item_active'}>
                        <NavLink to="/skills" className='header__item-link' name='skills'
                                 onClick={(e) => this.handleClick(e)}>Skills</NavLink>
                    </div>
                    <div className={!educationActive ? 'header__item' : 'header__item_active'}>
                        <NavLink to="/education" className='header__item-link' name='education'
                                 onClick={(e) => this.handleClick(e)}>Education</NavLink>
                    </div>
                    <div className='header__location'>
                        <img src={locationIcon} alt='location-icon'/>
                        <div className='header__location-city' onClick={this.toggle}>{city}</div>
                        <Modal isOpen={modal} toggle={this.toggle}>
                            <ModalHeader toggle={this.toggle} close={closeBtn}>Выберите город</ModalHeader>
                            <ModalBody>
                                <AutoCompletedText/>
                            </ModalBody>
                        </Modal>
                    </div>
                </nav>
                <div className="header__content">Текст</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    city: state.header.city,
    modal: state.header.modal
})

export default connect(mapStateToProps, {toggleModal})(Header);