Meteor.publish('days', function() {
  return Days.find();
});

Meteor.publish('lessons', function() {
  return Lessons.find();
});

Meteor.publish('homeworks', function() {
  return Homeworks.find();
});

Meteor.publish('pupils', function() {
  return Pupils.find();
});

Meteor.publish('grades', function() {
  return Grades.find();
});
