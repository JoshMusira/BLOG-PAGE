import "../register/register.css"
import { Link } from 'react-router-dom'
import React from 'react'
import { useForm } from "react-hook-form"
import * as yup from "yup"
import Axios from 'axios'
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from "react-router-dom"


export default function Register() {
    const navigate = useNavigate();
    const schema = yup.object().shape({
        username: yup.string().required('Username is required'),
        email: yup.string().required("Email is required"),
        password: yup.string().required("Password is required")
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) => {
        Axios.post("http://localhost:8081/auth/register", data)
            .then((response) => {
                response.data.message && alert(response.data.message);
                navigate("/login");
            })
            .catch(({ response }) => {
                alert(response.data.error)
            })
    }
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form onSubmit={handleSubmit(onSubmit)} className="registerForm">
                <label>Username</label>
                <p className='error'>{errors.username?.message}</p>
                <input  {...register("username")} className="registerInput" type="text" placeholder="Enter your username..." />
                <label>Email</label>
                <p className='error'>{errors.email?.message}</p>
                <input  {...register("email")} className="registerInput" type="text" placeholder="Enter your email..." />
                <label>Password</label>
                <p className='error'>{errors.password?.message}</p>
                <input  {...register("password")} className="registerInput" type="password" placeholder="Enter your password..." />
                {/* <button className="registerButton">Register</button> */}
                <input type="submit" value="Register" className="registerButton" />
            </form>
            <button className="registerLoginButton">
                <Link className='link' to='/login'>  Login</Link>

            </button>
        </div>
    )
}
