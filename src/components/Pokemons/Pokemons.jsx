import React from 'react';
import { Filter } from '../common/Filter/Filter';
import Paginator from '../common/Paginator/Paginator';
import Header from '../Header/Header';
import { Pokemon } from './Pokemon/Pokemon';
import style from './Pokemons.module.css';

export const Pokemons = (props) => {

    return <div>
        <Header logout={props.logout} routeBack='' />
        <div className={style.body}>
            <div className={style.filters}>
                <Filter items={props.types} filterName="Type" setSelect={props.setType} choosenValue={props.selectedType} />
                <Filter items={props.subtypes} filterName="Subtype" setSelect={props.setSubtype} choosenValue={props.selectedSubtype} />
            </div>
            <div className={style.pagedcards}>
                <div className={style.cards}>
                    {   props.pokemons.length !== 0 ?
                        props.pokemons.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.id} />)
                    : <div>No pokemons with these filters! Try to change filters or pages. 
                        Your current page is {props.currentPage}.</div>
                    }
                </div>
                <Paginator currentPage={props.currentPage} totalItemsCount={props.totalPokemonsCount}
                    pageSize={props.pageSize} onPageChanged={props.onPageChanged} />
            </div>
        </div>
    </div>
}
