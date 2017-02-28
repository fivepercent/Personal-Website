var about ={
	"aboutpic" : "images/aboutpic.jpg",
	"featuredtags" : [
		"#Programming", "#Travel", "#Potographer", "#Engineer", "#Sports cards", 
		"#Machine Learning", "#Basketball", "#Big Data", "#Earphones", "#Android",
		"#Marvell Technology Ltd.", "#SoC", "#Web Scrawler", "University of Florida", 
		"ECE"
	],
	"welcomemessage":"Welcome! This is Zhenle.",
	"introduction":"I'm a programmer. I love creating beautiful things(software and photographs).<br>I consider myself as a life-long programmer and designer.\
		<br>I'm now open to the new opportunities."
}

about.display=function(){

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

about.display();