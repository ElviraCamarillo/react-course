import React, {  Component} from 'react';

//External Packages
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

//Pages
import Home from './pages/Home'
import Notes from './pages/Notes'
import Menu from './pages/Menu'
import CreditCards from './pages/CreditCards'

//CSS
import './App.css';
import CurrencyConverter from './components/ CurrencyConverter';

export default class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        <Menu/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/notes">
            <Notes />
          </Route>
          <Route exact path="/currencyConverter">
            <CurrencyConverter />
          </Route>
          <Route exact path="/creditcards">
            <CreditCards />
          </Route>
        </Switch>
      </div>
    </Router>
    );
  }
}