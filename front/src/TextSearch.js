import React, { useState, useEffect } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import SearchBox from "./SearchBox";
import axios from 'axios';

class TextSearch extends React.Component {
  state = {
    courses: [],
    courseNames: []
  };

  componentDidMount = () => {
    this.getBlogPost();
  }

  getBlogPost = () => {
    axios.get('/courses')
      .then((res) => {
        const data = res.data;
        this.setState({ courses: data });
        let names = [];
        data.forEach(course => {
          names.push(course.name);
        });
        this.setState({ courseNames: names });
        console.log('Data has been received');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      })
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }



  Filter = () => {
    return (
      <div>
        <select class="mdb-select md-form border border-buttom-0" style={{ width: '350px', height: '60px' }}>
          <option value="" disabled selected>Semester</option>
        </select>
        <select class="mdb-select md-form border border-buttom-0" style={{ width: '350px', height: '60px' }}>
          <option value="" disabled selected>Major</option>
        </select>
        <select class="mdb-select md-form border border-buttom-0" style={{ width: '350px', height: '60px' }}>
          <option value="" disabled selected>Subject</option>
        </select>
        <select class="mdb-select md-form border border-buttom-0" style={{ width: '350px', height: '60px' }}>
          <option value="" disabled selected>GE</option>
        </select>
        <select class="mdb-select md-form border border-buttom-0" style={{ width: '350px', height: '60px' }}>
          <option value="" disabled selected>Credit Hours</option>
        </select>
        <select class="mdb-select md-form border border-buttom-0" style={{ width: '350px', height: '60px' }}>
          <option value="" disabled selected>Honors or Non-Honors</option>
        </select>
        <select class="mdb-select md-form border border-buttom-0" style={{ width: '350px', height: '60px' }}>
          <option value="" disabled selected>Professor Rate</option>
        </select>
      </div>
    )
  }

  Header = () => {
    return (
      <div class='container mb-3'>
        <div class='page-header'>
          <h1>Your Course Recommendations</h1>
        </div>
      </div>
    )
  }

  displayCourses = (courses) => {
    if (!courses.length) {
      return 426;
    } else {
      return courses.map((course, index) => (
        <div key={index} class='container border border-left-0 border-right-0 border-bottom-0 border-dark mb-0 mt-10 pt-3' >
          <span><h5>{course.name} {course.title}</h5></span>
          <span>Course Introduction: {course.introduction}</span>
          <br />
          {course.requisites !== '' &&
            <span ><span class='font-weight-bold'>Requisites: </span><span>{course.requisites}</span><br /></span>
          }
          {course.ge !== '' &&
            <span><span class='font-weight-bold'>GE: </span><span>{course.ge}</span><br /></span>
          }
          {course.grading !== '' &&
            <span><span class='font-weight-bold'>Grading Status: </span><span>{course.grading}</span></span>
          }
          <hr />
        </div>
      ));
    }
  }

  render = () => {
    console.log('State', this.state);
    return (
      <div>
        <div>
        </div>
        <div class='row container-fluid'>
          {/* <div class='container col-lg-1'>
            <this.Filter />
          </div> */}
          <div class='container col-lg-7'>
            {this.Header}
            {this.displayCourses(this.state.courses)}
          </div>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default TextSearch;
