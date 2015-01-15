'use strict';

// The RegisterCtrl holds the presentation logic for the Register screen
app.controller('RegisterCtrl',
  function ($scope, $rootScope, $location, authSrvc, notifySrvc) {
    $rootScope.pageTitle = "Register"
    $scope.userData = {};

    $scope.register = function(userData) {
// console.debug(userData);
      authSrvc.register(userData)
      .$promise
      .then(function () {
          notifySrvc.showInfo("Register successful!");
          $location.path("/login");
        }, function (err) {
          notifySrvc.showError("User registration failed", err);
        });
    };
  }
);