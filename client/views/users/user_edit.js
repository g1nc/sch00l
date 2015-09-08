Template.userEdit.helpers({
  parent: function() {
    return Session.get('parentPupilId') == this._id;
  },
  pupils: function() {
    return Pupils.find();
  }
});

Template.userEdit.events({
  'submit form': function(e,t) {
    e.preventDefault();
    var user = {
      _id: this._id,
      username: t.find('#username').value,
      password: t.find('#password').value,
      pupilId: t.find('#pupil').value
    }
    Meteor.users.update({_id:this._id}, {$set: {
        username: user.username,
        profile: {pupilId: user.pupilId}
      }
    });
    Meteor.call('userUpdate', user, function(error){
      if (error)
        Materialize.toast(error, 4000);
      else
        Materialize.toast('Пользователь обновлен', 4000);
    });
    Router.go('usersList');
  }
});

Template.userEdit.onRendered(function() {
  $('select').material_select();
  $('.select-wrapper').css('padding-left', '3rem');
});
