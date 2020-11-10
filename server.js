const express = require('express');
const app = express();
const port = 3001;
const request = require('request');
const cheerio = require("cheerio");

app.get('/courses', (req, res) =>

    request("https://catalog.unc.edu/courses/comp/", function (error, response, body) {
        if (error) {
            res.send(response.statusCode);
        }
        var courses = [];
        var $ = cheerio.load(body);
        $('#sc_sccoursedescs > div').each(function (index, element) {
            courses[index] = {};
            let course_title = $(element).find('p.courseblocktitle').text().trim();
            courses[index]['course'] = course_title.split('. ')[0];
            courses[index]['title'] = course_title.split('.  ')[1];
            courses[index]['credits'] = course_title.split('.  ')[2];
            // courses[index]['description'] = $(element).find('p.courseblockdesc').text().trim().split('Gen Ed: ')[0];
            if ($(element).find('p.courseblockdesc').text().trim().split('Gen Ed: ')[1] != undefined) {
                courses[index]['GE'] = $(element).find('p.courseblockdesc').text().trim().split('Gen Ed: ')[1].split('.Grading status: ')[0];
                courses[index]['grading'] = $(element).find('p.courseblockdesc').text().trim().split('Gen Ed: ')[1].split('.Grading status: ')[1].split('.')[0];
            }
        });

        res.json(courses);
    })

)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))