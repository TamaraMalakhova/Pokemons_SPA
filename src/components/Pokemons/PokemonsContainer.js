import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setCurrentPage, requestPokemons } from '../../redux/pokemons-reducer';

import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { getPokemons, getPageSize, getTotalPokemonsCount, getCurrentPage, 
    getIsFetching, getPokemonTypes, getPokemonSubtypes, 
    getSelectedType, getSelectedSubtype } from '../../redux/pokemons-selector';
import { Pokemons } from './Pokemons';
import { logout } from '../../redux/auth-reducer';


class PokemonsContainer extends React.Component {

    componentDidMount() {
        if (!this.props.isAuth) {
            this.props.history.push('/login');
        }
        let {currentPage, pageSize, selectedSubtype, selectedType} = this.props;
        this.props.requestPokemons(currentPage, pageSize, selectedType, selectedSubtype);
    }

    onPageChanged = (pageNumber) => {
        let {pageSize, selectedSubtype, selectedType} = this.props;
        this.props.requestPokemons(pageNumber, pageSize, selectedType, selectedSubtype);
        this.props.setCurrentPage(pageNumber);
    }

    setType = (type) => {
        let {currentPage, pageSize, selectedSubtype} = this.props;
        this.props.requestPokemons(currentPage, pageSize, type, selectedSubtype);
    }

    setSubtype = (subtype) => {
        let {currentPage, pageSize, selectedType} = this.props;
        this.props.requestPokemons(currentPage, pageSize, selectedType, subtype);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Pokemons totalPokemonsCount={this.props.totalPokemonsCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                pokemons={this.props.pokemons}
                types={this.props.types}
                subtypes={this.props.subtypes}
                logout={this.props.logout}
                setType={this.setType}
                setSubtype={this.setSubtype}
                selectedType={this.props.selectedType}
                selectedSubtype={this.props.selectedSubtype} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        pokemons: getPokemons(state),
        types: getPokemonTypes(state),
        subtypes: getPokemonSubtypes(state),
        pageSize: getPageSize(state),
        totalPokemonsCount: getTotalPokemonsCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        selectedType: getSelectedType(state),
        selectedSubtype: getSelectedSubtype(state),
        isAuth: state.auth.isAuth
    };
}

export default compose(
    connect(mapStateToProps, { setCurrentPage, requestPokemons, logout }),
    withRouter
)(PokemonsContainer)