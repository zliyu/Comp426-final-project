import React, { useState, useEffect } from "react";
import ReactWordcloud from 'react-wordcloud';
import axios from 'axios';

const data = [
  { text: 'Hey', value: 1000 },
  { text: 'lol', value: 200 },
  { text: 'lol', value: 200 },
  { text: 'lol', value: 200 },
  { text: 'lol', value: 200 },
  { text: 'lol', value: 200 },
  { text: 'lol', value: 200 },
  { text: 'Hey', value: 1000 },
  { text: 'lol', value: 200 },
  { text: 'lol', value: 200 },
  { text: 'lol', value: 200 },
  { text: 'lol', value: 200 },
  { text: 'lol', value: 200 },
  { text: 'lol', value: 200 },
  { text: 'Hey', value: 1000 },
  { text: 'lol', value: 200 },
  { text: 'lol', value: 200 },
  { text: 'lol', value: 200 },
  { text: 'lol', value: 200 },
  { text: 'lol', value: 200 },
  { text: 'lol', value: 200 },
  { text: 'Hey', value: 1000 },
  { text: 'lol', value: 200 },
  { text: 'lol', value: 200 },
  { text: 'lol', value: 200 },
  { text: 'lol', value: 200 },
  { text: 'lol', value: 200 },
  { text: 'lol', value: 200 },
  { text: 'first impression', value: 800 },
  { text: 'very cool', value: 100 },
  { text: 'duck', value: 10 },
];

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

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const results = courses.filter(course =>
      course.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  const displayCloud = () => {
    let length = searchResults.length;
    let names = searchResults.map((r, i) => {
      let t = r.split(' ')[0].slice(0, 4) + r.split('. ')[0].slice(4, r.length - 1);
      let v = 0;
      if (i / length == 0) {
        v = 1000;
      } else if (i / length <= 0.3) {
        v = 600;
      } else if (i / length <= 0.5) {
        v = 400;
      } else if (i / length <= 0.8) {
        v = 300;
      } else {
        v = 200;
      }
      console.log("i", i / length);
      return { text: t, value: v };
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
    fontSizes: [15, 80],
    colors: ['#581845', '#900C3F', '#C70039', '#FF5733 ', '#FFC300 '],
    spiral:'archimedean',
    enableTooltip: false
  };
  const size = [1150, 600];

  return (
    <div
    >   <div class="container d-flex justify-content-center mt-3 mb-4">
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