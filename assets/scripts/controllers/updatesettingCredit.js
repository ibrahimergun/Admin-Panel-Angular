'use strict';

app.controller('settingCredit', ['$scope', '$rootScope', '$window', '$http', '$filter', '$state', '$stateParams', 'RequestData', 'toastr',
    function ($scope, $rootScope, $window, $http, $state, $filter, $stateParams, RequestData, toastr) {

    $scope.updateSettingCredit = function () {
        var e = document.getElementById("creditType");
        if (e.options[e.selectedIndex].value === ""){
            $scope.currency = "";
        }
        else {
            $scope.currency = e.options[e.selectedIndex].value;
        }

        var request = {
                method: 'POST',
                url: RequestData.baseUrl + "transactions/credit-values/new/",
                headers: RequestData.headers,
                data: {
                    "currency": $scope.currency,
                    "value": $scope.settings.creditValue
                }
            };
           // console.log(request);
            function successfulResponse(response) {
                toastr.success('Başarılı', 'Kredi Değeri Güncellendi!', {
                    progressBar: true,
                    "closeButton": false,
                    timeOut: '1000'
                });
               // console.log(response);
                $scope.settings.creditValue = "";
            };
            function errorResponse() {
                toastr.error('Hata!', 'Kredi Değeri Güncellenemedi', {
                    progressBar: true,
                    "closeButton": false,
                    timeOut: '2000'
                });
            };
            $http(request).then(successfulResponse, errorResponse);
        };
    }]);

