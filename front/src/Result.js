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
        let dept_y = filter.dept_y;
        let dept_n = filter.dept_n;
        let num_min = filter.num_min;
        let num_max = filter.num_max;
        let ge = filter.ge;
        
        for (let i = 0; i < courses.length; i++) {
            let course_dept = courses[i].name.split(" ")[0];
            let course_num = courses[i].name.split(" ")[1]
            for (let j = 0; j < dept_y.length; j++) { //Search for dept_y
                if (course_dept.toLowerCase().includes(dept_y[j].toLowerCase()) && !results.includes(courses[i])) {
                    if (parseInt(course_num) >= parseInt(num_min) && !results.includes(courses[i])) {       // course number min
                        if (parseInt(course_num) <= parseInt(num_max) && !results.includes(courses[i])) {   // course number max

                            let ge_in = true;
                            for (let k = 0; k < ge.length; k++) {       //ge
                                if (!courses[i].ge.includes(ge[k])) {
                                    ge_in = false;
                                }
                            }
                            if (ge_in) {
                                results.push(courses[i]);
                            }

                        }
                    }
                }
            }

        }
        let results_final = []
        if (results.length > 50) {
            results_final = [...results.slice(0, 50)]
        } else {
            results_final = [...results]
        }
        setRes(results);
        console.log(results_final)
        return results_final;
    }

    return (
        <div className="row">
            <div className="col-3" style={{ padding: "15px 30px" }}>
                <Filter apply={filtering}></Filter>
            </div>
            <div className="col-8" style={{ backgroundColor: "rgb(250, 250, 250)" }}>
                {res.map((data) => { return (<div><br></br><Card course={data}></Card></div>); })}
            </div>
            <div className="col-1">
                {/* nothing here*/}
            </div>

        </div>

    );

}

export default Result;

