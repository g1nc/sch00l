Template.userItem.helpers({
  pupil: function() {
    if (this.profile && this.profile.pupilId) {
      var pupil = Pupils.findOne({_id: this.profile.pupilId});
      return pupil && pupil.name ? pupil.name : null;
    }
  }
});

Template.userItem.events({
  'click .user-remove': function(e,t) {
    e.preventDefault();
    Meteor.users.remove(this._id);
  },
  'click .user-edit': function(e,t) {
    e.preventDefault();
    Session.set('parentPupilId', this.profile.pupilId);
    Router.go('userEdit', {_id: this._id});
  }
});
