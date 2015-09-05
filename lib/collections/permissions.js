userAdmin = function(userId, day, fieldNames) {
    return Meteor.user().username == 'Supervisor';
};
