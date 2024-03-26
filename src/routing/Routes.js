import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../route-definitions';

const appRoutes = (() => (
  routes.map((route) => (
    route.map((routeDef) => {
      const Component = routeDef.type === 'PRIVATE' ? <div>Dummy Priovate Comp</div> : Route;
      return <Component {...routeDef.props} />;
    })
  ))
))();
const Routes = () => <Switch>{appRoutes}</Switch>;

export default Routes;
