Template.pupilItem.helpers({
  admin: function(){
    return Meteor.user() && Meteor.user().username == 'Supervisor';
  },
  canSeeGrades: function(){
    return Meteor.user() && ((Meteor.user().profile && Meteor.user().profile.pupilId == this._id) || Meteor.user().username == 'Supervisor');
  }
});


Template.pupilItem.events({
  'click .pupil-remove': function(e,t){
    e.preventDefault();
    if (confirm("Удалить этого ученика?")) {
      var currentPupilId = this._id;
      Pupils.remove(currentPupilId);
    }
  },
  'click .pupil-grade': function(e){
    e.preventDefault();
    Session.set('currentPupilId', this._id);
    Router.go('gradeSubmit');
  },
  'click .pupil-edit': function(e){
    e.preventDefault();
    Session.set('currentPupilId', this._id);
    Router.go('pupilEdit', {_id: this._id});
  }
});
