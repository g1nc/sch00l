TabularTables = {};

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.Grades = new Tabular.Table({
    name: "GradeList",
    collection: Grades,
    columns: [
        {data: "pupilId", title: "Pupil"},
        {data: "lessonId", title: "Lesson"},
        {data: "date", title: "Date"},
        {data: "value", title: "Grade"},
        {data: "description", title: "Description"}
    ]
});