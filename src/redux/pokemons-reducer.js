import { pokemonsAPI } from "../api/api";

const SET_POKEMONS = 'pokemonsPage/SET_POKEMONS';
const SET_POKEMON_FILTERS = 'pokemonsPage/SET_POKEMON_FILTERS';

const SET_CURRENT_PAGE = 'pokemonsPage/SET_CURRENT_PAGE';
const SET_TOTAL_POKEMONS_COUNT = 'pokemonsPage/SET_TOTAL_POKEMONS_COUNT';
const TOGGLE_IS_FETCHING = 'pokemonsPage/TOGGLE_IS_FETCHING';
const SET_SELECTED_FILTERS ='pokemonsPage/SET_SELECTED_FILTERS';


let initialState = {
    pokemons: [],
    types: [],
    subtypes: [],
    selectedType: '',
    selectedSubtype: '',
    pageSize: 4,
    totalPokemonsCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const pokemonsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_POKEMONS:
            return {
                ...state,
                pokemons: action.pokemons
            };

        case SET_POKEMON_FILTERS:
            return {
                ...state,
                types: action.types,
                subtypes: action.subtypes
            };

        case SET_SELECTED_FILTERS:
            return {
                ...state,
                selectedType: action.selectedType,
                selectedSubtype: action.selectedSubtype
            };

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };

        case SET_TOTAL_POKEMONS_COUNT:
            return {
                ...state,
                totalPokemonsCount: action.totalPokemonsCount
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };

        default:
            return state;
    }
}

export const setPokemons = (pokemons) => ({ type: SET_POKEMONS, pokemons });
export const setPokemonFilters = (types, subtypes) => ({ type: SET_POKEMON_FILTERS, types, subtypes });

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalPokemonsCount = (totalPokemonsCount) => ({ type: SET_TOTAL_POKEMONS_COUNT, totalPokemonsCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const setSelectedFilters = (selectedType, selectedSubtype) =>({type: SET_SELECTED_FILTERS, selectedType, selectedSubtype});


export const requestPokemons = (page, pageSize, type, subtype) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let dataPokemons = await pokemonsAPI.getPokemons(page, pageSize, type, subtype);
    let dataTypes = await pokemonsAPI.getPokemonTypes(); 
    let dataSubtypes = await pokemonsAPI.getPokemonSubtypes();
    dispatch(toggleIsFetching(false));
    dispatch(setPokemons(dataPokemons.data.cards));
    dispatch(setPokemonFilters(dataTypes.types, dataSubtypes.subtypes));
    dispatch(setSelectedFilters(type, subtype));

    dispatch(setTotalPokemonsCount(dataPokemons.headers['total-count']));
}

export default pokemonsReducer;