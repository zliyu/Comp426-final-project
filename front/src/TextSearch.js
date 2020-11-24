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
  const [filter, setFilter] = React.useState({
    sort: 0, // sort result by type 0-5
    num_min: 0, // max course number allowed (inclusive)
    num_max: 700, // max course number allowed (inclusive)
    cr_min: 0, // min credit hour allowed (inclusive)
    cr_max: 4, // max credit hour allowed (inclusive)
    dept_y: "", // list of departments can appear in the result;
    description: "",
    dept_n: [], // list of departments not allowed in the result;
    ge: [], // list of gen ed the user is interested in;
  });



  const Filter = (filter) => {
    let results = [];
    for (let i = 0; i < courses.length; i++) {

      let dept_y = filter.dept_y.split(",").trim();
      for (let i = 0; i < dept_y.length; i++) { //Search for dept_y
        let dept = dept_y[i].split(" ")[0];
        if (courses[i].name.split(" ")[0].toLowerCase().includes(dept.toLowerCase()) && !results.includes(courses[i])) {
          results.push(courses[i]);
        }
      }

      let dept_n = filter.dept_n.split(",").trim();
      for (let i = 0; i < dept_n.length; i++) { // Search for dept_n
        let dept = dept_n[i].split(" ")[0];
        if (courses[i].name.split(" ")[0].toLowerCase().includes(dept.toLowerCase()) && !results.includes(courses[i])) {
          results.push(courses[i]);
        }
      }

      let num_min = filter.num_min;
      if (parseInt(courses[i].name.split(" ")[1]) >= parseInt(num_min) && !results.includes(courses[i])) {
        results.push(courses[i]);
      }

      let num_max = filter.num_max;
      if (parseInt(courses[i].name.split(" ")[1]) <= parseInt(num_max) && !results.includes(courses[i])) {
        results.push(courses[i]);
      }
      let ge_search = filter.ge.split(",").trim();
      for (let i = 0; i < ge_search.length; i++) {
        for (let j = 0; j < courses[i].ge.length; j++) {
          if (ge_search[i].toLowerCase() == courses[i].ge.length.toLowerCase() & !results.includes(courses[i])) {
            results.push(courses[i]);
          }
        }
      }
    }

    useEffect(() => {
      getBlogPost();
    }, []);

    const getBlogPost = () => {
      axios.get('/courses')
        .then((res) => {
          console.log('you are here')
          const data = res.data;
          setCourses(data)
          let names = [];
          // data.forEach(course => {
          //   names.push(course.split('. ')[0]);
          // });
          setCourseNames(names);
          // console.log('Data has been received');
        })
        .catch(() => {
          alert('Error retrieving data!!!');
        })
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
      let results = [];
      for (let i = 0; i < courses.length; i++) {
        if (courses[i].name.toLowerCase().includes(searchTerm.toLowerCase()) && !results.includes(courses[i])) {
          results.push(courses[i]);
        }
      }
      for (let i = 0; i < courses.length; i++) {
        if (courses[i].title.toLowerCase().includes(searchTerm.toLowerCase()) && !results.includes(courses[i])) {
          results.push(courses[i]);
        }
      }
      for (let i = 0; i < courses.length; i++) {
        if (courses[i].credits.toLowerCase().includes(searchTerm.toLowerCase()) && !results.includes(courses[i])) {
          results.push(courses[i]);
        }
      }
      for (let i = 0; i < courses.length; i++) {
        if (courses[i].ge.join(', ').toLowerCase().includes(searchTerm.toLowerCase()) && !results.includes(courses[i])) {
          results.push(courses[i]);
        }
      }
      for (let i = 0; i < courses.length; i++) {
        if (courses[i].introduction.toLowerCase().includes(searchTerm.toLowerCase()) && !results.includes(courses[i])) {
          results.push(courses[i]);
        }
      }
      for (let i = 0; i < courses.length; i++) {
        if (courses[i].requisites.toLowerCase().includes(searchTerm.toLowerCase()) && !results.includes(courses[i])) {
          results.push(courses[i]);
        }
      }
      // || course.grading.toLowerCase().includes(searchTerm.toLowerCase())
      setSearchResults(results);
    }, [searchTerm]);


    const makeCard = (course, index) => {
      return (
        <div key={index} class='container border border-left-0 border-right-0 border-bottom-0 border-dark mb-0 mt-10 pt-3' >
          <span><h5>{course.name} {course.title}</h5></span>
          <span><span class='font-weight-bold'>Course Introduction: </span>{course.introduction}</span>
          <br />
          <span ><span class='font-weight-bold'>Credits: </span><span>{course.credits}</span><br /></span>
          {course.requisites !== 's' &&
            <span ><span class='font-weight-bold'>Requisites: </span><span>{course.requisites}</span><br /></span>
          }
          {course.ge[0] !== 's' &&
            <span><span class='font-weight-bold'>GE: </span><span>{course.ge}</span><br /></span>
          }
          {course.grading !== 's' &&
            <span><span class='font-weight-bold'>Grading Status: </span><span>{course.grading}</span></span>
          }
          <hr />
        </div>
      )
    }

    const displayCourses = (searches) => {
      if (!searches.length) {
        return 426;
      } else {
        if (searches.length > 100) {
          searches = searches.slice(0, 100);
        }
        return searches.map((course, index) => (
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

