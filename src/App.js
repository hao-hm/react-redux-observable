import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import asyncComponent from './components/AsyncComponent';
import configureStore from './store';
import NotFound from "./features/notFound/NotFound";

//lazy loading
const Home = asyncComponent(() => import('./features/home/Home'));
const About = asyncComponent(() => import('./features/about/About'));
const Location = asyncComponent(() => import('./features/location/Location'));

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

const initialState = {};
const store = configureStore(initialState, history);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="App">
            <div className="App-header">
              <ul className="App-menu">
                <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/location" activeClassName="active">Location</NavLink></li>
                <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
              </ul>
            </div>
            <div className="App-content">
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/location" component={Location}/>
                <Route path="/about" component={About}/>
                <Route component={NotFound}/>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>

    );
  }
}

export default App;
