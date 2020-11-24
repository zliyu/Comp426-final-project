import React, { Component } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";


const Card = (props) => {
    let c = props.course;
    let a = props.inlist;
    if(c.added==undefined){c.added=false};
    const [added, setAdded] = useState(a);
    

    const addtolist = () =>{
        let cl = JSON.parse(localStorage.getItem('courselist'));
        console.log(cl);
        if(cl==null){cl=[];}
        let index = cl.find(elt => elt.name == c.name);
        //if(index<0){cl.push(c);}
        cl.push(c);
        localStorage.setItem('courselist', JSON.stringify(cl));
        setAdded(true);
        c.added = true;
    }

    const removefromlist = () =>{
        let cl = JSON.parse(localStorage.getItem('courselist'));
        console.log(cl);
        if(cl==null){
            setAdded(false);
            c.added = false;
            return;
        }
        //funtion(elt){return elt.name != c.name}
        let cl2 =[];
        console.log(c.name);
        cl = cl.forEach(element => {
            if(element.name != c.name){
                cl2.push(element);
            }
        });
        console.log(cl2);
        localStorage.clear();
        localStorage.setItem('courselist', JSON.stringify(cl2));
        
    }
    return (
        <div className="card">
            <div className="card-body">


                <h5 style={{ display: "inline" }}>
                    <b>{c.name}</b> {c.title}
                    <span style={{ color: "grey" }}> ({c.credits})</span></h5>
                {!added? 
                <button type="button" className="btn btn-success btn-sm" style={{ float: "right" }} onClick={addtolist}>
                    <i className="fas fa-plus-circle"></i><b>&nbsp;Add to list</b>
                </button>:
                <button type="button" className="btn btn-danger btn-sm" style={{ float: "right" }} onClick={removefromlist}>
                    <i class="fas fa-minus-circle"></i><b>&nbsp;Remove from list</b>
                </button>}
                <br /><b>Gen Ed:</b> {c.ge[0] == "s" ? "None" : c.ge}<br />
                <b>Prereqs:</b> {c.requisites == "s" ? "None" : c.requisites}<br />
                <span>{c.introduction}</span>
            </div>

        </div>

    );
}

export default Card;

