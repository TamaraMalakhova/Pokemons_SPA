import React from 'react';
import { Redirect } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Input, createField } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import style from '../common/FormsControls/FormsControls.module.css';
import { login, loginWithToken } from '../../redux/auth-reducer';

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
                {createField('Login', 'email', [required], Input)}
                {createField('Password', 'password', [required], Input, {type: 'password'})}

            {error && <div className ={style.formSummaryError}>
                {error}
            </div>
            }
                <button className={style.mainButton}>&#8594;</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password)
    }

    if (localStorage.getItem('token')){
        props.loginWithToken(localStorage.getItem('token'));
      } 

    if (props.correctLoginPass && props.isAuth) {
        return <Redirect to={'/pokemons'} />
    }

    if (props.correctLoginPass) {
        return <Redirect to={'/SMSconfirm'} />
    }

    return <div className={style.formstyle}>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth,
    correctLoginPass: state.auth.correctLoginPass,
})

export default connect(mapStateToProps, { login, loginWithToken })(Login);