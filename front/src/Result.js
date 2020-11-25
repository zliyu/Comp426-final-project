import React, { Component } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Filter from "./Filter";
import Card from "./Card";
const courses = require("./courses.json");

const Result = (props) => {
    const [res, setRes] = useState(courses.slice(0,200));

    const filtering = (filter) => {
        let results = [];

        let sortbyge = (filter.sort == 1);
        console.log("sort by ge: "+sortbyge);    
        let dept_y = filter.dept_y;
        console.log("depty:"+dept_y);
        let dept_n = filter.dept_n;
        let cr_min = filter.cr_min;
        let cr_max = filter.cr_max;
        let num_min = filter.num_min;
        let num_max = filter.num_max;
        let gened = filter.ge;
        if(gened==""||gened.length==0){
            gened=["CR", "FL", "QR", "LF", "PX", "PL", "HS", "SS", "VP", "LA", "PH", "BN", "CI", "EE", "GI", "NA", "QI", "US", "WB"];
        }

        for (let i = 0; i < courses.length; i++) {
            let thiscourse = courses[i];

            let course_dept = thiscourse.name.split(" ")[0];
            let course_num = thiscourse.name.split(" ")[1];
            let cr = parseFloat(thiscourse.credits.split(" ")[0]);
            console.log("depty:"+dept_y);
            if(dept_y.length>0){
                console.log("in");
                if(!dept_y.includes(course_dept)){continue;}
            }            
            if(dept_n.includes(course_dept)){continue;}

            if(course_num<num_min || course_num>num_max){continue;}
            if(cr<cr_min || cr>cr_max){continue;}

            results.push(thiscourse);            
        }

        if(sortbyge){
            results.forEach((elt)=>{
                elt.num_ge = 0;
                if(elt.ge[0]!="s"){
                    console.log("thiscourse'sge:"+elt.ge);
                    console.log("ge to match: "+gened);
                    elt.ge.forEach((req)=>{                       
                        if(gened.includes(req.trim().slice(0,2))){elt.num_ge++};
                    })
                }
                console.log(elt.name + " ge: "+elt.num_ge);
            })
            results.sort(function(a,b){
                return b.num_ge - a.num_ge;
            });
        }

        let results_final = []
        if (results.length > 50) {
            results_final = [...results.slice(0, 50)]
        } else {
            results_final = [...results]
        }
        setRes(results.slice(0, 200));
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

// const filtering = (filter) => {
//     let results = [];
//     let dept_y = filter.dept_y;
//     let dept_n = filter.dept_n;
//     let num_min = filter.num_min;
//     let num_max = filter.num_max;
//     console.log(filter.ge);
//     let ge = filter.ge;

//     for (let i = 0; i < courses.length; i++) {
//         let course_dept = courses[i].name.split(" ")[0];
//         let course_num = courses[i].name.split(" ")[1]
//         for (let j = 0; j < dept_y.length; j++) { //Search for dept_y
//             if (course_dept.toLowerCase().includes(dept_y[j].toLowerCase()) && !results.includes(courses[i])) {
//                 if (parseInt(course_num) >= parseInt(num_min) && !results.includes(courses[i])) {       // course number min
//                     if (parseInt(course_num) <= parseInt(num_max) && !results.includes(courses[i])) {   // course number max

//                         let ge_in = true;
//                         // for (let k = 0; k < ge.length; k++) {       //ge
//                         //     if (!courses[i].ge.includes(ge[k])) {
//                         //         ge_in = false;
//                         //     }
//                         // }
//                         if (ge_in) {
//                             results.push(courses[i]);
//                         }

//                     }
//                 }
//             }
//         }

//     }
//     let results_final = []
//     if (results.length > 50) {
//         results_final = [...results.slice(0, 50)]
//     } else {
//         results_final = [...results]
//     }
//     setRes(results);
//     console.log(results_final)
//     return results_final;
// }
