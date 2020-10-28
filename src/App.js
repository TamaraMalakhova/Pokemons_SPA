import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Login  from './components/Login/Login';
import OtpPage from './components/OTP/OTP';
import PokemonPageContainer from './components/PokemonPage/PokemonPageContainer';
import PokemonsContainer from './components/Pokemons/PokemonsContainer';

function App(props) {

  return (
    <div className="App">
      <Switch>
          <Route exact path='/' render={ 
            () => props.isAuth ? <Redirect to={'/pokemons'} /> : <Redirect to={'/login'} />
          } />
          <Route path='/pokemon/:id?' render={()=> <PokemonPageContainer />} />
          <Route path='/pokemons' render={() => <PokemonsContainer/>} />
          <Route path='/login' render={() => <Login />} />
          <Route path='/SMSconfirm' component={OtpPage} />
          <Route path = '*' render= {()=><div>404 NOT FOUND</div>} />
        </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAith: state.auth.isAuth
})

export default connect(mapStateToProps)(App);
