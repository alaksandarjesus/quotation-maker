import Button from '@mui/material/Button';
import { useNavigate, Link } from 'react-router-dom';
import * as React from 'react'
import TextField from '@mui/material/TextField';
import "../App.css";
import { toast } from "react-toastify";
import { API } from "../globel";
import { useFormik } from 'formik';
import * as yup from 'yup';




export default function Login() {
    const navigate = useNavigate();

    const FormValidationSchema = yup.object({
        email: yup.string().required("enter valid email").min(5, "type more than 5 letters"),
        password: yup.string().required("enter valid password").min(5),
    })

    const { handleChange, handleBlur, handleSubmit, values, touched, errors } = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: FormValidationSchema,
        onSubmit: (values) => {
            login(values)
        }
    });

    const login = (data) => {
        fetch(`${API}/Quotation/login`,
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    console.log(data.error);
                    toast.error("ERROR:" + data.error);
                } else {
                    console.log(data);
                    navigate("/dashboard");
                }
            })
    }
    return (
        <form onSubmit={handleSubmit} className="user">
            <div className="form-group">
                <TextField className="form-control form-control-user"
                    type="email"
                    name="email"
                    label="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email && touched.email}
                    helperText={errors.email && touched.email ? errors.email : ""}
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
            <Button
                type="submit"
                className="btn btn-primary btn-user btn-block form-control form-control-user"
                variant="contained">login</Button>
            <div > New User? <Link className="lgbtn" to="/register">Register</Link>
            </div>
            <div><Link className="lgbtn" to="/forgotpassword">Forgot Password</Link></div>
        </form>
    )
};