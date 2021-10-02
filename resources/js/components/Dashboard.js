import React from 'react';
import ReactDOM from 'react-dom';
import Crews from './Crews';
import Ships from './Ships';
import DashboardNav from './DashboardNavigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Dashboard() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                   <DashboardNav />
                </div>
                <div className="col-9">
                <BrowserRouter>
                <Switch>
                    <Route exact path='/crew' > <Crews/> </Route>
                    <Route exact path='/ships' > <Ships/> </Route>
                </Switch>
                </BrowserRouter>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;

