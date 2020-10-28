import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import { getPokemonPage } from '../../redux/pokemonPage-reducer';
import { PokemonPage } from './PokemonPage';
import { logout } from '../../redux/auth-reducer';


class PokemonPageContainer extends React.Component {

  refreshPokemonPage() {
    let pokemonId = this.props.match.params.id;
    if (!this.props.isAuth) {
      this.props.history.push('/login');
    }
    this.props.getPokemonPage(pokemonId);
  }

  componentDidMount() {
    this.refreshPokemonPage();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.refreshPokemonPage();
    }
  }

  render() {
    return (
      <PokemonPage {...this.props.pokemon} logout={this.props.logout} />
    );
  }
}

let mapStateToProps = (state) => ({
  pokemon: state.pokemonPage.pokemon,
  isAuth: state.auth.isAuth
})

export default compose(
  connect(mapStateToProps, { getPokemonPage, logout }),
  withRouter,
)(PokemonPageContainer);