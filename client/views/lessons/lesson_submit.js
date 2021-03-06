Template.lessonSubmit.events({
  'submit form': function(e,t) {
    e.preventDefault();
    var $name = $(e.target).find('#name');
    var lesson = { name: $name.val() };
    Meteor.call('lessonInsert', lesson, function(error, result) {
      if (error)
        return Materialize.toast(error.reason, 4000);
      if (result.lessonExists){
        Materialize.toast('Урок с таким названием уже добавлен', 4000);
        $name.val('');
      } else {
        Materialize.toast('Урок добавлен', 4000);
        $name.val('');
      }
      Router.go('lessonSubmit');
    });
  }
});
