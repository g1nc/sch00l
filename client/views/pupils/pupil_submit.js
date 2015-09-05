Template.pupilSubmit.events({
    'submit form': function (e,t) {
        e.preventDefault();
        var $name = $(event.target).find('#name');
        var pupil = { name: $name.val() };
        Meteor.call('pupilInsert', pupil, function(error, result) {
            // display the error to the user and abort
            if (error){
                Materialize.toast(error.reason, 4000);
                return;
            }

            // show this result but route anyway
            if (result.pupilExists){
                Materialize.toast('Ученик с таким именем уже добавлен', 4000);
                $name.val('');
            }
            else {
                Materialize.toast('Ученик добавлен', 4000);
                $name.val('');
            }
            Router.go('pupilSubmit');
        });
    }
});