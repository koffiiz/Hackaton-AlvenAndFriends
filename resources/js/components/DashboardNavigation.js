import React from 'react';
import ReactDOM from 'react-dom';
import Crews from './Crews';
import {Link, withRouter} from 'react-router-dom';

function DashboardNav() {
    return (
        <div id="side-nav" class="card">
            <div class="card-header">Dashboard</div>
            <div class="card-body">
            <ul>
                <li>
                    <a href="/crew" class="side-nav-link">
                    <img class="side-icon" src="../images/crews.png" alt="crews-icon" srcset="" />
                    <span>Crews</span>
                    </a>
                </li>
                <li>
                    <a href="/ships" class="side-nav-link">
                    <img class="side-icon" src="../images/crews.png" alt="ship-icon" srcset="" />
                    <span>Ships</span>
                    </a> 
                </li>
                <li>
                    <a href="/duties" class="side-nav-link">
                    <img class="side-icon" src="../images/crews.png" alt="duties-icon" srcset="" />
                    <span>Duties</span>
                    </a>
                </li>
            </ul>
            </div>
        </div>
    );
}

export default DashboardNav;

