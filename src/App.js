import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/navbar';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';

class App extends Component {
  render() {
    return (
      <main className="container">
        <NavBar />
        <Switch>
          <Route path='/movies' component={Movies}/>
          <Route path='/customers' component={Customers}/>
          <Route path='/rentals' component={Rentals}/>
          <Redirect to='/movies' />
        </Switch>
      </main>
    );
  }
}

export default App;
