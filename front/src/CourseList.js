import React, { Component } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Card from "./Card";

const CourseList = (props) => {
    // let cl = [
    //     {
    //         "name": "AERO 101",
    //         "title": "Heritage and Values of the United States Air Force",
    //         "credits": "1 Credit",
    //         "introduction": "Part one of a two-part course that examines the opportunities of an Air Force officer, as well as the structure and function of the Air Force",
    //         "requisites": "s",
    //         "ge": ["s"],
    //         "grading": "Letter grade"
    //     },];

           let cl = JSON.parse(localStorage.getItem('courselist'));

    

    return (
        <div className="row">
            <div className="col-2" style={{ padding: "15px 30px" }}>
                
            </div>
            <div className="col-8" style={{ backgroundColor: "rgb(250, 250, 250)" }}>
                {(cl==null || cl==[])?
                <h6>You haven't saved any courses.</h6>:
                cl.map((data) => { return (<div><br></br><Card course={data} inlist={true}></Card></div>);})}                
            </div>
            <div className="col-2">
                {/* nothing here*/}
            </div>

        </div>

    );
}

export default CourseList;

