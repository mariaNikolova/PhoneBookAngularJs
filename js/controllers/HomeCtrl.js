'use strict';

// The HomeCtrl holds the presentation logic for the home screen
app.controller('HomeCtrl',
  function ($scope, $rootScope, $location, authSrvc, phoneSrvc) {
  	$rootScope.pageTitle = (authSrvc.isAnonymous()) ? "Wellcome" : "Home";
  	if(!authSrvc.isAnonymous()) {
  		var user = authSrvc.getCurrentUser();
      console.log(user);
  		$scope.fullName = user.fullName;
  		$scope.username = user.username;
  	}
  }
);