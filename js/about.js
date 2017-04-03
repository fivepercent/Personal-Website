
var xmlhttp = new XMLHttpRequest();
var about;
xmlhttp.onreadystatechange = function(){
 	if(this.readyState == 4 && this.status == 200){
 		about = JSON.parse(this.responseText);
 		display();
	}
};
xmlhttp.open("GET", "data/about.json", true);
xmlhttp.send();

function display(){
	var formattedaboutpic = HTMLaboutpic.replace("%data%", "images/aboutpic.jpg");
	var formattedaboutwelcome = HTMLaboutwelcome.replace("%data%", about.welcomemessage);
	var formattedintroduction = HTMLaboutintroduction.replace("%data%", about.introduction);

	$("#container").append(HTMLabouttitle);
	$("#container").append(HTMLaboutmainbar);
	$("#container").append(HTMLaboutsidebar);
	$("#container").append(HTMLboundry);
	$("#container").append(formattedaboutwelcome);
	$("#container").append(formattedintroduction);


	$("#mainbar").append(formattedaboutpic);
	$("#sidebar").append(HTMLabouttags);
	$("#tags").append(HTMLabouttagtitle);

	if(about.featuredtags.length>0){
		for(var i=0; i<about.featuredtags.length; i++){
			var formattedabouttag = HTMLabouttag.replace("%data%", about.featuredtags[i]);
			$("#tags").append(formattedabouttag);
		}
	}

}