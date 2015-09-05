Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() {
        return [
            Meteor.subscribe('days'),
            Meteor.subscribe('lessons'),
            Meteor.subscribe('homeworks'),
            Meteor.subscribe('pupils')
        ];
    }
});

Router.map(function() {
    //Auth route
    this.route('loginPage', {path: '/login'});

    //Days routes
    this.route('daysList', {path: '/'});

    this.route('dayPage', {
        path: '/days/:_id',
        data: function() { return Days.findOne(this.params._id); }
    });

    this.route('dayEdit', {
        path: '/days/:_id/edit',
        data: function() { return Days.findOne(this.params._id); }
    });

    this.route('daySubmit', {path: '/submit/day'});

    //Homeworks routes
    this.route('homeworkEdit', {
        path: '/homeworks/:_id/edit',
        data: function() { return Homeworks.findOne(this.params._id); }
    });

    //Pupils routes
    this.route('pupilsList', {path: '/pupils'});
    this.route('pupilSubmit', {path: 'submit/pupil'});
    this.route('pupilPage', {
        path: 'pupils/:_id',
        data: function() { return Pupils.findOne(this.params._id); }
    });
    this.route('pupilEdit', {
        path: 'pupils/:_id/edit',
        data: function() { return Pupils.findOne(this.params._id); }
    });
});

var requireAdmin = function() {
    if (!Meteor.user() || Meteor.user().username != 'Supervisor') {
        if (Meteor.loggingIn())
            this.render(this.loadingTemplate);
        else
            this.render('accessDenied');
    } else {
        this.next();
    }
};

Router.onBeforeAction('loading');
Router.onBeforeAction(requireAdmin, {only: ['daySubmit', 'dayEdit', 'pupilSubmit']});

