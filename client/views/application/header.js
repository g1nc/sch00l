Template.header.helpers({
  isAdmin: function () {
    return Meteor.user() && Meteor.user().username == 'Supervisor';
  }
});

Template.header.events({
  'click #logout-button': function(){
    Meteor.logout();
  }
});
