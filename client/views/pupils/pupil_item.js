Template.pupilItem.helpers({
    admin: function(){
        return Meteor.user().username == 'Supervisor';
    }
});


Template.pupilItem.events({
    'click .pupil-remove': function(e,t){
        e.preventDefault();
        if (confirm("Удалить этого ученика?")) {
            var currentPupilId = this._id;
            Pupils.remove(currentPupilId);
        }
    }
});