 var bio ={
 	"name":"Zhenle Zhu",
 	"biopic":"images/me.jpg",
 	"logo":"images/logo1.png",
 	"motto":"What can't kill me makes me stronger",
 	"social_media":{
 		"github":"https://github.com/fivepercent",
 		"facebook":"https://www.facebook.com/jerry.zhu.587",
 		"instagram":"https://www.instagram.com/zhuzhenle",
 		"twitter":"https://twitter.com/Zhuzhenle"
 	},
 	"contacts":{
 		"email":"zhuzhenle2016@gmail.com",
 		"mobile":"352-284-6698",
 		"github":"fivepercent",
 		"twitter":"@Zhuzhenle",
 		"location":"Fremont, CA, USA"
 	},
 	"skills_efficient":[
 		"Java", "Javascript"
 	],
 	"skills":[
 		"HTML", "CSS", "jQuery", "Python", "C++", "C", "MySQL", "SQLite", "Shell scripting"
 	]
 }

 bio.display = function(){
 	var formattedlogo = HTMLheaderlogo.replace("%data%", bio.logo);
 	var formattedbiopic = HTMLbiopic.replace("%data%", bio.biopic);
 	var formattedname = HTMLbioname.replace("%data%", bio.name);
 	var formattedmotto = HTMLbiomotto.replace("%data%", bio.motto);
 	var formattedgithub = HTMLbiosociallink.replace("%type%", "github").replace("%data%", bio.social_media.github);
 	var formattedfacebook = HTMLbiosociallink.replace("%type%", "facebook").replace("%data%", bio.social_media.facebook);
 	var formattedinstagram = HTMLbiosociallink.replace("%type%", "instagram").replace("%data%", bio.social_media.instagram);
 	var formattedtwitter = HTMLbiosociallink.replace("%type%", "twitter").replace("%data%", bio.social_media.twitter);
 	var len1=bio.skills_efficient.length;
 	var len2=bio.skills.length;

 	$("#header").prepend(formattedlogo);

 	$("#container").append(formattedbiopic);
 	$("#container").append(formattedname);
 	$("#container").append(formattedmotto);

 	$("#container").append(HTMLbioskillslist);

 	if(len1>0||len2>0){
 		var ie=0;
 		var i=0;
 		while(ie<len1||i<len2){
 			if(ie<len1){
 				var formattedbioskille= HTMLbioskille.replace("%data%", bio.skills_efficient[ie]);
 				$("#skills").append(formattedbioskille);
 				ie++;
 			}
 			for(var j=0; j<3&&i<len2; j++){
 				var formattedbioskill= HTMLbioskill.replace("%data%", bio.skills[i]);
 				$("#skills").append(formattedbioskill);
 				i++; 				
 			}
 		}
 	}

 	$("#bottom").prepend(HTMLbiosociallist);

 	$("#sociallist").append(formattedgithub);
 	$("#sociallist").append(formattedfacebook);
 	$("#sociallist").append(formattedinstagram);
 	$("#sociallist").append(formattedtwitter);
 	$("#github").append(HTMLbiogithubicon);
 	$("#facebook").append(HTMLbiofacebookicon);
 	$("#instagram").append(HTMLbioinstagramicon);
 	$("#twitter").append(HTMLbiotwittericon);
 }



 bio.display();
 