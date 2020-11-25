import React, { Component } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Filter = (props) => {
    // const [user, setUser] = useState('');
    const [filter, setFilter] = React.useState({
        sort: 0, // sort result by type 0-5
        search: 0, // 0: name; 1: name and description
        num_min: 0, // max course number allowed (inclusive)
        num_max: 700, // max course number allowed (inclusive)
        cr_min: 0, // min credit hour allowed (inclusive)
        cr_max: 4, // max credit hour allowed (inclusive)
        dept_y: "", // dept_y: [], // list of departments can appear in the result;
        dept_n: "", // dept_n: [], // list of departments not allowed in the result;
        ge: "",  // ge: [], // list of gen ed the user is interested in;    
        // comma separated lists; incorrect names allowed but will be ignored
    });

    const applyfilter = () => {
        let f = {
            sort: filter.sort,
            search: filter.search,
            num_min: filter.num_min,
            num_max: filter.num_max,
            cr_min: filter.cr_min,
            cr_max: filter.cr_max,
            dept_y: strtolist(filter.dept_y),
            dept_n: strtolist(filter.dept_n),
            ge: strtolist(filter.ge),
        }
        console.log(f);
        props.apply(f);
    }

    const sort = (e) => {
        setFilter(prevState => ({ ...prevState, sort: parseFloat(e.target.value) }));
    }
    const search = (e) => {
        let val = e.target.value; val = parseFloat(val);
        setFilter(prevState => ({ ...prevState, search: val }));
    }
    const deptinclude = (e) => {
        setFilter(prevState => ({ ...prevState, dept_y: e.target.value }));
    }
    const deptexclude = (e) => {
        setFilter(prevState => ({ ...prevState, dept_n: e.target.value }));
    }
    const coursenum_min = (e) => {
        let val = e.target.value; val = parseFloat(val);
        setFilter(prevState => ({ ...prevState, num_min: val }));
    }
    const coursenum_max = (e) => {
        let val = e.target.value; val = parseFloat(val);
        setFilter(prevState => ({ ...prevState, num_max: val }));
    }
    const credit_min = (e) => {
        let val = e.target.value; val = parseFloat(val);
        setFilter(prevState => ({ ...prevState, cr_min: val }));
    }
    const credit_max = (e) => {
        let val = e.target.value; val = parseFloat(val);
        setFilter(prevState => ({ ...prevState, cr_max: val }));
    }
    const gened = (e) => {
        setFilter(prevState => ({ ...prevState, ge: e.target.value }));
    }

    const strtolist = (str) => {
        if(str.trim()==""){return []};
        str = str.split(",");
        let res = [];
        str.forEach(element => {
            res.push(element.trim().toUpperCase());
        });
        return res;
    }

    return (
        
        <div>
            <button className="btn btn-dark" style={{ display: 'block', width: '100%' }} onClick={applyfilter}>Apply Filters</button><br />
            <select defaultValue="0" className="custom-select custom-select-sm" onChange={sort}>
                <option value="0">Sort By: Alphabetical (Default)</option>
                <option value="1">Number of GE covered</option>
                {/* <option value="2">Credit hours (low to high)</option>
                <option value="3">Credit hours (high to low)</option> */}
            </select>
            <hr />
            <div>
                <h5>Search by</h5>
                <div className="custom-control custom-radio">
                    <input type="radio" id="s1" name="customRadio" className="custom-control-input" value="0" defaultChecked onChange={search}/>
                    <label className="custom-control-label" for="s1">Course name only</label>
                </div>
                <div className="custom-control custom-radio">
                    <input type="radio" id="s2" name="customRadio" className="custom-control-input" value="1" onChange={search}/>
                    <label className="custom-control-label" for="s2">Name and description</label>
                </div>
            </div>
            <hr />
            <div>
                <h5>Department</h5>
                    Only include:
                    <input type="text" className="form-control form-control-sm" id="dept_include" onChange={deptinclude}
                    placeholder="Example: COMP, MATH, PHYS" />
                    <small>Search might take a long time if this is field is empty. Will go through all courses.</small><br/>
                    Do not include:
                    <input type="text" className="form-control form-control-sm" id="dept_exclude" onChange={deptexclude}
                    placeholder="Example: ENGL, HIST" />
                {/* <small>Comma separated list. Incorrect name will be ignored. Upper/lower case does not matter.</small> */}
                <small>Type a comma separated list.</small>
            </div>
            <hr />

            <div>
                <h5>Gen Ed</h5>
                <input type="text" className="form-control form-control-sm" id="gened" onChange={gened}
                    placeholder="Example: HS, NA, US" />
                <small>Type a comma separated list. If empty, defaulted to all Gen Eds.</small>
            </div>
            <hr />
            <div>
                <h5>Course Number Range</h5>
                <form className="form-inline">
                    <input type="text" style={{ width: "75px" }} className="form-control form-control-sm" id="nmin"
                        placeholder="min" onChange={coursenum_min} />
                        &nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
                        <input type="text" style={{ width: "75px" }} className="form-control form-control-sm" id="nmax"
                        placeholder="max" onChange={coursenum_max} />
                </form>
                {/* <small>hi</small> */}
            </div>
            <hr />
            <div>
                <h5>Credit Hours Range</h5>
                <form className="form-inline">
                    <input type="text" style={{ width: "75px" }} className="form-control form-control-sm" id="crmin"
                        placeholder="min" onChange={credit_min} />
                        &nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
                        <input type="text" style={{ width: "75px" }} className="form-control form-control-sm" id="crmax"
                        placeholder="max" onChange={credit_max} />
                </form>
                {/* <small>hi</small> */}
            </div>
            <hr />
        </div>

    );

}

export default Filter;

