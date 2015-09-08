Template.loginPage.events({
  'submit form': function(e,t) {
    e.preventDefault();
    var username = t.find('#login-username').value,
        password = t.find('#login-password').value;
    Meteor.loginWithPassword(username, password, function(err) {
      Materialize.toast(err.reason, 4000);
    });
    Router.go('daysList');
  }
});
