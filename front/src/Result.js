import React, { Component } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Filter from "./Filter";
import Card from "./Card";
const courses = require("./courses.json");

const Result = (props) => {
    const [res, setRes] = useState([]);
    const test = (filter) => {
        console.log("Calling from Result.js");
        console.log(filter);
        //localStorage.username = "haha";
    }

    const filtering = (filter) => {
        let results = [];
        for (let i = 0; i < 50; i++) {
            if(courses[i].name[6]==9){
                results.push(courses[i]);
            }
        }
        // for (let i = 0; i < courses.length; i++) {

        //     let dept_y = filter.dept_y.split(",").trim();
        //     for (let i = 0; i < dept_y.length; i++) { //Search for dept_y
        //         let dept = dept_y[i].split(" ")[0];
        //         if (courses[i].name.split(" ")[0].toLowerCase().includes(dept.toLowerCase()) && !results.includes(courses[i])) {
        //             results.push(courses[i]);
        //         }
        //     }

        //     let dept_n = filter.dept_n.split(",").trim();
        //     for (let i = 0; i < dept_n.length; i++) { // Search for dept_n
        //         let dept = dept_n[i].split(" ")[0];
        //         if (courses[i].name.split(" ")[0].toLowerCase().includes(dept.toLowerCase()) && !results.includes(courses[i])) {
        //             results.push(courses[i]);
        //         }
        //     }

        //     let num_min = filter.num_min;
        //     if (parseInt(courses[i].name.split(" ")[1]) >= parseInt(num_min) && !results.includes(courses[i])) {
        //         results.push(courses[i]);
        //     }

        //     let num_max = filter.num_max;
        //     if (parseInt(courses[i].name.split(" ")[1]) <= parseInt(num_max) && !results.includes(courses[i])) {
        //         results.push(courses[i]);
        //     }
        //     let ge_search = filter.ge.split(",").trim();
        //     for (let i = 0; i < ge_search.length; i++) {
        //         for (let j = 0; j < courses[i].ge.length; j++) {
        //             if (ge_search[i].toLowerCase() == courses[i].ge.length.toLowerCase() & !results.includes(courses[i])) {
        //                 results.push(courses[i]);
        //             }
        //         }
        //     }
        // }
        setRes(results);
    }

    return (
        <div className="row">
            <div className="col-3" style={{ padding: "15px 30px" }}>
                <Filter apply={filtering}></Filter>
            </div>
            <div className="col-8" style={{ backgroundColor: "rgb(250, 250, 250)" }}>
                {res.map((data) => { return (<div><br></br><Card course={data}></Card></div>);})}                
            </div>
            <div className="col-1">
                {/* nothing here*/}
            </div>

        </div>

    );

}

export default Result;

