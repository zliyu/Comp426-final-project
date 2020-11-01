import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

const courses = [
  {
    name: 'COMP426',
    intro: 'Modern Web Programming',
    pre: 'COMP410',
    ge: 'No GE',
    url: '#'
  },
  {
    name: 'COMP562',
    intro: 'Intro to Machine Learning',
    ge: 'No GE',
    url: '#'
  }
]

function SpeechSearch() {
  return (
    <HashRouter>
      <div>
        <i className="fa fa-microphone"></i>
        <div class='row container-fluid'>
          <div class='container col-lg-1'>
            <Filter />
          </div>
          <div class='container col-lg-7'>
            <Header />
            <CourseList />
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

function Filter() {
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

function Header() {
  return (
    <div class='container mb-3'>
      <div class='page-header'>
        <h1>Your Course Recommendations</h1>
      </div>
    </div>
  )
}

function CourseList() {
  return courses.map(function (course) {
    return (
      <div class='container border border-left-0 border-right-0 border-bottom-0 border-dark mb-0 mt-10 pt-3' >
        <span>
          <a href={course.url}><h4>{course.name}</h4></a>
        </span>
        <span>Course Introduction: {course.intro}</span>
        <br />
        <span>Prerequisites: {course.pre}</span>
        <br />
        <span>GE: {course.ge}</span>
        <hr />
      </div>
    );
  });
}

export default SpeechSearch;