'use strict';

app.service("RequestData",  ["$cookies", "$rootScope", function ($cookies,$rootScope) {
    if ($cookies.get('getToken') === undefined){
        $cookies.put('getToken', "");
    }
    var header = {
        "Content-Type": "application/json",
        "Accept": "application/json; version=1.0",
        "Authorization": "JWT " + $cookies.get('getToken')
    };
     console.log($cookies.get('getToken'));
    var data = {
        "baseUrl": "https://arifname-test-dot-arifname-2000.appspot.com/",
        "headers": header
    };
    $rootScope.profileAdmin = $cookies.getObject('getAdmin');
   // console.log($rootScope.getDashboard);
    return data;
}]);




