import React, { Component } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {Redirect} from 'react-router-dom';

const SignIn = (props) => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const signin = () => {
        
        //window.open('Comp426-final-project', "_self", true);
        //window.location.replace('http://www.w3schools.com');
        //console.log("hey");
        //window.location.href = "http://www.w3schools.com";
        //return <Redirect to='/register' />;
        //return <Redirect to='../register' />;
        console.log("user: "+user+"; password: "+password);

        let users = JSON.parse(localStorage.getItem('users'));
        if (users == null) { users = []; }

        let loggedin = false;
        users.forEach(element => {
            if (element.username == user && element.password == password) {
                loggedin = true;
            }
        });
        if(!loggedin){
            alert("Wrong username/password");
            return;
        } else {//success
            localStorage.setItem('currentuser', user);
            localStorage.setItem('log', true);
            console.log("current user:"+localStorage.getItem('currentuser'));
            console.log("logged in?:"+!!localStorage.getItem('log'));
            window.open('Comp426-final-project');
                
            return;
        }
    }

    return (
        <div className="container" style={{ maxWidth: 400 }}>
            <br></br>
            <h3 style={{ marginBottom: 15 }}>Sign in</h3>
            <form>
                <div className="form-group">
                    <label for="name">Username</label>
                    <input className="form-control" id="name" onChange={event => setUser(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    {/* <span style={{ float: "right" }}><NavLink to='/signin'>Forgot your password?</NavLink></span> */}
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

