import React from 'react';
import ReactDOM from 'react-dom';
import Crews from './Crews';
import DashboardNav from './DashboardNavigation';

function Dashboard() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                   <DashboardNav />
                </div>
                <div className="col-9">
                    <Crews /> 
                </div>
            </div>
        </div>
    );
}

export default Dashboard;

