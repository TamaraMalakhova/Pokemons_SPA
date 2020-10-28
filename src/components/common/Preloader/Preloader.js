import React from 'react';
import preloader from '../../../assets/images/preloader.svg';
import style from './Preloader.module.css';

let Preloader = () => {
    return <div className={style.preloaderBody}>
                <img className={style.preloader} src={preloader} alt ='loaging...'/>
            </div> 
}

export default Preloader;