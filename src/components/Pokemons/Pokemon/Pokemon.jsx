import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Pokemons.module.css';

export const Pokemon = ({ pokemon }) => {
    return <div key={pokemon.id} className='card bg-light'>
        <div className={s.card}>
            <span>
                <NavLink to={'/pokemon/' + pokemon.id} >
                    <img className="card-img-top" src={pokemon.imageUrl} alt='pokemon' />
                </NavLink>
            </span>

            <span>
                <span className={s.pokemonInfo}>
                    <div className="card-title"><b>{pokemon.name}</b></div>
                    <div className='card-text'> {pokemon.artist} </div>
                </span>
            </span>
        </div>
    </div>
}
