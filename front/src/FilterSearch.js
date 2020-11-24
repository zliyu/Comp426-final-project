import React, { Component } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Filter from "./Filter";

const FilterSearch = (props) => {
    const test = (filter) =>{
        console.log("Calling from Result.js");
        console.log(filter);
        //localStorage.username = "haha";
    }

    return (
        <div className="row">
            <div className="col-3" style={{ padding: "15px 30px" }}>
                <Filter apply={test}></Filter>
            </div>
            <div className="col-8" style={{ backgroundColor: "rgb(250, 250, 250)" }}>
                {/* course cards here*/}
            </div>
            <div className="col-1">
                {/* nothing here*/}
            </div>

        </div>

    );

}

export default FilterSearch;

