Template.pupilPage.helpers({
  lessons: function() {
    return Lessons.find();
  },
  grades: function() {
    return Grades.find({pupilId: this._id}, {sort: {date: 1}})
  },
  admin: function() {
    return Meteor.user() && Meteor.user().username == 'Supervisor';
  },
  lessonGrades: function() {
    return Grades.find({lessonId: this._id}, {sort: {date: 1}, limit : 20})
  }
});
