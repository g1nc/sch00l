Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    return [
      Meteor.subscribe('days'),
      Meteor.subscribe('lessons'),
      Meteor.subscribe('homeworks'),
      Meteor.subscribe('pupils'),
      Meteor.subscribe('grades'),
      Meteor.subscribe('accounts')
    ];
  }
});

Router.map(function() {
  this.route('manage', {path: '/manage'});
  this.route('loginPage', {path: '/login'});

  /**
   * Days routes
   */
  this.route('daysList', {path: '/'});
  this.route('daySubmit', {path: '/submit/day'});
  this.route('dayPage', {
    path: '/days/:_id',
    data: function() { return Days.findOne(this.params._id); }
  });
  this.route('dayEdit', {
    path: '/days/:_id/edit',
    data: function() { return Days.findOne(this.params._id); }
  });

  /**
   * Lessons routes
   */
  this.route('lessonsList', {path: '/lessons'});
  this.route('lessonSubmit', {path: '/submit/lesson'});
  this.route('lessonEdit', {
    path: '/lessons/:_id/edit',
    data: function() { return Lessons.findOne(this.params._id); }
  });

  /**
   * Homeworks routes
   */
  this.route('homeworkSubmit', {path: 'submit/homework'});
  this.route('homeworkEdit', {
    path: '/homeworks/:_id/edit',
    data: function() { return Homeworks.findOne(this.params._id); }
  });

  /**
   * Pupils routes
   */
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

  /**
   * Grades routes
   */
  this.route('gradeSubmit', {path: '/submit/grade'});
  this.route('gradeEdit', {
    path: 'grades/:_id/edit',
    data: function() { return Grades.findOne(this.params._id); }
  });

  /**
   * Users routes
   */
   this.route('usersList', {path: '/users'});
   this.route('userSubmit', {path: '/submit/user'});
   this.route('userEdit', {
     path: 'users/:_id/edit',
     data: function() { return Meteor.users.findOne(this.params._id); }
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
Router.onBeforeAction(requireAdmin, {
  only: ['manage', 'daySubmit', 'dayEdit', 'lessonSubmit', 'lessonEdit',
    'pupilSubmit', 'pupilEdit', 'gradeSubmit', 'gradeEdit', 'usersList', 'userSubmit', 'userEdit']
});
