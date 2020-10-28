import * as axios from "axios";

const instance = axios.create({
    baseURL: `https://api.pokemontcg.io/v1/`
});

export const pokemonsAPI = {
    getPokemons(currentPage = 1, pageSize = 4, type='', subtype='') {
        return instance.get(`cards?page=${currentPage}&pageSize=${pageSize}&types=${type}&subtype=${subtype}`)
            .then(response => {
                return response;
            });
    },

    getPokemon(pokemonId) {
        return instance.get(`cards/${pokemonId}`)
            .then(response => {
                return response.data;
            });
    },

    getPokemonTypes(){
        return instance.get(`types`)
            .then(response => {
                return response.data;
            });
    },

    getPokemonSubtypes(){
        return instance.get(`subtypes`)
            .then(response => {
                return response.data;
            });
    }

}

