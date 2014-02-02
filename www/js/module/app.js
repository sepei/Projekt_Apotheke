var app = angular.module('Apotheke', []);

app.run ( function ($document ) {
	
	$document.on ( 'deviceready' , function () {
		alert("hiHI");
	});
	
});
