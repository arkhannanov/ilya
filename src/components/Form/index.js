import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import TextField from '@material-ui/core/TextField';
import './Form.scss';
import {compose} from "redux";
import { MuiThemeProvider, createMuiTheme, withStyles } from  '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import clsx from "clsx";

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: '#C0C0C0'
        }
    },
});


const validate = values => {
    const errors = {}
    if (!values.lastName) {
        errors.lastName = "Поле является обязательным";
    }
    if (!values.name) {
        errors.name = "Поле является обязательным";
    }
    if (!values.date) {
        errors.date = "Поле является обязательным";
    }
    if (!values.phone) {
        console.log('ggg')
        errors.phone = "Поле является обязательным";
    }
    if (!values.email) {
        errors.email = 'Поле является обязательным'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Неправильный e-mail'
    }

    return errors
}


export class Form extends Component {

    renderTextField = ({
                           label,
                           input,
                           meta: {touched, invalid, error},
                           classes,
                           ...custom
                       }) => (
            <MuiThemeProvider theme={theme}>
                <TextField
                    label={label}
                    placeholder={label}
                    className={clsx( classes.textField, label==='Мобильный телефон' && classes.textFieldMobilePhone, label==='E-mail' && classes.email)}
                    error={touched && invalid}
                    helperText={touched && error}
                    variant="outlined"
                    color="secondary"
                    {...input}
                    {...custom}
                />
            </MuiThemeProvider>
    );

    renderDateField = ({
                           label,
                           input,
                           meta: {touched, invalid, error},
                           classes,
                           ...custom
                       }) => (
            <MuiThemeProvider theme={theme}>
                <TextField
                    label={label}
                    placeholder={label}
                    className={classes.dateField}
                    error={touched && invalid}
                    helperText={touched && error}
                    variant="outlined"
                    color="secondary"
                    type="date"
                    {...input}
                    {...custom}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </MuiThemeProvider>
    );

    renderSelectField = ({
                             input,
                             label,
                             meta: {touched, error},
                             children,
                             classes,
                             ...custom
                         }) => (
        <FormControl error={touched && error} className={classes.selectInputLabel}>
            <InputLabel htmlFor="sex-native-simple" variant="filled" color='secondary' >Пол</InputLabel>
            <Select
                native
                {...input}
                {...custom}
                inputProps={{
                    name: 'sex',
                    id: 'sex-native-simple',
                    classes: { select: classes.select}
                }}
                variant="outlined"
                color="secondary"
            >
                {children}
            </Select>
        </FormControl>
    );

    render() {
        const {handleSubmit, pristine, error, submitting, classes} = this.props;

        return (
            <div className="form-wrapper">
                <form onSubmit={handleSubmit}>
                    <div className="form__header">Информация о сотруднике</div>
                    <Field
                        name="lastName"
                        component={this.renderTextField}
                        label='Фамилия'
                        type="text"
                        classes={classes}
                    />
                    <Field
                        name="name"
                        component={this.renderTextField}
                        label='Имя'
                        type="text"
                        classes={classes}
                    />

                    <Field
                        name="fatherName"
                        component={this.renderTextField}
                        label='Отчество'
                        type="text"
                        classes={classes}
                    />


                    <Field
                        classes={classes}
                        name="sex"
                        component={this.renderSelectField}
                        label="Пол"
                    >
                        <option className={classes.select} value={'male'}>Мужской</option>
                        <option className={classes.select} value={'female'}>Женский</option>
                    </Field>

                    <Field
                        name="date"
                        component={this.renderDateField}
                        type="date"
                        label='День рождения'
                        classes={classes}
                    />


                    <Field
                        name="phone"
                        component={this.renderTextField}
                        type="text"
                        classes={classes}
                        label="Мобильный телефон"
                        placeholder=''
                    />

                    <Field
                        name="email"
                        component={this.renderTextField}
                        type="text"
                        classes={classes}
                        label="E-mail"
                        placeholder=''
                    />
                    <Field
                        name="registration"
                        component={this.renderTextField}
                        label='Адрес постоянной регистрации'
                        type="text"
                        classes={classes}
                    />
                    <Field
                        name="employer"
                        component={this.renderTextField}
                        label='Название работодателя'
                        type="text"
                        classes={classes}
                    />


                     <button className="form__submit-button" type='submit'
                            disabled={ submitting}>Сохранить
                    </button>
                </form>
            </div>
        )
    }
}

const styles = {

    textFieldWrapper: {
        height: 88,
    },
    textField: {
        width: '100%',
        paddingBottom: 0,
        marginTop: 0,
        marginBottom: 10,
        fontWeight: 700,
    },

    dateField: {
        width: '48%',
        marginTop: 0,
        marginBottom: 10,
        float: "left",
    },

    email: {
        marginTop: 0,
        marginBottom: 10,
        width: '48%',
        float: "left",
    },

    selectInputLabel: {
        width: '48%',
        marginTop: 0,
        marginBottom: 10,
        float: "left",
        marginRight: '4%'
    },

    textFieldMobilePhone: {
        marginTop: 0,
        marginBottom: 10,
        width: '48%',
        marginRight: '4%',
        float: "left",
    },

};

const ReduxForm = compose(withStyles(styles), reduxForm({form: 'form', validate}))(Form);

export class FormContainer extends Component {


    onSubmitLogin = (formData) => {
        alert('Форма валидна, отправляется запрос')
    }

    render() {
        return (<div>
                <ReduxForm onSubmit={this.onSubmitLogin} />
            </div>
        )
    }
}

export default FormContainer;