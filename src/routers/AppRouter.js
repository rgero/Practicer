import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {createBrowserHistory} from 'history';

import MainPage from '../components/MainPage';
import NotFoundPage from '../components/NotFoundPage';


export const history = createBrowserHistory();

const AppRouter = () => (
  <BrowserRouter history={history}>
    <div>
      <Switch>
        <Route path="/" component={MainPage} exact={true}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;