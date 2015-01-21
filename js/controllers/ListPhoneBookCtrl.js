'use strict';

// The AddCtrl holds the presentation logic for the Add screen
app.controller('ListPhoneBookCtrl',
  function ($scope, $rootScope, $location, $routeParams, phoneSrvc, notifySrvc, authSrvc) {
    $rootScope.pageTitle = "List PhoneBook" ;
    $scope.phoneBook = [];
    $scope.list = function() {
      phoneSrvc.getPhone($routeParams.objectId)
      .$promise
      .then(function (data) {
        $scope.phoneBook = data.results ;
          }, function (err) {
          notifySrvc.showError("Add Phone failed", err);
        });
    };
    $scope.list();
  }
);