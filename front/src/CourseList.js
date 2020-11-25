import React, { Component } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Card from "./Card";

const CourseList = (props) => {
    let user = localStorage.getItem('currentuser');
    let cl = JSON.parse(localStorage.getItem('courselist'));
    return (
        <div className="container">
            <div  style={{ backgroundColor: "rgb(250, 250, 250)" }}>
                {(cl==null || cl.length==0)?
                <h5><br/>You haven't saved any courses.</h5>:
                cl.map((data) => { return (<div><br></br><Card course={data}></Card></div>);})}                
            </div>
        </div>
    );
}

export default CourseList;