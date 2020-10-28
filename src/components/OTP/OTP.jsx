import React from 'react';
import { Redirect } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Input, createField } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import style from '../common/FormsControls/FormsControls.module.css';
import { confirmSMS } from '../../redux/auth-reducer';

const OTPForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Code from SMS', 'password', [required], Input)}

            {error && <div className={style.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button className={style.mainButton}>&#8594;</button>
            </div>
        </form>
    )
}

const OTPReduxForm = reduxForm({ form: 'OTP' })(OTPForm)

const OtpPage = (props) => {

    const onSubmit = (formData) => {
        props.confirmSMS(formData.password)
    }

    if (!props.correctLoginPass) {
        return <Redirect to={'/login'} />
    }

    if (props.isAuth) {
        return <Redirect to={'/pokemons'} />
    }

    return <div className={style.formstyle}>
        <OTPReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    correctLoginPass: state.auth.correctLoginPass
})

export default connect(mapStateToProps, { confirmSMS })(OtpPage);