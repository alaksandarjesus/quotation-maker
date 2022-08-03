import Button from '@mui/material/Button';
import { Routes, Route, useNavigate } from 'react-router-dom';
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import "../App.css";
import "./login.css";



export default function Login({ setOpenModal }) {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const navigate = useNavigate();
    return (
        
        <div className="modalContainer">
        <div  className="container ">

            <div className="row justify-content-center  " >

                <div classNmae="col-xl-10 col-lg-12 col-md- ">

                    <div class="card o-hidden border-0 shadow-lg my-5 " >
                        <div class="card-body p-0">

                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="p-5">
                                        <div class="text-center">
                                            <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        </div>
                                        <form class="user">
                                            <div class="form-group">
                                                <TextField className="form-control form-control-user"
                                                type="email"
                                                name="Email"
                                                label="Email"/>
                                            </div>
                                            <div >
                                                < TextField 
                                                   className="form-control form-control-user"
                                                    type="password"
                                                    name="password"
                                                    label="password"
                                                    />
                                            </div>


                                            <div class="form-group">
                                                <div class="custom-control custom-checkbox small">
                                                    <FormControlLabel control={<Checkbox />} label="Remember Me" />
                                                </div>
                                            </div>

                                            <Button class="btn btn-primary btn-user btn-block form-control form-control-user" color="inherit"
                                                onClick={() => { navigate('-1') }}>login</Button>
                                            <Button class="btn btn-primary btn-user btn-block form-control form-control-user"
                                            color="inherit"  onClick={() => {
                                                setOpenModal(false);
                                              }}>cancel</Button>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
        </div>


    )
};