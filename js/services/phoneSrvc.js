'use strict';

app.factory('phoneSrvc',
  function ($http, $resource, baseSrvcUrl, authSrvc) {
    authSrvc.setAuthHeaders();
    return {
      add: function(phoneData) {
          return $resource(baseSrvcUrl + '1/classes/Phone', {
            person:"@person"
            , number:"@number"
            , ACL: "@ACL"
        }).save(phoneData);
      }
      , register: function(userData, success, error) {
          this.setAuthHeaders();
          return $resource(baseSrvcUrl + '1/users', {
            username:"@username"
            , password:"@password"
            , fullName:"@fullName"
          }
         ).save(userData);
      }, getPhone: function(objectId) {
          return $resource(baseSrvcUrl + '1/classes/Phone' + ((objectId) ? "/" + objectId: "")).get();
       },
       editPhone: function(objectId, phoneData){
          return $resource(baseSrvcUrl + "1/classes/Phone/" + objectId, {
            person:"@person"
             , number: "@number"
            }, {
              update: {
                method: 'PUT'
              }
            }).update(phoneData);
       },
       deletePhone: function(objectId, phoneData){
          return $resource(baseSrvcUrl +  "1/classes/Phone/" + objectId).delete(phoneData);
       }
  }
}
);