'use strict';

app.controller("login", ["$scope", "$rootScope", "$http", "$location", "toastr", "RequestData", "$cookies",
    function ($scope, $rootScope, $http, $location, toastr, RequestData, $cookies) {
        $scope.loginAdmin = function () {
            var request = {
                method: 'POST',
                url: RequestData.baseUrl + "admins/login/",
                headers: {
                    "Accept": "application/json; version=1.0",
                    "Content-Type": "application/json"
                },
                data: {
                    "email": $scope.email,
                    "password": $scope.password
                }
            };
            function successfulResponse(response) {
                $cookies.put('getToken', response.data.token);
                toastr.success('Giriş', 'Başarılı!');
                window.location.reload();
                $location.path('home/dashboard');
                $cookies.putObject('getAdmin', response.data.admin);

             //   console.log($cookies.get('getToken'));
            }
            function errorResponse(response) {
                toastr.error('Error!', 'Oops! User name or password wrong. Please again.');
              //  console.log(response);
            }
            $http(request).then(successfulResponse, errorResponse);
          //  console.log(request);
        };

        $scope.Logout = function () {
           // console.log($cookies.get('getToken'));
            $cookies.remove('getToken');
         //   console.log($cookies.get('getToken'));
            $location.path('/');
            $rootScope.profile = "";
        };
    }]);
