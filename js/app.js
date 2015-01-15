'use strict';

var app = angular.module('app', [
  'ngRoute'
  , 'ngResource'
  , 'ui.bootstrap.pagination'
]);

app
.constant('baseSrvcUrl', 'https://api.parse.com/')
.constant('pageSize', 2)
.constant('parseAppId', '2MhuuJebg1w33BTVoySlVlPSMRCyvkoL71hyWNVt')
.constant('parseRestApiKey', 'jZPkdEocucZ5jiwllEkyy0JuZeK03dfNh7ZRhURi')
;

app.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'templates/home.html'
    , controller: 'HomeCtrl'
  })
  .when('/register', {
    templateUrl: 'templates/register.html'
    , controller: 'RegisterCtrl'
  })
  .when('/login', {
    templateUrl: 'templates/login.html'
    , controller: 'LoginCtrl'
  })
  .when('/add', {
    templateUrl: 'templates/add.html'
    , controller: 'AddCtrl'
  })
  .when('/listPhoneBook', {
    templateUrl: 'templates/list.html'
    , controller: 'ListPhoneBookCtrl'
  })
  .otherwise(
    { redirectTo: '/' }
  )
  ;
});

//app.run(function ($rootScope, $location, authSrvc) {
//   $rootScope.isPublic = ($location.$$path == '/')||($location.$$path == '/user/home');
//   // $rootScope.isAdmin = authSrvc.isAdmin();
//   $rootScope.isAdmin =true;
//   // $rootScope.isNormalUser = authSrvc.isNormalUser();
//   $rootScope.isNormalUser = false;
//   $rootScope.displayAdStatus = $location.$$path == '/user/ads';
//   $rootScope.nav = $location.$$path;
//  $rootScope.$on('$locationChangeStart', function (event) {
//     // $rootScope.isNormalUser = authSrvc.isNormalUser();
//   $rootScope.isNormalUser = false;
//     // $rootScope.isAdmin = authSrvc.isAdmin();
//       $rootScope.isAdmin =true;
//     $rootScope.isPublic = ($location.$$path == '/')||($location.$$path == '/user/home');
//     $rootScope.displayAdStatus = $location.$$path == '/user/ads';
//     $rootScope.nav = $location.$$path;
 //   if ( ($location.path().indexOf("/add") != -1
  //    ) && !authSrvc.isLoggedIn()) {
//       // Authorization check: anonymous site visitors cannot access user routes
 //     $location.path("/");
  //  }
//     // if ($location.path().indexOf("/admin/") != -1 && !authSrvc.isAdmin()) {
//     //   // Authorization check: anonymous site visitors cannot access user routes
//     //   $location.path("/");
    // }
//  });
//});