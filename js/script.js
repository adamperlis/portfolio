/* global $,console,document,behanceAPI */
var behancekey = "ACAdeotWaDfmsH3AYnlasZiYLtqkMT0t";

$(document).ready(function() {
	
	//Set my key
	behanceAPI.setKey(behancekey);
	
	//Now get my projects
	behanceAPI.renderProjects("adamperlis9036", "projects", "projectTemplate");

	//cache for projects
	var projects = {};
	$("body").on("mouseenter", "div.project", function(e) {
		var pid = $(this).data("projectid");
		var that = this;
		if(projects[pid]) return;
		behanceAPI.getProject(pid, function(p) {
			console.log(p);
			projects[pid] = p;
			
			$("#title").append("<h1>" + p.name + "</h2>"); //Titles for Projects
			for(var i=0; i<p.modules.length; i++) {
				if(p.modules[i].type == "text") {
					$(that).append(p.modules[i].text); //Descriptions for Projects
				}else if (p.modules[i].type == "image") {
					$(that).append("<img class='thumbnail' src='"+ p.modules[i].src +"'/>"); //Images for Projects
				} else if (p.modules[i].type == "embed") { //Embeds for projects
					$(that).append(p.modules[i].embed);
				}
			}
		});
		console.log(pid);
	});

});