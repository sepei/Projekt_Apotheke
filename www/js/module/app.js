var app = angular.module('Apotheke', ['MainController']);

app.run ( function ($document, $rootScope ) {
	    $rootScope.$apply( function() {
            $rootScope.setOverlay = false;
        });
	$document.on ( 'deviceready' , function () {
		alert("ACHTUNG DER GERÄT READY");
	});
	
});
