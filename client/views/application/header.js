Template.header.helpers({
  isAdmin: function () {
    return Meteor.user() && Meteor.user().username == 'Supervisor';
  }
});

Template.header.events({
  'click #logout-button': function(e,t) {
    e.preventDefault();
    Meteor.logout();
    Router.go('daysList');
  }
});
