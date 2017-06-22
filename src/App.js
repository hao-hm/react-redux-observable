import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import createRoutes from './routes';
import AppHeader from "./components/AppLayout/AppHeader";
import AppContent from "./components/AppLayout/AppContent";

const store = configureStore();
const routes = createRoutes();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppHeader/>
            <AppContent routes={routes}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
