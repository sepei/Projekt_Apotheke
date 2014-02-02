var app = angular.module('Apotheke', ['MainController']);

app.run ( function ($document ) {
	$document.on ( 'deviceready' , function () {
		alert("ACHTUNG DER GERÄT READY");
	});
	
});
