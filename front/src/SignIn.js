import React, { Component } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const SignIn = (props) => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const signin = () => {
        //add sign in function here
        console.log("user: "+user+"; password: "+password);
    }

    return (
        <div className="container" style={{ maxWidth: 400 }}>
            <br></br>
            <h3 style={{ marginBottom: 15 }}>Sign in</h3>
            <form>
                <div className="form-group">
                    <label for="name">Username or Email</label>
                    <input className="form-control" id="name" onChange={event => setUser(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <span style={{ float: "right" }}><NavLink to='/signin'>Forgot your password?</NavLink></span>
                    <input type="password" className="form-control" id="password" onChange={event => setPassword(event.target.value)}/>
                </div>
                <button className="btn btn-dark" onClick={signin}
                    style={{ display: 'block', width: '100%', marginBottom: 10, marginTop: 30 }}>Sign in</button>
                <span>New user? <NavLink to='/register'>Create an account here.</NavLink></span>
            </form>
        </div>

    );

}

export default SignIn;

