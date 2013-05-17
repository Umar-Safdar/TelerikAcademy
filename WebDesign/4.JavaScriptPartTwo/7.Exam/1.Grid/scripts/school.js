// Generated by CoffeeScript 1.4.0
(function() {
  'use strict';

  var Course, School, Student, schoolRepository, _ref;

  if ((_ref = this.studentNS) == null) {
    this.studentNS = {};
  }

  Student = (function() {

    function Student(firstName, lastName, grade) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.grade = grade;
      this.marks = {};
    }

    Student.prototype.addMark = function(course, mark) {
      return this.marks[course.title] = mark;
    };

    Student.prototype.getMark = function(course) {
      return this.marks[course.title];
    };

    Student.deserialize = function(studentData) {
      var student;
      student = new Student(studentData.firstName, studentData.lastName, parseInt(studentData.grade, 10));
      student.marks = studentData.marks;
      return student;
    };

    return Student;

  })();

  Course = (function() {

    function Course(title, startDate) {
      this.title = title;
      this.startDate = startDate;
      this.numberOfStudents = 0;
      this.students = [];
    }

    Course.prototype.addStudents = function(students) {
      var student, _i, _len, _results;
      this.numberOfStudents += students.length;
      _results = [];
      for (_i = 0, _len = students.length; _i < _len; _i++) {
        student = students[_i];
        _results.push(this.students.push(student));
      }
      return _results;
    };

    Course.deserialize = function(courseData) {
      var course;
      course = new Course(courseData.title, new Date(courseData.startDate));
      course.addStudents(courseData.students.map(function(student) {
        return Student.deserialize(student);
      }));
      return course;
    };

    return Course;

  })();

  School = (function() {

    function School(name, location, specialty) {
      this.name = name;
      this.location = location;
      this.specialty = specialty;
      this.numberOfCourses = 0;
      this.courses = [];
    }

    School.prototype.addCourse = function(courses) {
      var course, _i, _len, _results;
      this.numberOfCourses += courses.length;
      _results = [];
      for (_i = 0, _len = courses.length; _i < _len; _i++) {
        course = courses[_i];
        _results.push(this.courses.push(course));
      }
      return _results;
    };

    School.deserialize = function(schoolData) {
      var school;
      school = new School(schoolData.name, schoolData.location, schoolData.specialty);
      school.addCourse(schoolData.courses.map(function(course) {
        return Course.deserialize(course);
      }));
      return school;
    };

    return School;

  })();

  schoolRepository = (function() {
    return {
      save: function(id, schoolsData) {
        return window.localStorage[id] = JSON.stringify(schoolsData);
      },
      load: function(id) {
        var schoolData, _i, _len, _ref1, _results;
        _ref1 = JSON.parse(window.localStorage[id]);
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          schoolData = _ref1[_i];
          _results.push(School.deserialize(schoolData));
        }
        return _results;
      }
    };
  })();

  this.schoolNS = {
    Student: Student,
    Course: Course,
    School: School,
    schoolRepository: schoolRepository
  };

}).call(this);
