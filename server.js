const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 8080;
const request = require('request');
const cheerio = require("cheerio");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const courseTags = ['clas', 'comp'];

app.get('/courses', (req, res) =>

    request(`https://catalog.unc.edu/courses/comp/`, function (error, response, body) {
        if (error) {
            res.send(response.statusCode);
        }
        var courses = [];
        var $ = cheerio.load(body);
        $('#sc_sccoursedescs > div').each(function (index, element) {
            courses[index] = {};
            let course_title = $(element).find('p.courseblocktitle').text().trim();
            courses[index]['name'] = course_title.split('. ')[0];
            courses[index]['title'] = course_title.split('.  ')[1];
            courses[index]['credits'] = course_title.split('.  ')[2];
            courses[index]['introduction'] = $(element).find('p.courseblockdesc').text().trim().split('Gen Ed: ')[0].split('Requisites: Prerequisite, ')[0];
            if ($(element).find('p.courseblockdesc').text().trim().split('Requisites: Prerequisite, ')[1] != undefined) {
                courses[index]['requisites'] = $(element).find('p.courseblockdesc').text().trim().split('Requisites: Prerequisite, ')[1].split('Gen Ed: ')[0];
            } else {
                courses[index]['requisites'] = '';
            }
            if ($(element).find('p.courseblockdesc').text().trim().split('Gen Ed: ')[1] != undefined) {
                // courses[index]['introduction'] = $(element).find('p.courseblockdesc').text().trim().split('Gen Ed: ')[0];
                courses[index]['ge'] = $(element).find('p.courseblockdesc').text().trim().split('Gen Ed: ')[1].split('Grading status: ')[0].split(',');
                courses[index]['grading'] = $(element).find('p.courseblockdesc').text().trim().split('Gen Ed: ')[1].split('Grading status: ')[1].split('.')[0];
            } else {
                courses[index]['introduction'] = $(element).find('p.courseblockdesc').text().trim().split('Grading status:')[0];
                courses[index]['ge'] = '';
                courses[index]['grading'] = $(element).find('p.courseblockdesc').text().trim().split('Grading status: ')[1];
            }
        });

        res.json(courses);
    })

)

app.use(morgan('tiny'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));