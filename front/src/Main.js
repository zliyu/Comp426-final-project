import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home"
import TextSearch from "./TextSearch";
import SpeechSearch from "./SpeechSearch";
import CourseCloud from "./CourseCloud";
import SignIn from "./SignIn"
import Register from "./Register"

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    {/* <div className='container pt-3' style={{ height: '60px' }}>
                        <h1 className='text-center font-weight-bold display-4'>UNC Course Search</h1>
                    </div>
                    <hr /> */}
                    {/* <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/textSearch">Search by Text</NavLink></li>
                        <li><NavLink to='/speechSearch'>Search by Speech</NavLink></li>
                        <li><NavLink to='/courseCloud'>Course Cloud</NavLink></li>
                        <li><NavLink to='/signin'>Sign In</NavLink></li>
                        <li><NavLink to='/register'>Register</NavLink></li>
                    </ul> */}
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <NavLink to="/" className="navbar-brand">Home</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/textSearch">Search by Text</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/courseCloud'>Course Cloud</NavLink>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/signin'>Sign In</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/register'>Register</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>


                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/textSearch" component={TextSearch} />
                        {/* <Route path="/speechSearch" component={SpeechSearch}></Route> */}
                        <Route path="/courseCloud" component={CourseCloud} />
                        <Route path="/signin" component={SignIn} />
                        <Route path="/register" component={Register} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

function Header() {
    return (
        <div className='container mb-3'>
            <div className='page-header'>
                <h1>Your Course Recommendations</h1>
            </div>
        </div>
    )
}

export default Main;