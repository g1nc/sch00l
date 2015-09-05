Days = new Mongo.Collection('days');

userAdmin = function(userId, day, fieldNames) {
    return Meteor.user().username == 'Supervisor';
};

Days.allow({
    update: userAdmin,
    remove: userAdmin
});

Days.deny({
    update: function(userId, day, fieldNames) {
        // разрешаем редактировать только следующие два поля:
        return (_.without(fieldNames, 'date', 'event').length > 0);
    }
});

Meteor.methods({
    dayInsert: function(dayAttributes) {
        check(Meteor.userId(), String);
        check(dayAttributes, {
            date: Date,
            event: String
        });

        var dayWithSameDate = Days.findOne({date: dayAttributes.date});
        if (dayWithSameDate) {
            return {
                dayExists: true,
                _id: dayWithSameDate._id
            }
        }

        var dayId = Days.insert(dayAttributes);
        return {
            _id: dayId
        };
    }
});