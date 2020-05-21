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

//CSS
import './App.css';

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
        </Switch>
      </div>
    </Router>
    );
  }
}