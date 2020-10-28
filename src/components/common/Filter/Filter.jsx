import React from 'react';
import style from './Filter.module.css';

export const Filter = (props) =>{

    return (
        <div className={style.filter}>
            <select onChange={(e)=> props.setSelect(e.target.value)} value={props.choosenValue ? props.choosenValue : props.filterName}>
                <option hidden value={props.filterName}>{props.filterName}</option>
            {props.items
            .map(item => {
                return <option key = {item} value={item} > {item} </option>
            })}
            </select>
        </div>
    );
}