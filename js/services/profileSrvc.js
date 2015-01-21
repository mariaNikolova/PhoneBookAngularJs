'use strict';

app.factory('profileSrvc',
  function ($http, $resource, baseSrvcUrl, parseAppId, authSrvc) {
  	authSrvc.setAuthHeaders();
    return {
    	editProfile: function(objectId, profileData){
		console.debug(profileData);
          return $resource(baseSrvcUrl + "1/users/" + objectId, {
            username:"@username"
             , password: "@password"
             , fullName: "@fullName"
            }, {
              update: {
                method: 'PUT'
              }
            }).update(profileData);
       }
       , getCurrentUser: function(objectId){
       	 return	$resource(baseSrvcUrl + "1/users/" + objectId).get();
       }
    };
})