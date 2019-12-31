import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import './Login.scss';
import {connect} from "react-redux";
import ModalBody from "reactstrap/lib/ModalBody";
import Modal from "reactstrap/lib/Modal";
import {Button, ModalFooter} from "reactstrap";
import RegistrationForm from "./RegistrationForm";
import { withRouter } from 'react-router';
import {compose} from "redux";

const validate = values => {
    const errors = {}
    if (!values.login) {
        errors.login = "Укажите логин";
    }
    if (!values.password) {
        errors.password = "Укажите пароль";
    }
    console.log(errors);
    return errors
}


export class loginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            authActive: false,
            values: false,
            modal: false
        }
    }

    toggle = (e) => {
        e.preventDefault();
        this.setState({modal: !this.state.modal});
        console.log(this.state.modal);
    }

    renderLogin = ({input, label, type, meta: {touched, error, warning}}) => (<div>
            <input {...input} onBlur={() => input.onBlur(undefined, false)} placeholder={label}
                   type={type} className={!this.state.authActive ? "login__login-input" : "login__login-input_active"}/>
            {console.log(touched)}
            {touched && ((error && <span className="login__text-danger">{error}</span>) || (warning &&
                <span>{warning}</span>))}
        </div>
    )

    renderPassword = ({input, label, type, meta: {touched, error, warning}}) => (
        <div>
            <input {...input} placeholder={label}
                   type={type}
                   className={!this.state.authActive ? "login__password-input" : "login__password-input_active"}/>
            {touched && ((error && <span className="login__text-danger">{error}</span>) || (warning &&
                <span>{warning}</span>))}
        </div>
    )

    focus = () => {
        this.setState({authActive: true});
    }

    authBlur = () => {
        this.setState({authActive: false});
    }

    change = (e) => {
        if (e.target.value !== '') {
            this.setState({values: true});
        } else {
            this.setState({values: false});
        }
    }

    render() {

        const {authActive, values, modal} = this.state;
        const {handleSubmit, pristine, submitting} = this.props;

        return (
            <div>
                <form className={!authActive ? "login" : "login_active"} onSubmit={handleSubmit}>
                    <div className={!authActive ? "login__title" : "login__title_active"}> Авторизация</div>
                    <Field
                        name="login"
                        component={this.renderLogin}
                        label='логин'
                        type="text"
                        className={!authActive ? "login__login-input" : "login__login-input_active"}
                        onFocus={this.focus} onBlur={!values ? this.authBlur : undefined} onChange={this.change}
                    />
                    <Field
                        name="password"
                        component={this.renderPassword}
                        label='пароль'
                        type="password"
                        className={!authActive ? "login__password-input" : "login__password-input_active"}
                        onFocus={this.focus} onBlur={!values ? this.authBlur : undefined} onChange={this.change}
                    />

                    <button className={!authActive ? "login__button" : "login__button_active"} type='submit'
                            disabled={pristine || submitting}>Войти
                    </button>

                    <button className="login__registration" onClick={this.toggle}>Регистрация</button>
                    <div className="login__remember">
                        <Field name="remember" className="login__remember-checkbox" type="checkbox" onFocus={this.focus}
                               component="input"/>
                        <div
                            className={!authActive ? "login__remember-content" : "login__remember-content_active"}>Запомнить
                        </div>
                    </div>
                </form>

                <Modal isOpen={modal} className="login__registration-modal"
                       contentClassName="login__registration-modal-content">
                    <button onClick={this.toggle} className="login__registration-header">Регистрация</button>
                    <ModalBody className="login__registration-body">
                        <RegistrationForm/>
                    </ModalBody>
                    <ModalFooter className="login__registration-footer">
                        <Button color="danger" onClick={this.toggle}>Отмена</Button>
                    </ModalFooter>
                </Modal>


            </div>
        )
    }
}

const ReduxForm = reduxForm({form: 'login', validate})(loginForm);

const Login = (props) => {
    const onSubmitLogin = (formData) => {
        console.log(formData);
        props.history.push('/login');
    }
    return (<div>
            <ReduxForm onSubmit={onSubmitLogin} isLoading={props.isLoading}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isLoading: state.login.isLoading
})

export default compose(connect(mapStateToProps, {}),withRouter)(Login);