import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {createBrowserHistory} from 'history';

import IndexPage from '../components/IndexPage';
import NotFoundPage from '../components/NotFoundPage';
import {Header} from '../components/Header';
import AddPractice from '../components/AddPracticePage';
import AddInstrument from '../components/AddInstrumentPage';
import InstrumentPage from '../components/InstrumentPage';


export const history = createBrowserHistory();

const AppRouter = () => (
  <BrowserRouter history={history}>
    <Header/>
    <div className="content-container">
      <Switch>
        <Route path="/" component={IndexPage} exact={true}/>
        <Route path="/practices/create" component={AddPractice} />
        <Route path="/instruments/" component={InstrumentPage} exact={true} />
        <Route path="/instruments/create" component={AddInstrument} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;