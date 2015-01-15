'use strict';

// The AddCtrl holds the presentation logic for the Add screen
app.controller('AddCtrl',
  function ($scope, $rootScope, $location, phoneSrvc, notifySrvc, authSrvc) {
    $rootScope.pageTitle = "Add Phone"
    $scope.phoneData = {};

    $scope.add = function(phoneData) {
      phoneData.ACL = { };
      phoneData.ACL[authSrvc.getCurrentUser().objectId] = { write:true, read:true };
      phoneSrvc.add(phoneData)
      .$promise
      .then(function (data) {
          notifySrvc.showInfo("Add Phone successful!");
          $location.path("/phones");
        }, function (err) {
          notifySrvc.showError("Add Phone failed", err);
        });
    };
  }
);