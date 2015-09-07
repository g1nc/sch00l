Template.userItem.helpers({
  pupil: function() {
    var pupil = Pupils.findOne({_id: this.pupilId});
    return pupil && pupil.name ? pupil.name : null;
  }
});
