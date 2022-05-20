
/**
 * Created by ibrahimergun on 28/07/2017.
 */
app.controller('editCredit', ['$scope', '$rootScope', '$window', '$http', '$filter', '$state', '$stateParams', 'RequestData', 'toastr',
    function ($scope, $rootScope, $window, $http, $state, $filter, $stateParams, RequestData, toastr) {

        var userId = document.URL.split("interpreterEdit/")[1];
        var request = {
            method: 'GET',
            url: RequestData.baseUrl + "interpreters/" + userId + "/",
            headers: RequestData.headers
        };
        function successfulResponse(response) {
            $scope.interpreterDetail = response.data;
          //  console.log(response.data);
        };
        function errorResponse(response) {
          //  console.log(response.data);
            $scope.interpreterDetail = "Wrong";
            toastr.error('Error!', 'Account has not been Updated');
        };
        $http(request).then(successfulResponse, errorResponse);
       // console.log({scope: $scope, state: $state, stateParams: $stateParams});
       // console.log(request);
        $scope.sirada = function () {
            alert("Yakında eklenecek");
            alert("Kullanıcı Id: " + userId);
        };

        $scope.updateCreditDeneme = function () {

            $scope.dream = $scope.interpreterDetail.credit.dream;
            if (($scope.checked = true) && ($scope.dream !== null) && ($scope.dream !== "") && ($scope.dream.length !== 0) && ($scope.dream !== undefined)) {
                var userId = document.URL.split("interpreterEdit/")[1];
                var request = {
                    method: 'POST',
                    url: RequestData.baseUrl + "interpreters/" + userId + "/interpretation-prices/new/",
                    headers: RequestData.headers,
                    data: {
                        "credit": $scope.interpreterDetail.credit.dream,
                        "category_type": 1
                    }
                };
               // console.log(request);
                function successfulResponse(response) {
                    toastr.success('Başarılı', 'Kredi bilgisi güncellendi!', {
                        progressBar: true,
                        "closeButton": false,
                        timeOut: '1000'
                    });
                   // console.log(response);
                    window.location.reload();
                }

                function errorResponse(response) {
                    toastr.error('Hata!', 'Güncellenemedi', {
                        progressBar: true,
                        "closeButton": false,
                        timeOut: '2000'
                    });
                    $state.go('home.interpreter');
                    /*  (clear: clear,
                     error: error,
                     info: info,
                     remove: remove,
                     success: success,
                     warning: warning)
                     toastr.success('demo@minovate.com, pass: minovate', 'Login default data!', {progressBar: true, "closeButton": false, timeOut: '15000'});
                     */
                   // console.log(response.data);
                };
                $http(request).then(successfulResponse, errorResponse);
            }

            $scope.graphology = $scope.interpreterDetail.credit.graphology;
            if (($scope.checked1 = true) && ($scope.graphology !== null) && ($scope.graphology !== "") &&  ($scope.graphology.length !== 0) && ($scope.graphology  !== undefined)) {
                var userId = document.URL.split("interpreterEdit/")[1];
                var request = {
                    method: 'POST',
                    url: RequestData.baseUrl + "interpreters/" + userId + "/interpretation-prices/new/",
                    headers: RequestData.headers,
                    data: {
                        "credit": $scope.interpreterDetail.credit.graphology,
                        "category_type": 2
                    }
                };
               // console.log(request);
                function successfulResponse(response) {
                    toastr.success('Başarılı', 'Kredi bilgisi güncellendi!', {
                        progressBar: true,
                        "closeButton": false,
                        timeOut: '1000'
                    });
                  //  console.log(response);
                    window.location.reload();
                };
                function errorResponse(response) {
                    toastr.error('Hata!', 'Güncellenemedi', {
                        progressBar: true,
                        "closeButton": false,
                        timeOut: '2000'
                    });
                    $state.go('home.interpreter');
                    /*  (clear: clear,
                     error: error,
                     info: info,
                     remove: remove,
                     success: success,
                     warning: warning)
                     toastr.success('demo@minovate.com, pass: minovate', 'Login default data!', {progressBar: true, "closeButton": false, timeOut: '15000'});
                     */
                   // console.log(response.data);
                };
                $http(request).then(successfulResponse, errorResponse);
            }

            $scope.yildizname = $scope.interpreterDetail.credit.yildizname;
            if (($scope.checked2 = true) && ($scope.physionomy !== null) && ($scope.physionomy !== "") && ($scope.physionomy.length !== 0) && ($scope.physionomy  !== undefined)) {
                var userId = document.URL.split("interpreterEdit/")[1];
                var request = {
                    method: 'POST',
                    url: RequestData.baseUrl + "interpreters/" + userId + "/interpretation-prices/new/",
                    headers: RequestData.headers,
                    data: {
                        "credit": $scope.interpreterDetail.credit.physionomy,
                        "category_type": 3
                    }
                };
             //   console.log(request);
                function successfulResponse(response) {
                    toastr.success('Başarılı', 'Kredi bilgisi güncellendi!', {
                        progressBar: true,
                        "closeButton": false,
                        timeOut: '1000'
                    });
                 //   console.log(response);
                    window.location.reload();
                };
                function errorResponse(response) {
                    toastr.error('Hata!', 'Güncellenemedi', {
                        progressBar: true,
                        "closeButton": false,
                        timeOut: '2000'
                    });
                    $state.go('home.interpreter');
                    /*  (clear: clear,
                     error: error,
                     info: info,
                     remove: remove,
                     success: success,
                     warning: warning)
                     toastr.success('demo@minovate.com, pass: minovate', 'Login default data!', {progressBar: true, "closeButton": false, timeOut: '15000'});
                     */
                   // console.log(response.data);
                };
                $http(request).then(successfulResponse, errorResponse);
            }

            $scope.physionomy = $scope.interpreterDetail.credit.physionomy;
            if (($scope.checked3 = true) && ($scope.yildizname !== null) && ($scope.yildizname !== "") && ($scope.yildizname.length !== 0) && ($scope.yildizname  !== undefined)) {
                var userId = document.URL.split("interpreterEdit/")[1];
                var request = {
                    method: 'POST',
                    url: RequestData.baseUrl + "interpreters/" + userId + "/interpretation-prices/new/",
                    headers: RequestData.headers,
                    data: {
                        "credit": $scope.interpreterDetail.credit.yildizname,
                        "category_type": 4
                    }
                };
               // console.log(request);
                function successfulResponse(response) {
                    toastr.success('Başarılı', 'Kredi bilgisi güncellendi!', {
                        progressBar: true,
                        "closeButton": false,
                        timeOut: '1000'
                    });
                  //  console.log(response);
                    window.location.reload();
                };
                function errorResponse(response) {
                    toastr.error('Hata!', 'Güncellenemedi', {
                        progressBar: true,
                        "closeButton": false,
                        timeOut: '2000'
                    });
                    $state.go('home.interpreter');
                    /*  (clear: clear,
                     error: error,
                     info: info,
                     remove: remove,
                     success: success,
                     warning: warning)
                     toastr.success('demo@minovate.com, pass: minovate', 'Login default data!', {progressBar: true, "closeButton": false, timeOut: '15000'});
                     */
                  //  console.log(response.data);
                };
                $http(request).then(successfulResponse, errorResponse);
            }
        };
    }]);
