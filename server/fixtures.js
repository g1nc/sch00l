if (Lessons.find().count() == 0) {
  var lessons = [
    'Алгебра', 'Английский язык',
    'Биология', 'География',
    'Информатика', 'История',
    'Литература', 'Музыка',
    'ОБЖ', 'Обществоведение',
    'Русский язык', 'Украинский язык',
    'Физика', 'Химия'
  ];
  _.each(lessons, function(e, i) {
    Lessons.insert({
      name: e
    });
  });
}

if (Meteor.users.find().count() == 0) {
  Accounts.createUser({
    username: 'Supervisor',
    email : 'test@test.test',
    password : 'Supervisor'
  });
}
