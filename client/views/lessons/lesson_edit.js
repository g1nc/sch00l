Template.lessonEdit.events({
  'submit form': function(e,t) {
    e.preventDefault();
    var currentLessonId = this._id;
    var lessonProperties = {name: $(e.target).find('#name').val()};
    Lessons.update(currentLessonId, {$set: lessonProperties}, function(error) {
      if (error)
        return Materialize.toast(error.reason, 4000);
      else
        Router.go('lessonsList');
    });
  }
});
