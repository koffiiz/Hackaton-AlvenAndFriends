import axios from 'axios';
import React from 'react';
import { useState } from "react";

import ReactDOM from 'react-dom';

function Crews() {
    const [firstName, setFirstName] = useState("");
    const [middlName, setMiddlName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        alert('The name you entered was: ${firstName}')
      }

    const Crewmodal = (
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add crew</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
            <form onSubmit={handleSubmit}>
            <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" 
                class="form-control input-style"  
                placeholder="First name" 
                value={firstName}
                onChange= {(e) => setFirstName(e.target.value)}
                />
                <input type="text" 
                class="form-control input-style"  
                placeholder="Middle name" 
                value={middlName}
                onChange= {(e) => setMiddlName(e.target.value)}
                />
                <input type="text" 
                class="form-control input-style"  
                placeholder="Middle name" 
                value={lastName}
                onChange= {(e) => setLastName(e.target.value)}
                />
            </div>
            <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" 
            class="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp" 
            placeholder="Enter email"
            value={email}
            onChange= {(e) => setEmail(e.target.value)}
            />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>
        );

    return (
        <div className="card">
            <div className="card-header card-header-style"><span>Crews</span> 
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Add crew
            </button>
            </div>

            <div className="card-body">
               
            </div>
            {Crewmodal}
        </div>
    );
}

export default Crews;

