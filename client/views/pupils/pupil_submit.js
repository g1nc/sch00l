Template.pupilSubmit.events({
    'submit form': function (e,t) {
        e.preventDefault();
        var pupil = {
            name: $(event.target).find('#name').val()
        };

        Meteor.call('pupilInsert', pupil, function(error, result) {
            // display the error to the user and abort
            if (error){
                Materialize.toast(error.reason, 4000);
                return;
            }

            // show this result but route anyway
            if (result.pupilExists)
                Materialize.toast('Ученик с таким именем уже добавлен', 4000);

            Router.go('pupilsList');
        });
    }
});