var app = angular.module('Apotheke', []);

app.run ( function ($document ) {
	$document.on ( 'deviceready' , function () {
		alert("ACHTUNG DER GERÄT READY");
	});
	
});
