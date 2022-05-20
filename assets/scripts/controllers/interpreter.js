'use strict';

app.controller('interpreterCTRL', ['$http', '$scope', '$rootScope', '$window', 'RequestData', '$state', '$stateParams', 'toastr', function ($http, $scope, $rootScope, $window, RequestData, $state, $stateParams, toastr) {

    $scope.model = new Pagination({
        http: $http,
        pageFilter: "&page=",
        popup: toastr,
        dataSearchUrl: "interpreters/?q=",
        dataClassUrl: "interpreters/?page=",
        dataClass: "interpreters",
        RequestData: RequestData
    }).initiate();
    // console.log($scope.model);

    $scope.searchButton = function () {
        $scope.search = $scope.searchText;
        // console.log($scope.search);
    };
}]);

app.controller('editInterpreter', ['$scope', 'Upload', '$window', '$http', '$filter', '$state', '$stateParams', 'RequestData', 'toastr',
    function ($scope, Upload ,  $window, $http, $state, $filter, $stateParams, RequestData, toastr) {
        var userId = document.URL.split("interpreterEdit/")[1];
        var request = {
            method: 'GET',
            url: RequestData.baseUrl + "interpreters/" + userId + "/",
            headers: RequestData.headers
        };

        function successfulResponse(response) {
            $scope.interpreterDetail = response.data;
            // console.log(response.data);
        };
        function errorResponse(response) {
            // console.log(response.data);
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
        $scope.updateCredit = function () {
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
            };
            function errorResponse(response) {
                toastr.error('Güncellenemedi', 'Telefon Numarasını Kontrol Ediniz', {
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
        };
        $scope.updateCredit1 = function () {
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
        };
        $scope.updateCredit2 = function () {
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
            //  console.log(request);
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
                //  console.log(response.data);
            };
            $http(request).then(successfulResponse, errorResponse);
        };
        $scope.updateCredit3 = function () {
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
        };
        $scope.delInterpretation = function (priceId) {
            var request = {
                method: 'Delete',
                url: RequestData.baseUrl + "interpreters/" + userId + "/interpretation-prices/" + priceId,
                headers: RequestData.headers,
            };
            //console.log(request);
            function successfulResponse(response) {
                toastr.success('Başarılı', 'Yorum Silindi', {
                    progressBar: true,
                    "closeButton": false,
                    timeOut: '1000'
                });
                //  console.log(response);
                window.location.reload();
            };
            function errorResponse(response) {
                toastr.error('Hata!', 'Yorum Silinemedi', {
                    progressBar: true,
                    "closeButton": false,
                    timeOut: '2000'
                });
                //  console.log(response.data);
            };
            $http(request).then(successfulResponse, errorResponse);
        };

        $scope.submitPhoto = function (){
            var username = document.URL.split("interpreterEdit/")[1];
            var requestPhoto = {
                method: 'POST',
                url: RequestData.baseUrl + "profile-photo/" ,
                headers: RequestData.headers,
                data: {
                    "interpreter_id": "1",
                    "file": $scope.interpreterPhoto
                }
            };
            function successfulResponse(responsePhoto) {
                toastr.success('Başarılı', 'Fotoğraf güncellendi!', {
                    progressBar: true,
                    "closeButton": false,
                    timeOut: '2000'
                });
                //  console.log(response);
                window.location.reload();
            };
            function errorResponse(responsePhoto) {
                toastr.error('Hata!', 'Fotoğraf Güncellenemedi', {
                    progressBar: true,
                    "closeButton": false,
                    timeOut: '2000'
                });
            };
            $http(requestPhoto).then(successfulResponse, errorResponse);
            console.log(requestPhoto);
            //window.location.reload();
        };

        $scope.updateInterpreter = function () {
            var username = document.URL.split("interpreterEdit/")[1];
            var request = {
                method: 'PUT',
                url: RequestData.baseUrl + "interpreter/edit/?interpreter=" + username ,
                headers: RequestData.headers,
                data: {
                    "nickname": $scope.interpreterDetail.nickname,
                    "first_name": $scope.interpreterDetail.user.first_name,
                    "last_name": $scope.interpreterDetail.user.last_name,
                    "birthday": $scope.interpreterDetail.user.birthday,
                    "phone": $scope.interpreterDetail.phone,
                    "profile_description": $scope.interpreterDetail.profile_description,
                    "iban_number": $scope.interpreterDetail.iban_number
                }
            };
            function successfulResponse(response) {
                toastr.success('Başarılı', 'Yorumcu bilgisi güncellendi!', {
                    progressBar: true,
                    "closeButton": false,
                    timeOut: '2000'
                });
                //  console.log(response);
                // window.location.reload();
            };
            function errorResponse(response) {
                toastr.error('Hata!', 'Yorumcu Bilgisi Güncellenemedi', {
                    progressBar: true,
                    "closeButton": false,
                    timeOut: '2000'
                });
            };
            $http(request).then(successfulResponse, errorResponse);

            //window.location.reload();

            console.log(request);
        };

    }]);
app.controller('newInterpreter', ['$scope', '$rootScope', '$window', '$http', '$filter', '$state', '$stateParams', 'RequestData', 'toastr',
    function ($scope, $rootScope, $window, $http, $filter, $state, $stateParams, RequestData, toastr) {
        $scope.addInterpreter = function () {
            var request = {
                method: 'POST',
                url: RequestData.baseUrl + "interpreters/register/",
                headers: RequestData.headers,
                data: {
                    "first_name": $scope.interpreter.first_name,
                    "last_name": $scope.interpreter.last_name,
                    "email": $scope.interpreter.email
                }
            };
            //  console.log(request);
            function successfulResponse(response) {
                toastr.success('Başarılı', 'Hesap oluşturuldu.', {
                    progressBar: true,
                    "closeButton": false,
                    timeOut: '2000'
                });
                //   console.log(response);
            };
            function errorResponse(response) {
                toastr.error('Hata!', 'Hesap oluştulamadı');
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
        };
    }]);
app.controller('editinterpreterPayments', ['$scope', '$rootScope', '$window', '$http', '$filter', '$state', '$stateParams', 'RequestData', 'toastr',
    function ($scope, $rootScope, $window, $http, $state, $filter, $stateParams, RequestData, toastr) {
        $scope.userId = document.URL.split("interpreterPayments/")[1];
        $scope.model = new Pagination2({
            http: $http,
            pageFilter: "&page=",
            userFilter: "&interpreter=" + $scope.userId,
            popup: toastr,
            dataSearchUrl: "transactions/interpreter-payments/?last_x_purchases=",
            dataClassUrl: "transactions/interpreter-payments/?page=",
            dataClass: "interpreter_payments",
            RequestData: RequestData
        }).initiate();
    }]);
app.controller('updateinterpreterPayments', ['$scope', '$rootScope', '$window', '$http', '$filter', '$state', '$stateParams', 'RequestData', 'toastr',
    function ($scope, $rootScope, $window, $http, $filter, $state, $stateParams, RequestData, toastr) {
        $scope.ID = document.URL.split("updateinterpreterPayments/")[1];
        $scope.admin_password = "";
        $scope.confirm_password = "";
        //  console.log($scope.admin_password.length)
        var currentTime = new Date().toISOString();
        // console.log(currentTime)
        $scope.addPayments = function () {
            var request = {
                method: 'POST',
                url: RequestData.baseUrl + "transactions/interpreter-payments/new/",
                headers: RequestData.headers,
                data: {
                    "interpreter": $scope.ID,
                    "payment_date": currentTime,
                    "paid_currency": $scope.paid_currency,
                    "credit_amount": $scope.admin_password
                    //"paid_amount": 100
                }
            };
            //   console.log(request);
            function successfulResponse(response) {
                window.location.reload();
                toastr.success('Başarılı', 'Ödeme eklendi.', {
                    progressBar: true,
                    "closeButton": false,
                    timeOut: '3000'
                });
                //    console.log(response);
            };
            function errorResponse(response) {
                toastr.error('Hata!', 'Ödeme Eklenemedi');
                $state.go('home.interpreter');
                //   console.log(response.data);
            };
            $http(request).then(successfulResponse, errorResponse);
        };
    }])
    .directive('passwordVerify', function () {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function (scope, elem, attrs, ngModel) {
                scope.$watch(attrs.ngModel, function () {
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
app.controller('edit1interpreterPayments', ['$scope', '$rootScope', '$window', '$http', '$filter', '$state', '$stateParams', 'RequestData', 'toastr',
    function ($scope, $rootScope, $window, $http, $state, $filter, $stateParams, RequestData, toastr) {
        $scope.userId = document.URL.split("historyPayments/")[1];
        $scope.model = new Pagination2({
            http: $http,
            pageFilter: "&page=",
            userFilter: "&interpreter=" + $scope.userId,
            popup: toastr,
            dataSearchUrl: "transactions/payments/?last_x_purchases=",
            dataClassUrl: "transactions/payments/?page=",
            dataClass: "payments",
            RequestData: RequestData
        }).initiate();
        //console.log($scope.model);
    }]);

