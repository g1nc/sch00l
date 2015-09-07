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
      pupilId: $(e.target).find("#pupil").val()
    }
    Accounts.createUser(user,function(err){
      console.log(err);
    });
  }
});

Template.userSubmit.onRendered(function() {
  $('select').material_select();
  $('.select-wrapper').css('padding-left', '3rem');
});
