import React from 'react';

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

function App() {
  return (
    <div>
      <div class='container pt-3' style={{height: '60px' }}>
        <h1 class='text-center font-weight-bold display-4'>UNC Course Search</h1>
      </div>
      <hr />
      <div>
        <NavBar />
      </div>
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

function NavBar() {
  return (
    <nav class="navbar navbar-fixed-right navbar-expand-sm bg-dark navbar-dark justify-content-center mb-5 mt-4">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Home</a>
          <div class='navbar-divider'></div>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Search by Text</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Search by Speech</a>
        </li>
      </ul>
    </nav>
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

export default App;
