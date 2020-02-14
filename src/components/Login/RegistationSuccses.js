import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import './RegistationForm.scss';
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import Recaptcha from 'react-recaptcha';
import {registration, toggleRegistrationSuccessAction} from "../../redux/login-reducer";
import ModalBody from "reactstrap/lib/ModalBody";
import {Button, ModalFooter} from "reactstrap";
import Modal from "reactstrap/lib/Modal";


export class registrationSuccssess extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="registration-success">Регистрация прошла успешно. Проверьте почту, чтобы подтвердить регистрацию</div>

        )
    }
}

const mapStateToProps = (state) => ({
    toggleRegistrationSuccess: state.login.toggleRegistrationSuccess
})

export default connect(mapStateToProps, {toggleRegistrationSuccessAction})(registrationSuccssess);
