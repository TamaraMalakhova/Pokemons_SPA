import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from 'redux-thunk';

import { reducer as formReducer } from 'redux-form';

import authReducer from "./auth-reducer";
import pokemonsReducer from "./pokemons-reducer";
import pokemonPageReducer from "./pokemonPage-reducer";

let reducers = combineReducers({
    pokemonsPage: pokemonsReducer,
    pokemonPage: pokemonPageReducer,
    auth: authReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;