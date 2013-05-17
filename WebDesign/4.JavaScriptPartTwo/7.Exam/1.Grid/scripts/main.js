// Generated by CoffeeScript 1.4.0
(function() {
  'use strict';

  var academyRow, schoolsGrid;

  schoolsGrid = controls.GridView('#grid-view-holder');

  schoolsGrid.addHeader('Name', 'Location', 'Total Students', 'Specialty');

  schoolsGrid.addRow('PMG <br />', 'Burgas', 60, 'Math');

  schoolsGrid.addRow('TUES', 'Sofia', 500, 'IT');

  academyRow = schoolsGrid.addRow('Telerik Academy', 'Sofia', 5000, 'IT');

  (function() {
    var academyGrid, sliceAndDiceRow;
    academyGrid = academyRow.getNestedGrid();
    academyGrid.addHeader('Title', 'Start Date', 'Total Students');
    academyGrid.addRow('JS 2', '11-april-2013', 400);
    academyGrid.addRow('SEO', '15-may-2013', 400);
    sliceAndDiceRow = academyGrid.addRow('Slice and Dice', '05-april-2013', 500);
    return (function() {
      var sliceAndDiceGrid;
      sliceAndDiceGrid = sliceAndDiceRow.getNestedGrid();
      sliceAndDiceGrid.addHeader('HTML', 'CSS');
      sliceAndDiceGrid.addRow('HTML 4', 'CSS 2');
      return sliceAndDiceGrid.addRow('HTML 5', 'CSS 3');
    })();
  })();

  schoolsGrid.render();

  (function() {
    var course, courses, i, schools, schoolsData, student, students, _i, _j, _len, _len1, _ref;
    students = (function() {
      var _i, _results;
      _results = [];
      for (i = _i = 1; _i <= 40; i = ++_i) {
        _results.push(new schoolNS.Student("Student - " + i, "Ivanov", J.random(1, 100)));
      }
      return _results;
    })();
    courses = (function() {
      var _i, _len, _ref, _results;
      _ref = ['JS 2', 'SEO', 'S&D', 'C#'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        i = _ref[_i];
        _results.push(new schoolNS.Course(i, new Date));
      }
      return _results;
    })();
    courses[0].addStudents(students.slice(0, 10));
    courses[1].addStudents(students.slice(10, 20));
    courses[2].addStudents(students.slice(20, 30));
    courses[3].addStudents(students.slice(30, 40));
    for (_i = 0, _len = courses.length; _i < _len; _i++) {
      course = courses[_i];
      _ref = course.students;
      for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
        student = _ref[_j];
        student.addMark(course, J.random(0, 100));
      }
    }
    schools = [new schoolNS.School('PMG', 'Burgas', 'Mathematics'), new schoolNS.School('TUES', 'Sofia', 'IT'), new schoolNS.School('Telerik Academy', 'Sofia', 'IT')];
    schools[0].addCourse(courses.slice(0, 2));
    schools[1].addCourse([courses[2]]);
    schools[2].addCourse([courses[3]]);
    setTimeout(function() {
      console.log("Task 4: Save to localStorage from data");
      return schoolNS.schoolRepository.save('schools-repository', schools);
    }, 1000);
    schoolsData = null;
    setTimeout(function() {
      console.log("Task 4: Load from localStorage and build new grid");
      schoolsData = schoolNS.schoolRepository.load('schools-repository');
      return console.log(schoolsData);
    }, 2000);
    setTimeout(function() {
      console.log("Task 6: Build schools grid from data");
      schoolsGrid = controls.buildSchoolsGridView('#schools-grid', schoolsData);
      return schoolsGrid.render();
    }, 3000);
    return setTimeout(function() {
      console.log("Task 5: Get the data from the new grid");
      return console.log(controls.getSchoolsGridViewData(schoolsGrid));
    }, 4000);
  })();

}).call(this);
