export const getPokemons = (state) => {
    return state.pokemonsPage.pokemons;
}

export const getPokemonTypes = (state) => {
    return state.pokemonsPage.types;
}

export const getPokemonSubtypes = (state) => {
    return state.pokemonsPage.subtypes;
}

export const getSelectedType = (state) => {
    return state.pokemonsPage.selectedType;
}

export const getSelectedSubtype = (state) => {
    return state.pokemonsPage.selectedSubtype;
}

export const getPageSize = (state) => {
    return state.pokemonsPage.pageSize;
}

export const getTotalPokemonsCount = (state) => {
    return state.pokemonsPage.totalPokemonsCount;
}

export const getCurrentPage = (state) => {
    return state.pokemonsPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.pokemonsPage.isFetching;
}
