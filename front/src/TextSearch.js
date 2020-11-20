import React, { useState, useEffect } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import SearchBox from "./SearchBox";
import axios from 'axios';
import ReactWordcloud from 'react-wordcloud';
// import CourseCloud from './CourseCloud';

// class TextSearch extends React.Component {
const TextSearch = () => {

  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [courses, setCourses] = React.useState([]);
  const [courseNames, setCourseNames] = React.useState([]);

  useEffect(() => {
    getBlogPost();
  }, []);

  const getBlogPost = () => {
    axios.get('/courses')
      .then((res) => {
        const data = res.data;
        setCourses(data)
        let names = [];
        data.forEach(course => {
          names.push(course.split('. ')[0]);
        });
        setCourseNames(names);
        // console.log('Data has been received');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      })
  }

  const Filter = () => {
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

  const Header = () => {
    return (
      <div class='container mb-3'>
        <div class='page-header'>
          <h1>Your Course Recommendations</h1>
        </div>
      </div>
    )
  }

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const results = courses.filter(course =>
      course.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  const makeCard = (course, index) => {
    let name = course.split(' ')[0].slice(0, 4) + course.split(' ')[0].slice(4, course.length - 1);
    let title = course.split('. ')[1];
    let credit = course.split('. ')[2];
    let intro = course.split('Gen Ed: ')[0].split('Requisites: Prerequisite, ')[0];
    let requisites = '';
    if (course.trim().split('Requisites: Prerequisite, ')[1] != undefined) {
      requisites = course.trim().split('Requisites: Prerequisite, ')[1].split('Gen Ed: ')[0];
    }
    let ge = '';
    let grading = '';
    if (course.trim().split('Gen Ed: ')[1] != undefined) {
      // courses[index]['introduction'] = course.trim().split('Gen Ed: ')[0];
      ge = course.trim().split('Gen Ed: ')[1].split('Grading status: ')[0].split(',');
      grading = course.trim().split('Gen Ed: ')[1].split('Grading status: ')[1].split('.')[0];
    } else {
      intro = course.trim().split('Grading status:')[0];
      grading = course.trim().split('Grading status: ')[1];
    }
    return (
      <div key={index} class='container border border-left-0 border-right-0 border-bottom-0 border-dark mb-0 mt-10 pt-3' >
        <span><h5>{name} {title}</h5></span>
        <span><span class='font-weight-bold'>Course Introduction: </span>{intro}</span>
        <br />
        <span ><span class='font-weight-bold'>Credits: </span><span>{credit}</span><br /></span>
        {requisites !== '' &&
          <span ><span class='font-weight-bold'>Requisites: </span><span>{requisites}</span><br /></span>
        }
        {ge !== '' &&
          <span><span class='font-weight-bold'>GE: </span><span>{ge}</span><br /></span>
        }
        {grading !== '' &&
          <span><span class='font-weight-bold'>Grading Status: </span><span>{grading}</span></span>
        }
        <hr />
      </div>
    )
  }

  const displayCourses = (courses) => {
    if (!courses.length) {
      return 426;
    } else {
      return courses.map((course, index) => (
        makeCard(course, index)
      ));
    }
  }

  return (
    <div>
      <div class="container d-flex justify-content-center mt-3 mb-4">
        <input type="text" class="col-lg-7"
          placeholder="Search class"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <div class='row container-fluid'>

        {/* <div class='container col-lg-1'>
            <this.Filter />
          </div> */}
        <div class='container col-lg-7'>

          {Header}
          {displayCourses(searchResults)}



        </div>
      </div>
      <div>
      </div>
    </div>
  );
}

export default TextSearch;

