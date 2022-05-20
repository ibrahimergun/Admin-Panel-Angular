/**
 * Created by ibrahimergun on 25/07/2017.
 */
'use strict';

app.controller('interpretationsCTRL', ['$http', '$scope', '$rootScope', '$window', 'RequestData', '$state', '$stateParams', 'toastr', function ($http, $scope, $rootScope, $window, RequestData, $state, $stateParams, toastr) {
    //dataClassUrl: "interpretations/?request_date_begin=" + new Date().toISOString().slice(0, 16) +"&page=",

    $scope.model = new Pagination({
        http: $http,
        pageFilter: "&page=",
        popup: toastr,
        dataSearchUrl: "interpretations/?q=",
        dataClassUrl: "interpretations/?sort_by=date_descending&page=",
        dataClass: "interpretations",
        RequestData: RequestData
    }).initiate();
   // console.log($scope.model);

    $scope.searchButton = function () {
        $scope.search = $scope.searchText;
      //  console.log($scope.search);
    }

    $scope.BanUser = function (id) {
        alert("Yakında eklenecek");
        alert("Kullanıcı Id: " + id);
    };
}]);

app.controller('editInterpretations', ['$scope', '$rootScope', '$window', '$http', '$filter', '$state', '$stateParams', 'RequestData', 'toastr',
    function ($scope, $rootScope, $window, $http, $state, $filter, $stateParams, RequestData, toastr) {

        var userId = document.URL.split("editInterpretations/")[1] ;
        var request = {
            method: 'GET',
            url: RequestData.baseUrl + "interpretations/" + userId + "/",
            headers: RequestData.headers
        };
        function successfulResponse(response) {
            $scope.interpretationsDetail = response.data;
          //  console.log(response.data);
        };
        function errorResponse(response) {
            //console.log(response.data);
            $scope.interpretationsDetail = "Wrong";
            toastr.error('Error!', 'Account has not been Updated');
        };
        $http(request).then(successfulResponse, errorResponse);
       // console.log({scope: $scope, state: $state, stateParams: $stateParams});
       // console.log(request);
        $scope.BanUser = function (id) {
            alert("Yakında eklenecek");
            alert("Kullanıcı Id: " + id);
        };
    }]);




