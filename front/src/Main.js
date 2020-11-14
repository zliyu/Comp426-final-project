import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home"
import TextSearch from "./TextSearch";
import SpeechSearch from "./SpeechSearch";
import CourseCloud from "./CourseCloud";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <div class='container pt-3' style={{ height: '60px' }}>
                        <h1 class='text-center font-weight-bold display-4'>UNC Course Search</h1>
                    </div>
                    <hr />
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/textSearch">Search by Text</NavLink></li>
                        {/* <li><NavLink to='/speechSearch'>Search by Speech</NavLink></li> */}
                        <li><NavLink to='/courseCloud'>Course Cloud</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/textSearch" component={TextSearch} />
                        {/* <Route path="/speechSearch" component={SpeechSearch}></Route> */}
                        <Route path="/courseCloud" component={CourseCloud}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

function Header() {
    return (
        <div class='container mb-3'>
            <div class='page-header'>
                <h1>Your Course Recommendations</h1>
            </div>
        </div>
    )
}

export default Main;