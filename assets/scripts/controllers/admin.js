'use strict';

app.controller('adminCTRL', ['$http', '$scope', '$rootScope', '$window', 'RequestData', '$state', '$stateParams', 'toastr', function ($http, $scope, $rootScope, $window, RequestData, $state, $stateParams, toastr) {

    $scope.model = new Pagination({
        http: $http,
        pageFilter: "&page=",
        popup: toastr,
        dataSearchUrl: "admins/?q=",
        dataClassUrl: "admins/?page=",
        dataClass: "admins",
        RequestData: RequestData
    }).initiate();
    //console.log($scope.model);

    $scope.searchButton = function () {
        $scope.search = $scope.searchText;
       // console.log($scope.search);
    }
}]);

app.controller('editAdmin', ['$scope', '$rootScope', '$window', '$http', '$filter', '$state', '$stateParams', 'RequestData', 'toastr',
    function ($scope, $rootScope, $window, $http, $state, $filter, $stateParams, RequestData, toastr) {
        //$scope.$on('parentId', function (events, args) {
        // console.log(args);
        //});
        var userId = document.URL.split("adminEdit/")[1] ;
        var request = {
            method: 'GET',
            url: RequestData.baseUrl + "admins/" + userId + "/",
            headers: RequestData.headers
        };
        function successfulResponse(response) {
            $scope.adminsDetail = response.data;
           // console.log(response.data);
        };
        function errorResponse(response) {
           // console.log(response.data);
            $scope.adminsDetail = "Wrong";
            toastr.error('Error!', 'Account has not been Updated');
        };
        $http(request).then(successfulResponse, errorResponse);
       // console.log({scope: $scope, state: $state, stateParams: $stateParams});
       // console.log(request);

        // $scope.update = function () {
        //     var username = document.URL.split("userEdit/")[1] || document.URL.split("usersShow/")[1] ;
        //     var request = {
        //         method: 'PUT',
        //         url: RequestData.baseUrl + "/users/" + username + "/",
        //         headers: RequestData.headers,
        //         data: {
        //             "gender": $scope.userProfile.profile.user.gender,
        //             "first_name": $scope.userProfile.profile.user.first_name,
        //             "birthday": $scope.userProfile.profile.user.birthday,
        //             "date_joined": $scope.userProfile.profile.user.date_joined,
        //             "last_name": $scope.userProfile.profile.user.last_name,
        //             "phone": $scope.userProfile.profile.user.phone,
        //             "bio": $scope.userProfile.profile.bio,
        //             "address": $scope.userProfile.profile.address,
        //             "username": $scope.userProfile.profile.user.username,
        //             "email": $scope.userProfile.profile.user.email
        //         }
        //     };
        //
        //     console.log(request);
        //
        //     function successfulResponse(response) {
        //         console.log(response);
        //         toastr.success('Account has been Updated', 'Update success!', {
        //             progressBar: true,
        //             "closeButton": false,
        //             timeOut: '1000'
        //         });
        //     };
        //     function errorResponse(response) {
        //         console.log(response.data);
        //         toastr.error('Update Error!', 'Account has not been updated');
        //     };
        //     $http(request).then(successfulResponse, errorResponse);
        // };

        $scope.BanUser = function (id) {
            alert("Yakında eklenecek");
            alert("Kullanıcı Id: " + id);
        };
    }]);
app.controller('newAdmin', ['$scope', '$rootScope', '$window', '$http', '$filter', '$state', '$stateParams', 'RequestData', 'toastr',
    function ($scope, $rootScope, $window, $http,  $filter, $state, $stateParams, RequestData, toastr) {
        $scope.admin_password = "";
        $scope.confirm_password = "";

        $scope.addAdmin = function () {
            var request = {
                method: 'POST',
                url: RequestData.baseUrl + "admins/register/",
                headers: RequestData.headers,
                data: {
                    "first_name": $scope.admin.first_name,
                    "last_name": $scope.admin.last_name,
                    "email": $scope.admin.email,
                    "password": $scope.admin_password
                }
            };
            console.log(request);
            function successfulResponse(response) {
                toastr.success('Başarılı', 'Hesap oluşturuldu.', {
                    progressBar: true,
                    "closeButton": false,
                    timeOut: '2000'
                });
                //console.log(response);
            };
            function errorResponse(response) {
                toastr.error('Hata!', 'Hesap oluştulamadı');
                $state.go('home.admin');
               // console.log(response.data);
            };
            $http(request).then(successfulResponse, errorResponse);
        };
    }])
    .directive('passwordVerify', function() {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function(scope, elem, attrs, ngModel) {
                scope.$watch(attrs.ngModel, function() {
                    if (scope.confirm_password === scope.admin_password) {
                        scope.frm.confirm_password.$setValidity('passwordVerify', true);
                        scope.frm.admin_password.$setValidity('passwordVerify', true);
                    } else if (scope.confirm_password !== scope.admin_password) {
                        scope.frm.confirm_password.$setValidity('passwordVerify', false);
                        scope.frm.admin_password.$setValidity('passwordVerify', false);
                    }
                });
            }
        };
    });

