import React from 'react';
import ReactDOM from 'react-dom';
import Crews from './Crews';

function DashboardNav() {
    return (
        <div className="card">
            <div className="card-header">Dashboard</div>
            <div className="card-body">
            <ul>
                <li>Crews</li>
                <li>Ships</li>
            </ul>
            </div>
        </div>
    );
}

export default DashboardNav;

