Meteor.users.allow({
  update: userAdmin,
  remove: userAdmin
});

Meteor.methods({
  'userInsert': function(userAttributes) {
    var userId = Accounts.createUser(userAttributes);
    return {
      _id: userId
    }
  },
  'userUpdate': function(userAttributes) {
    Meteor.bindEnvironment(function(){
      Accounts.setPassword(userAttributes._id, userAttributes.password);
    });
  }
})
