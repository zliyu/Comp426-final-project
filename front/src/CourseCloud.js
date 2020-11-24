import React, { useState, useEffect } from "react";
import ReactWordcloud from 'react-wordcloud';
import axios from 'axios';

const CourseCloud = () => {

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
        setCourseNames(names);
        // console.log('Data has been received');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      })
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

  const displayCloud = () => {
    let results = []
    if (searchResults.length > 100) {
      results = [...searchResults.slice(0, 100)];
    } else {
      results = [...searchResults];
    }
    let length = results.length;
    console.log(length);
    let names = results.map((r, i) => {
      let v = 0;
      if (i / length == 0) {
        v = 1000;
      } else if (i / length <= 0.3) {
        v = 200;
      } else if (i / length <= 0.5) {
        v = 150;
      } else if (i / length <= 0.8) {
        v = 100;
      } else {
        v = 50;
      }
      console.log("i", i / length);
      return { text: r.name, value: v };
    });
    return (
      <div>
        <ReactWordcloud
          callbacks={callbacks}
          options={options}
          size={size}
          words={names}
        />
      </div>
    )
  }

  const callbacks = {
    // onWordClick: console.log,
    // onWordMouseOver: console.log,
    // getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
  }
  const options = {
    rotations: 0,
    fontWeight: "bold",
    fontSizes: [15, 110],
    colors: ['#581845', '#900C3F', '#C70039', '#FF5733 ', '#FFC300 '],
    spiral: 'archimedean',
    enableTooltip: false
  };
  const size = [1150, 600];

  return (
    <div>
      <h2 class='text-center pt-3 font-weight-bold'>Course Cloud</h2>
      <div class="container d-flex justify-content-center mt-3 mb-4">
        <input type="text" class="col-lg-7"
          placeholder="Search class"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <div class="container justify-content-center">
        {displayCloud(searchResults)}
      </div>
    </div>
  )
}
export default CourseCloud;