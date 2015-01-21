'use strict';

// The RegisterCtrl holds the presentation logic for the Register screen
app.controller('RegisterCtrl',
  function ($scope, $rootScope, $location, authSrvc, profileSrvc, notifySrvc) {
    $scope.isRegister = $location.$$path.indexOf("/register") != -1;
    if ($scope.isRegister) {
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
    } else {
      $rootScope.pageTitle = "Edit Profile";
      profileSrvc.getCurrentUser(authSrvc.getCurrentUser().objectId)
      .$promise
      .then(function(data){
        $scope.userData = data;
      }, function(err){
        notifySrvc.showError("Get Phone failed", err);
            $location.path('/listPhoneBook');
      });
      $scope.edit = function(userData){
        profileSrvc.editProfile(authSrvc.getCurrentUser().objectId, userData)
        .$promise
        .then(function(data){
          notifySrvc.showInfo("Edit successful!");
          authSrvc.logout();
          $location.path('/login');
        },function(err){
          notifySrvc.showError("Edit failed",err);
        })
      }
    }
  }
);