import React from 'react';
import ReactDOM from 'react-dom';
import Crews from './Crews';

function Dashboard() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <div className="card">
                        <div className="card-header">Dashboard</div>
                        <div className="card-body">
                        <ul>
                            <li>Crews</li>
                            <li>Ships</li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="col-9">
                    <Crews /> 
                </div>
            </div>
        </div>
    );
}

export default Dashboard;

