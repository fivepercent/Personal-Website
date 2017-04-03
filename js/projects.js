
var xmlhttp = new XMLHttpRequest();
var about;
xmlhttp.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    projects = JSON.parse(this.responseText);
    display();
    popUp();
  }
};
xmlhttp.open("GET", "data/projects.json", true);
xmlhttp.send();

function display(){
  for(var m=0; m<projects.length; m++){
    var formattedproject = HTMLproject.replace("%id%", m);
    var projectId="#project"+m;
    var formattedprojectlogotitle = HTMLprojectlogotitle.replace("%id%", m);
    var projectlogotitle="#project-logo-title"+m;
    var formattedprojectdetails = HTMLprojectdetails.replace("%id%", m);
    var projectdetails="#project-details"+m;
    var formattedprojectskills = HTMLprojectskills.replace("%id%", m);
    var projectskills = "#skillsused"+m;
    var formattedprojectcontentimg = HTMLprojectcontentimg.replace("%id%", m);
    var projectcontentimg = "#project-details-img"+m;
    var formattedprojectdescription = HTMLprojectdescription.replace("%id%", m);
    var projectdescription = "#project-description"+m;
    var formattedprojectimg300 = HTMLprojectimg300.replace("%data%", projects[m].projectimg300x300);
    var formattedprojectcontenttitle = HTMLprojectcontenttitle.replace("%data%", projects[m].contenttitle);
    var formattedprojectdescriptiontext = HTMLprojectdescriptiontext.replace("%data%", projects[m].description);
    var formattedprojectimg200 = HTMLprojectimg200.replace("%data%", projects[m].projectimg200x200);
    var formattedprojecttitle = HTMLprojecttitle.replace("%data%", projects[m].projecttitle);

    $("#project-list").append(formattedproject);

    $(projectId).append(formattedprojectlogotitle);
    $(projectId).append(formattedprojectdetails);

    $(projectlogotitle).append(formattedprojectimg200);
    $(projectlogotitle).append(formattedprojecttitle);

    $(projectdetails).append(formattedprojectcontenttitle);
    $(projectdetails).append(formattedprojectcontentimg);
    $(projectdetails).append(formattedprojectdescription);
    $(projectdetails).append(HTMLboundry);
    $(projectdetails).append(formattedprojectskills);
    $(projectcontentimg).append(formattedprojectimg300);
    $(projectdescription).append(formattedprojectdescriptiontext);
    for (var i = 0; i < projects[m].skillsused.length; i++) {
      var formatedprojectskill = HTMLprojectskill.replace("%data%", projects[m].skillsused[i]);
      $(projectskills).append(formatedprojectskill);
    }
  }


  // var formattedprojectimg300 = HTMLprojectimg300.replace("%data%", projects[0].projectimg300x300);
  // var formattedprojectcontenttitle = HTMLprojectcontenttitle.replace("%data%", projects[0].contenttitle);
  // var formattedprojectdescriptiontext = HTMLprojectdescriptiontext.replace("%data%", projects[0].description);
  // var formattedprojectimg200 = HTMLprojectimg200.replace("%data%", projects[0].projectimg200x200);
  // var formattedprojecttitle = HTMLprojecttitle.replace("%data%", projects[0].projecttitle);

  // $("#project").append(HTMLprojectlogotitle);
  // $("#project").append(HTMLprojectdetails);

  // $("#project-logo-title").append(formattedprojectimg200);
  // $("#project-logo-title").append(formattedprojecttitle);

  // $("#project-details").append(formattedprojectcontenttitle);
  // $("#project-details").append(HTMLprojectcontentimg);
  // $("#project-details").append(HTMLprojectdescription);
  // $("#project-details").append(HTMLboundry);
  // $("#project-details").append(HTMLprojectskills);
  // $("#project-details-img").append(formattedprojectimg300);
  // $("#project-description").append(formattedprojectdescriptiontext);
  // for (var i = 0; i < projects[0].skillsused.length; i++) {
  //   var formatedprojectskill = HTMLprojectskill.replace("%data%", projects[0].skillsused[i]);
  //   $("#skillsused").append(formatedprojectskill);
  // }
}

function popUp(){
  $("#project-list>li>a").on("click", 
    function(e){
      e.preventDefault();
      var li=$(this).parent(),
      li_height = li.height(),
      details=li.find(".project-details"), 
      details_height=details.height(),
      new_height=details_height+40; 
      li.toggleClass("current").animate(
        {paddingBottom: new_height}, 
        { duration: 200, queue: false }
      ).siblings().removeClass("current");
      $(".container li:not(.current)").animate(
        {paddingBottom: '0'}, 
        {duration: 200, queue: false }
      ).find(".project-details").slideUp(200);
      $(".current").find(".project-details").slideDown(200);
    }
  );
}

// $("#project>a").on("click", 
//   function(e){
//     e.preventDefault();
//     var li=$(this).parent(),
//     li_height = li.height(),
//     details=li.find(".project-details"), 
//     details_height=details.height(),
//     new_height=details_height+40; 
//     li.toggleClass("current").animate(
//       {paddingBottom: new_height}, 
//       { duration: 200, queue: false }
//     ).siblings().removeClass("current");
//     $(".container li:not(.current)").animate(
//       {paddingBottom: '0'}, 
//       {duration: 200, queue: false }
//     ).find(".project-details").slideUp(200);
//     $(".current").find(".project-details").slideDown(200);
//   }
// );