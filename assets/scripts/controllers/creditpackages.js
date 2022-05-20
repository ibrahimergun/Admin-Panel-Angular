/**
 * Created by Diablo on 18.10.2017.
 */
app.controller('showcreditPackages', ['$scope', '$window', '$http', '$filter', '$state', '$stateParams', 'RequestData', 'toastr',
    function ($scope, $window, $http, $state, $filter, $stateParams, RequestData, toastr) {
        $scope.model = new Pagination2({
            http: $http,
            pageFilter: "&page=",
            popup: toastr,
            userFilter: "",
            dataSearchUrl: "credit-packages/",
            dataClassUrl: "credit-packages/?page=",
            dataClass: "credit_packages",
            RequestData: RequestData
        }).initiate();

        $scope.delPackages = function (id) {
            var request = {
                method: 'DELETE',
                url: RequestData.baseUrl + "credit-packages/" + id + "/",
                headers: RequestData.headers
            };
            console.log(request);
            function successfulResponse(response) {
                window.location.reload();
                toastr.success('Başarılı', 'Paket Silindi.', {
                    progressBar: true,
                    "closeButton": false,
                    timeOut: '3000'
                });
                //    console.log(response);
            };
            function errorResponse(response) {
                toastr.error('Hata!', 'Paket Silinemedi');
                $state.go('home.creditPackages');
                //   console.log(response.data);
            };
            $http(request).then(successfulResponse, errorResponse);
        }
    }]);
app.controller('addPackages', ['$scope', '$window', '$http',  '$state', '$filter', '$stateParams', 'RequestData', 'toastr',
    function ($scope, $window, $http, $state, $filter, $stateParams, RequestData, toastr) {
    $scope.addPackages = function () {
        var request = {
            method: 'POST',
            url: RequestData.baseUrl + "credit-packages/new/",
            headers: RequestData.headers,
            data: {
                "amount": $scope.credit.amount,
                "cost": $scope.credit.cost,
                "currency": $scope.credit.currency,
                "codename": $scope.credit.codename,
                "is_active": $scope.credit.status === "Aktif" ? true : false
            }
        };
        console.log(request);
        function successfulResponse(response) {
            $state.go('home.creditPackages');
            window.location.reload();
            toastr.success('Başarılı', 'Paket Eklendi.', {
                progressBar: true,
                "closeButton": false,
                timeOut: '3000'
            });
            //    console.log(response);
        };
        function errorResponse(response) {
            toastr.error('Hata!', 'Paket Eklenemedi');
            $state.go('home.creditPackages');
            //   console.log(response.data);
        };
        $http(request).then(successfulResponse, errorResponse);
    }
    }]);
