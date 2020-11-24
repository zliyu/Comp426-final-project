import React, { Component } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";


const Card = (props) => {
    // const test = (filter) =>{
    //     console.log("Calling from Result.js");
    //     console.log(filter);
    //     //localStorage.username = "haha";
    // }
    let c = props.course;

    return (
        <div className="card">
            <div className="card-body">


                <h5 style={{ display: "inline" }}>
                    <b>{c.name}</b> {c.title}
                    <span style={{ color: "grey" }}> ({c.credits})</span></h5>
                <button type="button" className="btn btn-success btn-sm" style={{ float: "right" }}>
                    <i className="fas fa-plus-circle"></i><b>&nbsp;Add to list</b>
                </button>
                <br /><b>Gen Ed:</b> {c.ge[0] == "s" ? "None" : c.ge}<br />
                <b>Prereqs:</b> {c.requisites == "s" ? "None" : c.requisites}<br />
                <span>{c.introduction}</span>
            </div>

        </div>

    );
}

export default Card;

