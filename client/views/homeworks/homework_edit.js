Template.homeworkEdit.helpers({
    lessons: function () {
        return Lessons.find();
    }
});

Template.homeworkEdit.events({
    'submit #homework-edit': function (e,t) {
        e.preventDefault();

        var currentHomeworkId = this._id;
        var homeworkProperties = {
                number: $(e.target).find('#number').val(),
                lessonId: $(e.target).find('#lesson').val(),
                body: $(e.target).find('#body').val()
            };
        Homeworks.update(currentHomeworkId, {$set: homeworkProperties}, function(error) {
            if (error) {
                // display the error to the user
                return Materialize.toast(error.reason, 4000);
            } else {
                Router.go('daysList');
            }
        });
    }
});

Template.homeworkEdit.onRendered(function () {
    $('select').material_select();
});