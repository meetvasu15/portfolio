 $( document ).ready(function(){
 $('#scene').parallax(); 
  $('#footerScene').parallax(); 
 
 //$("html").niceScroll({scrollspeed : "100", autohidemode : false});
 $(".headerLinksContainer span").click(function(e){
		var divId = e.target.id; 
		if($("#"+divId+"Container")){
		$.scrollTo($("#"+divId+"Container"),800);
		}
  });
  var headLoc = $('.mainContentContainer').offset().top;
  $(window).bind('scroll', function () { 
		if ($(window).scrollTop() > headLoc) { 
			$('header').addClass('fixed');
		} else {
			$('header').removeClass('fixed');
		}
	});
 });
// var scene = document.getElementById('scene');
//var parallax = new Parallax(scene);

function onDownArrowClick(){ 
$.scrollTo($(".statementContainer"),1000);
//$("body").localScroll($(".parallaxContainer"));
}

 function createModalForProjects(projectIdentifier){
	var heading;
	var modalContent;
	if(projectIdentifier == "avatar"){
		  heading = "Avatar, A Voice Interactive LMS";
		  modalContent = "<img class='modalImg' src='images/avatar.jpg'>Developed a state of the art Learning Management System which enhances the way education is imparted in schools and increase the standard of education by the use of a more pervasive communication interface. I used Google’s voice-to-text ability to make the web application interactive by voice and HTML5’s canvas to implement an animated person, giving an impression that the application is talking to the user.";
	}else if(projectIdentifier == "aspira"){
		  heading = "Asthma Monitoring (Windows 8 Metro application)";
		  modalContent = "<p><img class='modalImg' src='images/AspiraMain.png'>Asthma monitoring is an application designed and build for Windows 8 tablets. It was a project that I completed under the guidance of Dr Kevin Gary at ASU."+
		 " This app helps helps kids suffering from Asthma record their <a href='http://en.wikipedia.org/wiki/Spirometer'>spirometer</a> readings. It also captures the quality of air of the room where the tablet is kept. This information helps research clinician better understand how the change in quality of air affects the health of a child. </p> <p>To keep the kids motivated towards taking their spirometer readings on time, the app had an animated fish which would react by changing face expressions if the child touched it. The app was built using HTML5, CSS3 and WinJs, I was responsible for writing the front end/ Metro UI of the application and an undergraduate student was responsible for writing the back-end Java program which captures the air quality meter readings.</p>";
	}else if(projectIdentifier == "cloud"){
		  heading = "Cloud Video Conferencing in JavaScript";
		  modalContent = "<p>Video chat and other real time communication traditionally require us to download browser plugins or native applications. I and two other students at ASU built together a WebRTC based video-conferencing application with capabilities such as screen sharing, video chat and text chat. This application runs on supported web-browsers without installing any plug-ins. The application uses Google's WebRTC API, ICE framework, signaling mechanism using a NodeJS server to establish a peer to peer connection.</p><p>I was responsible for writing the front end of the application in HTML5, CSS3 and JavaScript. I used the WebRTC'c interface to capture the user's audio and ideo stream. These stream's are transmitted and can be viewed/ heard on the peer's machine.</p><p>You can find complete documentation to this project <a target = '_blank' href='https://drive.google.com/file/d/0B7KPRbqadQFjeEluemxycTVXTlBhaWhvbk1xWGhFaENXYjc4/edit?usp=sharing'>here</a></p>";
	}
	 
	

	 if ($("#myModal")) {
        $("#myModal").remove();
    }
	var content = "<div class='modal fade' id='myModal' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>";
		content += "<div class='modal-dialog'>";
		content += "<div class='modal-content'>";
		content += "<div class='modal-header'>";
		content += "<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>";
		content += "<h3 class='modal-title' id='myModalLabel'>"+heading+"</h3>";
		content += "</div>";
		content += "<div class='modal-body'>"+modalContent; 
		content += "</div>";
		content += "<div class='modal-footer'>";
		content += "<button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>";
		content += "</div>";
		content += "</div>";
		content += "</div>";
		content += "</div>";
		
		$("#modalContainer").append(content);
		$('#myModal').modal({
			"keyboard": true,
			"show": true
		});
 }