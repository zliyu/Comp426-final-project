import React, { Component } from "react";
// import { Route, NavLink, HashRouter } from "react-router-dom";
import PropTypes from "prop-types";
// import TextSearch from "../../TextSearch";
// import CourseCloud from "../../CourseCloud";
import { connect } from "mongoose";
import { logoutUser } from "../../actions/authActions";

class Home extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

    render() {
      return (
        <div>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
              {/* <NavLink to="/" className="navbar-brand">Home</NavLink> */}
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav mr-auto">
                      <li className="nav-item">
                          {/* <NavLink className="nav-link" to="/textSearch">Search by Text</NavLink> */}
                      </li>
                      <li className="nav-item">
                          {/* <NavLink className="nav-link" to='/courseCloud'>Course Cloud</NavLink> */}
                      </li>
                  </ul>
              </div>
          </nav>


          <div className="content">
              {/* <Route exact path="/" component={Home} /> */}
              {/* <Route path="/textSearch" component={TextSearch} /> */}
              {/* <Route path="/courseCloud" component={CourseCloud} /> */}
          </div>
      </div>
    );
  }
}

Home.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

// export default connect(
//   mapStateToProps,
//   { logoutUser }
// ) (Home);