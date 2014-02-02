var app = angular.module('Apotheke', []);

app.run ( function ($document ) {
	alert("aa");
	$document.on ( 'deviceready' , function () {
		alert("hiHI");
	});
	
});
