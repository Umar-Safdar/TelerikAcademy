// Generated by CoffeeScript 1.4.0
(function() {

  console.log('DEMO');

  (function() {
    var klass, person, school, student, teacher;
    person = new Person('Pesho', 'Ivanov', 20);
    console.log(person.toString());
    student = new Student('Svetlin', 'Nakov', 30, 8);
    console.log(student.toString());
    teacher = new Teacher('Nikolay', 'Kostov', 20, 'Software');
    console.log(teacher.toString());
    school = new School('Telerik Academy', 'Sofia', 1000);
    console.log(school);
    klass = new Class('8a', teacher, 25);
    return console.log(klass);
  })();

  console.log('DEMO');

  (function() {
    var classes, i, schools, student, students, teacher, _i, _j, _len, _ref;
    teacher = new Teacher('Nikolay', 'Kostov', 20, 'Software');
    students = (function() {
      var _i, _results;
      _results = [];
      for (i = _i = 1; _i <= 40; i = ++_i) {
        _results.push(new Student("Student - " + i, "Ivanov", _.random(1, 100)));
      }
      return _results;
    })();
    classes = (function() {
      var _i, _len, _ref, _results;
      _ref = ['JS I', 'JS II', 'SEO', 'S&D'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        i = _ref[_i];
        _results.push(new Class(i, teacher, _.random(20, 30)));
      }
      return _results;
    })();
    for (i = _i = 0; _i < 4; i = ++_i) {
      _ref = students.slice(i * 10, (i + 1) * 10);
      for (_j = 0, _len = _ref.length; _j < _len; _j++) {
        student = _ref[_j];
        classes[i].addStudent(student);
      }
    }
    schools = [new School('PMG', 'Burgas', 100), new School('TUES', 'Sofia', 200), new School('Telerik Academy', 'Sofia', 500)];
    schools[0].addClass(classes[0], classes[1]);
    schools[1].addClass(classes[2]);
    schools[1].addClass(classes[3]);
    return console.log(schools);
  })();

}).call(this);
