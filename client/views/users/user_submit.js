Template.userSubmit.helpers({
  pupils: function() {
    return Pupils.find({}, {sort: {name: 1}});
  }
});

Template.userSubmit.events({
  'submit form': function(e,t) {
    e.preventDefault();
    var user = {
      username: $(e.target).find("#username").val(),
      password: $(e.target).find("#password").val(),
      profile: {
        pupilId: $(e.target).find("#pupil").val()
      }
    }
    Meteor.call('userInsert', user, function(error, result) {
      if (error)
        console.log(error);
      else {
        Materialize.toast('Пользователь добавлен', 4000);
        $(e.target).find("#username").val('');
        $(e.target).find("#password").val('');
      }
    });
  }
});

Template.userSubmit.onRendered(function() {
  $('select').material_select();
  $('.select-wrapper').css('padding-left', '3rem');
});
