$(document).ready(function () {
  //   var titleAdorner = {
  //     getCss: () => {
  //       return "mu_title";
  //     },
  //     afterRender: (domEl, model) => {
  //       var decoration = document.createElement("div");
  //       decoration.innerHTML = "";
  //       domEl.appendChild(decoration);
  //     }
  //   };

  //   SurveyEditor.registerAdorner("title", titleAdorner);

  // SurveyEditor.editorLocalization.currentLocale = "fr";

  // SurveyEditor.removeAdorners(["mainRoot"]);

  Survey.Survey.cssType = "bootstrap";
  // Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
  // SurveyEditor.editorLocalization.currentLocale = "hu";
  SurveyCreator.StylesManager.applyTheme("winter");
  var editor = new SurveyCreator.SurveyCreator("editorElement");
  $(".svd_commercial_container").remove();
  // SurveyEditor.StylesManager.applyTheme("orange");
  editor.saveSurveyFunc = function (saveNo, callback) {
    if (editor.JSON.title === undefined || editor.JSON.title === null || editor.JSON.title === "") {
      alert("Title is required");
      return;
    }
    document.getElementById("surveyContent").value = JSON.stringify({
      title: editor.JSON.title,
      description: editor.JSON.description,
      survey: editor.JSON.pages
    });
    $("#frmGenerateSurvey").submit();
    //callback(saveNo, true);
  };

  //editor.showOptions = true;

  editor.showState = true;

  //ko.applyBindings(new SurveyEditor.SurveysManager("https://dxsurvey.com", "a797f29b53f8455e8b3ef317f8904dac", editor), document.getElementById("manage"));

  window.editor = editor;

  $(".svd_toolbar").append("<a href='/listSurvey/1' class='btn btn-primary svd_save_btn'>Cancel</a>")
  if (document.location.href.indexOf("editsurvey") !== -1) {
    const path = document.location.href.split('/');
    const id = path[path.length - 1];
    $.get("/getSurveyById/1/" + id, function (res) {
      document.getElementById("editModeId").value = id;
      document.title = "Edit Survey";
      editor.text = res;
    });
  }
})