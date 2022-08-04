import Button from '@mui/material/Button';
import { Routes, Route, useNavigate } from 'react-router-dom';
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import "../App.css";
import { toast } from "react-toastify";
import "./login.css";
import {API} from "../globel";
import { useFormik } from 'formik';
import * as yup from 'yup';

const FormValidationSchema  = yup.object({
    email: yup.string().required("enter valid email").min(5, "type more than 5 letters"),
    password: yup.string().required("enter valid password").min(5),
})


export default function Login({ setOpenModal }) {
   
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const navigate = useNavigate();
    const {handleChange,handleBlur,handleSubmit,values,touched,errors}=useFormik({
        initialValues:{email:"",password:""},
        validationSchema:FormValidationSchema,
        onSubmit:(values)=>{login(values)
        }
    });

    const  login = (liking)=>{
        fetch(`${API}/madan/login`,
        {
            method: "POST",
            body: JSON.stringify(liking),
            headers: { 'Content-Type': 'Application/json' },
        }
        )
        .then((response)=>response.json())
        .then((data)=>{
        if(data.error){
            console.log(data.error);
            toast.error("ERROR:"+ data.error);
        }else{
            console.log(data);
            navigate("/home");
        }
    })
    }

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
                                        <form onSubmit={handleSubmit} class="user">
                                            <div class="form-group">
                                                <TextField className="form-control form-control-user"
                                                type="email"
                                                name="email"
                                                label="email"
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={errors.email && touched.email }
                                                helperText={errors.email && touched.email ? errors.email:""}
                                                />
                                            </div>
                                            <div >
                                                < TextField 
                                                   className="form-control form-control-user"
                                                    type="password"
                                                    name="password"
                                                    label="password"
                                                    value={values.password}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    error={errors.password && touched.password}
                                                    helperText={errors.password && touched.password ? errors.password : ""}
                                                    />
                                            </div>


                                            <div class="form-group">
                                                <div class="custom-control custom-checkbox small">
                                                    <FormControlLabel control={<Checkbox />} label="Remember Me" />
                                                </div>
                                            </div>

                                            <Button 
                                            type="submit"
                                            class="btn btn-primary btn-user btn-block form-control form-control-user" 
                                            color="inherit">login</Button>
                                           
                                        </form>
                                        <Button class="btn btn-primary btn-user btn-block form-control form-control-user"
                                            color="inherit"  onClick={() => {
                                                navigate('-1')
                                              }}>cancel</Button>
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