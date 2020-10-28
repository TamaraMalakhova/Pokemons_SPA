import { pokemonsAPI } from "../api/api";

const SET_POKEMON_PAGE = 'profilePage/SET_USER_PROFILE';

let initialState = {
    pokemon: null
};

const pokemonPageReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_POKEMON_PAGE:
            return {
                ...state,
                pokemon: action.pokemon
            };

        default:
            return state;
    }
}

export const setPokemonPage = (pokemon) => ({ type: SET_POKEMON_PAGE, pokemon });

export const getPokemonPage = (pokemonId) => async (dispatch) => {
    let response = await pokemonsAPI.getPokemon(pokemonId);
    dispatch(setPokemonPage(response));
}

export default pokemonPageReducer;