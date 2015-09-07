Template.lessonItem.helpers({
  'admin': function() {
    return Meteor.user().username == 'Supervisor';
  }
});

Template.lessonItem.events({
  'click .lesson-remove': function(e,t) {
    e.preventDefault();
    if (confirm("Удалить этот урок?")) {
      var currentLessonId = this._id;
      Homeworks.remove(currentLessonId);
    }
  }
});
