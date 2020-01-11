Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    "completedHtml": "<h3>Thank you for your feedback.</h3> <h5>Your thoughts and ideas will help us to create a great product!</h5>",
    "pages": [{
        "name": "page1",
        "elements": [{
                name: "name",
                title: "Name :",
                type: "text",
                isRequired: true
            },
            {
                name: "title",
                title: "Title :",
                type: "text",
                isRequired: true
            },
            {
                name: "email",
                title: "Email :",
                type: "text",
                inputType: "email",
                isRequired: true
            },
            {
                name: "organization",
                title: "Organization :",
                type: "text",
                isRequired: true
            }, {
                name: "strength",
                title: "Strength of Internal Audit Function :",
                type: "dropdown",
                choices: [
                    "0-5 staff",
                    "6-10 Staff",
                    "10-20 Staff",
                    "20-50 Staff",
                    "50-100 Staff",
                    "100+ staff"
                ]
            },
            {
                name: "numberofIAProjects",
                title: "Number of IA Projects Per Year :",
                type: "dropdown",
                choices: [
                    "0-5 Projects",
                    "6-10 Projects",
                    "10-20 Projects",
                    "20-50 Projects",
                    "50-100 Projects",
                    "100+ Projects"

                ]
            },
            {
                title: "Do you use an Internal Audit System :",
                name: "hasInternalSystem",
                type: "radiogroup",
                colCount: 1,
                choices: [
                    "Yes",
                    "No"
                ],
                isRequired: true
            },
            {
                name: "systemName",
                title: "Names of the System :",
                type: "text",
                visibleIf: "{hasInternalSystem} = 'Yes'"
            },
            {
                name: "systemUseDuration",
                title: "How long you have used this system :",
                type: "dropdown",
                visibleIf: "{hasInternalSystem} = 'Yes'",
                choices: [
                    "0-3 years",
                    "03-05 years",
                    "06-10 years",
                    "10+ years"
                ]
            },
            {
                name: "topReason",
                title: "Top three features of the system that you like :",
                type: "multipletext",
                visibleIf: "{hasInternalSystem} = 'Yes'",
                colCount: 1,
                items: [{
                        name: "t1",
                        title: ""
                    },
                    {
                        name: "t2",
                        title: ""
                    }, {
                        name: "t3",
                        title: ""
                    }
                ]
            },
            {
                name: "topImprovments",
                title: "Top 3 areas of improvement :",
                type: "multipletext",
                visibleIf: "{hasInternalSystem} = 'Yes'",
                colCount: 1,
                items: [{
                        name: "t1",
                        title: ""
                    },
                    {
                        name: "t2",
                        title: ""
                    }, {
                        name: "t3",
                        title: ""
                    }
                ]
            }, {
                name: "reasonNotHavingSystem",
                title: "Kindly select, reasons for not having system :",
                type: "radiogroup",
                colCount: 1,
                hasOther: true,
                choices: [
                    "Size of our operations can easily be managed through MS Excel / Access",
                    "Systems are too costly",
                    "Training cost",
                    "Off the shelf does not suit us and be-spoke solution will cost a lot",
                    "Difficult to manage the system",
                    "Do not have IT infrastructure to support a system"
                ]
            }, {
                name: "satisfaction",
                title: "How satisfied are you with your existing system (0-5) :",
                type: "dropdown",
                choices: [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5"
                ]
            }, {
                name: "hearingFromus",
                title: "Would you like to hear from us about the survey results  :",
                type: "radiogroup",
                colCount: 1,
                choices: [
                    "Yes",
                    "No"
                ]
            }
        ]
    }],
    "showQuestionNumbers": "on"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        $("#result").val(JSON.stringify(result.data));
        $("form").submit();
        // document
        //     .querySelector('#surveyResult')
        //     .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

$("#surveyElement").Survey({
    model: survey
});