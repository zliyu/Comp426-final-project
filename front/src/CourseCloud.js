import React from 'react';
import ReactWordcloud from 'react-wordcloud';

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
  const callbacks = {
    // getWordColor: word => word.value > 50 ? "blue" : "red",
    onWordClick: console.log,
    onWordMouseOver: console.log,
    getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
  }
  const options = {
    rotations: 0,
    fontWeight: "bold",
    fontSizes: [40, 200],
    colors: ['#42b6f5', '#3884d6', '#66d119', '#9bcca4', '#DDFF87', '#edaf11', '#de7402', '#f0340e', '#9c1e05', '#be63cf']
  };
  const size = [1500, 400];


  return (
    <div>
      <ReactWordcloud
        callbacks={callbacks}
        options={options}
        size={size}
        words={data}
      />
    </div>
  );
}

// render = () => {
//   return (
//     <div>
//       <this.MyWordcloud />
//     </div>
//   )
// }
CourseCloud();

export default CourseCloud;