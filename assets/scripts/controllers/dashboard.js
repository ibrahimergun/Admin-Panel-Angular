app.controller('ctrlDashboard', ['$scope',  '$cookies', '$rootScope', '$window', '$http',  '$state', '$stateParams', 'RequestData', 'toastr',
    function ($scope, $cookies, $rootScope, $window, $http, $state,  $stateParams, RequestData, toastr) {
        var request = {
            method: 'GET',
            url: RequestData.baseUrl + "dashboard/",
            headers: RequestData.headers
        };
        function successfulResponse(response) {
            $scope.dashboard = response.data;
            $cookies.put('getcustomerCount', response.data.customer_count);
        };
        function errorResponse() {
            $scope.adminsDetail = "Wrong";
            toastr.error('Error!', 'Dashboard Güncellenemedi');
        };
        $http(request).then(successfulResponse, errorResponse);
        // console.log({scope: $scope, state: $state, stateParams: $stateParams});
        //console.log(request);
    }]);