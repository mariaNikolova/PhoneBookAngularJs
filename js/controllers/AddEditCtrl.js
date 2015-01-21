'use strict';

// The AddCtrl holds the presentation logic for the Add screen
app.controller('AddEditCtrl',
  function ($scope, $rootScope, $location, $routeParams, phoneSrvc, notifySrvc, authSrvc) {
    $scope.isAdd = ($location.$$path == '/add');
    $scope.isEdit = $location.$$path.indexOf('/add') != -1;
    if($scope.isAdd){
      $rootScope.pageTitle = "Add Phone";
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
    else {
      phoneSrvc.getPhone($routeParams.objectId).$promise
      .then(function (data) {
        $scope.phoneData = data;
      }, function (err) {
        notifySrvc.showError("Get Phone failed", err);
        $location.path('/listPhoneBook');
      });
      if ($scope.isEdit) {
        $rootScope.pageTitle = "Edit Phone";
        $scope.edit = function(phoneData){
          phoneSrvc.editPhone($routeParams.objectId, phoneData)
          .$promise
          .then(function(data){
            notifySrvc.showInfo("Edit successful!");
            $location.path('/listPhoneBook');
          }, function(err){
            notifySrvc.showError("Edit failed",err);
          })
        };      
      } else {
        $rootScope.pageTitle = "Delete Phone";
        $scope.subTitle = "Confirm " + $rootScope.pageTitle + "?";
        $scope.delete = function(phoneData){
          phoneSrvc.deletePhone($routeParams.objectId, phoneData)
            .$promise
            .then(function(data){
              notifySrvc.showInfo("delete successful");
              $location.path("/listPhoneBook");
            }, function(err){
              notifySrvc.showError("Delete failed", err);
            })
        }              
      }
    }
  }
);