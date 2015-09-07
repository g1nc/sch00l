Template.pupilEdit.events({
  'submit form': function(e,t) {
    e.preventDefault();
    var currentPupilId = this._id;
    var pupilProperties = {
      name: $(e.target).find('#name').val()
    };
    Pupils.update(currentPupilId, {$set: pupilProperties}, function(error) {
      if (error)
        return Materialize.toast(error.reason, 4000);
      else
        Router.go('pupilsList');
    });
  }
});
