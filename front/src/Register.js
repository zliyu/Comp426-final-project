import React, { Component } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const SignIn = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //verify input
    const [emverify, setEmverify] = useState(true); //email
    const [pwverify, setPwverify] = useState(true); //password

    const register = () => {
        console.log("username: " + username + "; email: " + email + "; pw: " + password);
    }

    const unChange = (e) => {
        setUsername(e.target.value);
    }
    const emChange = (e) => {
        let val = e.target.value;
        if(val.length===0 || val.match(/\S+@\S+\.\S+/)){
            setEmverify(true);
        } else {setEmverify(false);}
        setEmail(val.trim());
    }
    const pwChange = (e) => {
        let val = e.target.value;
        if(val.length===0 || val.length>5){
            setPwverify(true);
        } else {setPwverify(false);}
        setPassword(val);
    }

    return (
        <div className="container" style={{ maxWidth: 400 }}>
            <br></br>
            <h3 style={{ marginBottom: 15 }}>Create your account</h3>
            <form>
                <div className="form-group">
                    <label for="username">Username<span className="text-danger">*</span></label>
                    <input className="form-control" id="username" onChange={unChange} />
                </div>
                <div className="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={emChange} />                    
                    {emverify ?
                        <small id="emailHelp" className="form-text text-muted">Add your email in case you forget your
                        password.</small> :
                        <small id="emailHelp" className="form-text text-danger">This does not look like a valid email address.</small>
                    }
                </div>
                <div className="form-group">
                    <label for="password">Password<span className="text-danger">*</span></label>
                    <input type="password" className="form-control" id="password" aria-describedby="pwHelp" onChange={pwChange} />
                    {pwverify ?
                        <small id="pwHelp" className="form-text text-muted">Set your password (at least 6 characters).</small> :
                        <small id="pwHelp" className="form-text text-danger">Less than 6 characters.</small>
                    }
                </div>
                <button className="btn btn-dark" onClick={register}
                    style={{ display: 'block', width: '100%', marginBottom: 10, marginTop: 30 }}>Create account</button>
                <span>Already have an account? <NavLink to='/signin'>Sign in here.</NavLink></span>
            </form>
        </div>

    );

}

export default SignIn;

