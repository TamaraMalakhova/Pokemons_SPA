import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={style.header}>
            { props.routeBack ? <div className={style.backBtn}>
                <NavLink to={props.routeBack}><button type="button" className="btn btn-outline-secondary">
                    &lt; Back</button></NavLink>
            </div> :
                <div></div>}
            <div className={style.loginBlock} >
                <NavLink to='/login'><button type="button" className="btn btn-outline-secondary" onClick={props.logout}>
                    Log out
                </button></NavLink>
            </div>
        </header>
    );
}

export default Header;