import axios from 'axios';
import React from 'react';
import { useState, useEffect  } from "react";
import Swal from 'sweetalert2'

import ReactDOM from 'react-dom';

function Ships() {
    const [firstName, setFirstName] = useState("");
    const [middlName, setMiddlName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [duties, setDuties] = useState("");
    const [crews, setCrews] = useState();
    const [flag, setFlag] = useState(false);
    const [shipId, setShipId] = useState();
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();
  
    const handleSubmit = () => {
        const packets = {
            ship_name:  firstName,
            ship_capacity: middlName,
        };

        axios.post('/api/Ships', packets).then(
            (response) => {
                if (response['status'] == 200) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Succesfully added a ship',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                      console.log(response);
                      getCrewData();
                } else {
                    Swal.fire({
                        title: 'Error',
                        text: 'Something went wrong',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                      })
                }
            }
        )     
      }
    
    const getCrewData = () => {
        axios.get('/api/Ships').then(
            (response) => {
                setCrews(response['data']['data'])
            }
        )
    }

    const displayCrews = crews ? (
        <div>
            <table class="table">
            <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Ship capacity</th>
                    <th scope="col">Action</th>
                  </tr>
            </thead>
            <tbody>
            {crews.map((crew, index) => (
                <tr>
                <td scope="row">{crew.id}</td>
                <td>{crew.ship_name}</td>
                <td>{crew.ship_capacity}</td>
                <th scope="col"><span class='btn btn-sm btn-primary'>Action</span></th>
                </tr>
            ))}
            </tbody>
            </table>
        </div>
    ) : null

    useEffect(() => {
        if(!flag) {
            getCrewData()
            setFlag(true);
        }
    },[]);

    const Crewmodal = (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add Ship</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" 
                className="form-control input-style"
                placeholder="Ship Name" 
                value={firstName}
                onChange= {(e) => setFirstName(e.target.value)}
                />
                <input type="text" 
                className="form-control input-style"  
                placeholder="Ship Capacity" 
                value={middlName}
                onChange= {(e) => setMiddlName(e.target.value)}
                />
            </div>
            </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Save changes</button>
            </div>
            </div>
        </div>
        </div>
        );

    return (
        <div className="card">
            <div className="card-header card-header-style"><span>Ships</span> 
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Add Ship
            </button>
            </div>
            <div className="card-body">
            {displayCrews}
            </div>
            {Crewmodal}
        </div>
    );
}

export default Ships;

