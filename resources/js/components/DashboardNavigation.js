import React from 'react';
import ReactDOM from 'react-dom';
import Crews from './Crews';

function DashboardNav() {
    return (
        <div id="side-nav" class="card">
            <div class="card-header">Dashboard</div>
            <div class="card-body">
            <ul>
                <li>
                    <a href="#" class="side-nav-link">
                        <span>Crews</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="side-nav-link">
                        <span>Ships</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="side-nav-link">
                        <span>Duties</span>
                    </a>
                </li>
            </ul>
            </div>
        </div>
    );
}

export default DashboardNav;

