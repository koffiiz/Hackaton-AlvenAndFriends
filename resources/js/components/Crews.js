import axios from 'axios';
import React from 'react';
import { useState, useEffect  } from "react";
import Swal from 'sweetalert2'

import ReactDOM from 'react-dom';

function Crews() {
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
            first_name:  firstName,
            middle_name: middlName,
            last_name: lastName,
            email: email,
            ship_id: shipId,
            phone: phone,
            address: address
        };

        axios.post('/api/Crew', packets).then(
            (response) => {
                if (response['status'] == 200) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Succesfully added a crew',
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
        axios.get('/api/Crew').then(
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
                    <th scope="col">Avatar</th>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                    <th scope="col">Duties</th>
                    <th scope="col">Ship</th>
                  </tr>
            </thead>
            <tbody>
            {crews.map((crew, index) => (
                <tr>
                <td scope="row">Avatar</td>
                <td scope="row">{crew.id}</td>
                <td>{crew.first_name}{' '}{crew.last_name}</td>
                <td scope="row">{crew.phone}</td>
                <td scope="row">{crew.email}</td>
                <td scope="row">{crew.address}</td>
                <td scope="row">Duties</td>
                <td scope="row">{crew.ship_id}</td>
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
                <h5 className="modal-title" id="exampleModalLabel">Add crew</h5>
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
                placeholder="First name" 
                value={firstName}
                onChange= {(e) => setFirstName(e.target.value)}
                />
                <input type="text" 
                className="form-control input-style"  
                placeholder="Middle name" 
                value={middlName}
                onChange= {(e) => setMiddlName(e.target.value)}
                />
                <input type="text" 
                className="form-control input-style"  
                placeholder="Middle name" 
                value={lastName}
                onChange= {(e) => setLastName(e.target.value)}
                />
            </div>
            <div className="form-group">
            <label for="exampleInputEmail1">Contact</label>
            <input type="email" 
            className="form-control input-style" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp" 
            placeholder="Enter email"
            value={email}
            onChange= {(e) => setEmail(e.target.value)}
            />
            <input type="text" 
            className="form-control input-style" 
            placeholder="Enter phone number"
            value={phone}
            onChange= {(e) => setPhone(e.target.value)}
            />
            
            <input type="text" 
            className="form-control input-style" 
            placeholder="Enter Address"
            value={address}
            onChange= {(e) => setAddress(e.target.value)}
            />
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Ship ID</label>
                <input type="number" 
                className="form-control input-style"  
                placeholder="Ship ID" 
                value={shipId}
                onChange= {(e) => setShipId(e.target.value)}
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
            <div className="card-header card-header-style"><span>Crews</span> 
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Add crew
            </button>
            </div>
            <div className="card-body">
            {displayCrews}
            </div>
            {Crewmodal}
        </div>
    );
}

export default Crews;

