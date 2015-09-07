Template.homeworkEdit.helpers({
  lessons: function() {
    return Lessons.find();
  },
  currentLesson: function() {
    return Session.get('currentLessonId') == this._id;
  }
});

Template.homeworkEdit.events({
  'submit #homework-edit': function(e,t) {
    e.preventDefault();
    var currentHomeworkId = this._id,
        homeworkProperties = {
          number: $(e.target).find('#number').val(),
          lessonId: $(e.target).find('#lesson').val(),
          body: $(e.target).find('#body').val()
        };
    Homeworks.update(currentHomeworkId, {$set: homeworkProperties}, function(error) {
      if (error)
        return Materialize.toast(error.reason, 4000);
      else
        Router.go('daysList');
    });
  }
});

Template.homeworkEdit.onRendered(function() {
  $('select').material_select();
});
