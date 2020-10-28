import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import Header from '../Header/Header';
import style from './PokemonPage.module.css';

export const PokemonPage = (props) => {

    let pokemon = props.card;
    if (!pokemon) {
        return <Preloader />
    }

    return (
        <div className={style.fullPokemonInfo}>
            <Header logout={props.logout} routeBack={'/pokemons'} />
            <div className={style.pokemonPage}>
                <img src={pokemon.imageUrl} alt="pokemon" />
                <div className={style.pokemonInfo}>
                    <div className={style.mainInfo}>
                        <div><b>Pokemon name</b> {pokemon.name}</div>
                        <div><b>Type</b> {pokemon.types}</div>
                        <div><b>SubType</b> {pokemon.subtype}</div>
                    </div>
                    <div className={style.extraInfo}>
                        {pokemon.attacks !== undefined ? <div>
                            <div><b>attackDamage</b>  {pokemon.attacks[0].damage}</div>
                            <div><b>attackCost</b>  {pokemon.attacks[0].cost}</div>
                        </div> : null
                        }
                        {pokemon.resistances !== undefined ?
                            <div><b>resistances</b>  {pokemon.resistances[0].type}: {pokemon.resistances[0].value} </div>
                            : null
                        }
                        <div><b>evolvesFrom</b>  {pokemon.evolvesFrom}</div>
                    </div>
                </div>
            </div>
            {pokemon.attacks !== undefined ?
                <div className={style.attacksDescription}>{pokemon.attacks[0].text}</div>
                : null
            }
        </div>
    );
}
