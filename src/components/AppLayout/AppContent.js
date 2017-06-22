import React from 'react';
import {Route, Switch} from 'react-router-dom';

const AppContent = ({routes}) => (
  <div className="App-content">
    <Switch>
      {routes.map((route, index)=> <Route key={index} {...route}/>)}
    </Switch>
  </div>
);
export default AppContent;