/* global $,console,document,behanceAPI */
var behancekey = "ACAdeotWaDfmsH3AYnlasZiYLtqkMT0t";

$(document).ready(function() {
	
	//Set my key
	behanceAPI.setKey(behancekey);
	
	//Now get my projects
	behanceAPI.renderProjects("adamperlis9036", "projects", "projectTemplate");

	//cache for projects
	var projects = {};
	$("body").on("click", "div.project", function(e) {
		var pid = $(this).data("projectid");
		var that = this;
		if(projects[pid]) return;

		$("section[data-projectId=" + pid +"]").css("display","block");

		behanceAPI.getProject(pid, function(p) {
			console.log(p);
			projects[pid] = p;
			
			for(var i=0; i<p.modules.length; i++) {
				if(p.modules[i].type == "text") {
					$(".projectDetails").append(p.modules[i].text); //Descriptions for Projects
				}else if (p.modules[i].type == "image") {
					$(".projectDetails").append("<img class='thumbnail' src='"+ p.modules[i].src +"'/>"); //Images for Projects
				} else if (p.modules[i].type == "embed") { 
					$(".projectDetails").append(p.modules[i].embed); //Embeds for projects
				}
			}
		});
		
		console.log(pid);
	});

});