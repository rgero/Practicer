import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {createBrowserHistory} from 'history';

import IndexPage from '../components/IndexPage';
import NotFoundPage from '../components/NotFoundPage';
import DashboardPage from '../components/DashboardPage';
import {Header} from '../components/Header';

import CostPage from '../components/costs/CostPage';
import AddCostPage from '../components/costs/AddCostPage';
import EditCostPage from '../components/costs/EditCostPage';

import PracticePage from '../components/practices/PracticePage';
import AddPractice from '../components/practices/AddPracticePage';
import EditPractice from '../components/practices/EditPracticePage';

import AddInstrument from '../components/instruments/AddInstrumentPage';
import InstrumentPage from '../components/instruments/InstrumentPage';
import EditInstrumentPage from '../components/instruments/EditInstrumentPage';


export const history = createBrowserHistory();

const AppRouter = () => (
  <BrowserRouter history={history}>
    <Header/>
    <div className="content-container">
      <Switch>
        <Route path="/" component={IndexPage} exact={true}/>
        <Route path="/dashboard" component={DashboardPage} />

        <Route path="/costs/" component={CostPage} exact={true} />
        <Route path="/costs/create" component={AddCostPage} />
        <Route path="/costs/edit/:id" component={EditCostPage} />

        <Route path="/practices/" component={PracticePage} exact={true} />
        <Route path="/practices/create" component={AddPractice} />
        <Route path="/practices/edit/:id" component={EditPractice} />
        
        <Route path="/instruments/" component={InstrumentPage} exact={true} />
        <Route path="/instruments/create" component={AddInstrument} />
        <Route path="/instruments/edit/:id" component={EditInstrumentPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;