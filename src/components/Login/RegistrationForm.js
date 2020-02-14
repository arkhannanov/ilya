import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import './RegistationForm.scss';
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import Recaptcha from 'react-recaptcha';
import {registration, toggleRegistrationSuccessAction, toggleRegistrationWindowAction} from "../../redux/login-reducer";
import ModalBody from "reactstrap/lib/ModalBody";
import {Button, ModalFooter} from "reactstrap";
import Modal from "reactstrap/lib/Modal";
import RegistrationSuccess from "./RegistationSuccses";

const validate = values => {
    const errors = {}
    if (!values.login) {
        errors.login = "Укажите логин";
    }
    if (!values.email) {
        errors.email = 'Укажите e-mail'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Неправильный e-mail'
    }
    if (!values.password) {
        errors.password = "Укажите пароль";
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = "Подтвердите пароль";
    }
    if (!values.recaptcha) {
        errors.recaptcha = 'Введите капчу';
    }
    if (values.password !== values.confirmPassword) {
        errors.password = "Пароли не совпадают";
        errors.confirmPassword = "Пароли не совпадают";
    }
    return errors
}


export class registrationForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            password: '',
            modal: false
        }
    }

    handleChange = (e) => {
        this.setState({password: e.target.value})
    }

    Captcha = ({input, label, type, meta: {touched, error, warning}}) => (
        <div>
            <Recaptcha
                sitekey="6LcJ4cYUAAAAAGjYfFM4KKaAStQtq5u2OpbJVZk9"
                verifyCallback={() => input.onChange(1)}
            />
            {touched && ((error && <span className="registration__captcha-text-danger">{error}</span>) || (warning &&
                <span>{warning}</span>))}
        </div>
    );

    renderRegistration = ({input, label, type, meta: {touched, error, warning}}) => (<div>
            <input {...input} placeholder={label}
                   type={type} className="registration__input"/>
            {touched && ((error && <span className="registration__text-danger">{error}</span>) || (warning &&
                <span>{warning}</span>))}
        </div>
    )

    toggle = (e) => {
        e.preventDefault();
        this.props.toggleRegistrationSuccessAction();
        this.props.toggleRegistrationWindowAction();
    }


    renderPassword = ({input, label, type, meta: {touched, error, warning}}) => (<div>

            <input {...input} placeholder={label}
                   type={type} className="registration__input"
            />
            {touched && ((error && <span className="registration__text-danger">{error}</span>) || (warning &&
                <span>{warning}</span>))}
        </div>
    )

    render() {

        const {password, modal} = this.state;
        const {handleSubmit, error, pristine, submitting, toggleRegistrationSuccess} = this.props;

        console.log(toggleRegistrationSuccess);

        return (
            <div className="registation-container">
                <form className="registration" onSubmit={handleSubmit}>
                    <Field
                        name="login"
                        component={this.renderRegistration}
                        label='логин'
                        type="text"
                    />
                    <Field
                        name="email"
                        component={this.renderRegistration}
                        label='e-mail'
                        type="text"
                    />
                    <Field
                        name="password"
                        component={this.renderPassword}
                        label='пароль'
                        type="password"
                        onChange={this.handleChange}
                    />
                    <PasswordStrengthMeter password={password}/>
                    <Field
                        name="confirmPassword"
                        component={this.renderRegistration}
                        label='подтверждение пароля'
                        type="password"
                    />
                    <div className="registration__captcha">
                        <Field name='recaptcha' component={this.Captcha}/>
                    </div>
                    <button className="registration__button" type='submit'
                            disabled={pristine || submitting}>Регистрация
                    </button>
                    {error ? <div className='registration__error'>
                            {error}
                        </div>
                        : <div className='registration__error_no-error'>
                            Нет ошибки
                        </div>
                    }
                </form>
                <Modal isOpen={toggleRegistrationSuccess} className="registration-success"
                       contentClassName="login__registration-modal-content">
                    <ModalBody className="login__registration-body">
                        <RegistrationSuccess/>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={this.toggle}>OK</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

const ReduxForm = reduxForm({form: 'registration', validate})(registrationForm);


export class Registration extends Component {

    constructor(props) {
        super(props);
    }

    onSubmitRegistration = (formData) => {
        this.props.registration(formData.login, formData.email, formData.password)
    }


    render() {

        return (<div>
                <ReduxForm onSubmit={this.onSubmitRegistration} isLoading={this.props.isLoading}
                           toggleRegistrationSuccess={this.props.toggleRegistrationSuccess}
                           toggleRegistrationSuccessAction={this.props.toggleRegistrationSuccessAction}
                           toggleRegistrationWindowAction={this.props.toggleRegistrationWindowAction}
                />
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    isLoading: state.login.isLoading,
    toggleRegistrationSuccess: state.login.toggleRegistrationSuccess
})

export default connect(mapStateToProps, {registration, toggleRegistrationSuccessAction, toggleRegistrationWindowAction})(Registration);
