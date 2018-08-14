import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/navbar';
import MovieForm from './components/movieForm';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';

class App extends Component {
  render() {
    return (
      <main className="container">
        <NavBar />
        <Switch>
          <Route path='/movies/:id' component={MovieForm}/>
          <Route path='/movies' component={Movies}/>
          <Route path='/customers' component={Customers}/>
          <Route path='/rentals' component={Rentals}/>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect exact from='/' to='/movies' />
          <Redirect to='/not-found' />
        </Switch>
      </main>
    );
  }
}

export default App;
