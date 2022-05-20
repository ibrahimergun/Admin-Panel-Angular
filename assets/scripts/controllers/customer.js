'use strict';

app.controller('customerCTRL', ['$http', '$scope', '$cookies', '$timeout', '$rootScope', '$window', 'RequestData', '$state', '$stateParams', 'toastr', function ($http, $scope, $cookies, $timeout, $rootScope, $window, RequestData, $state, $stateParams, toastr) {

    $scope.model = new Pagination({
        http: $http,
        pageFilter: "&page=",
        popup: toastr,
        dataSearchUrl: "customers/?q=",
        dataClassUrl: "customers/?page=",
        dataClass: "customers",
        RequestData: RequestData
    }).initiate();
    $scope.searchButton = function () {
        $scope.search = $scope.searchText;
        // console.log($scope.search);
    };

    $scope.exportExcel = function () {
        var totalCustomer = $cookies.get('getcustomerCount');
        // console.log($cookies.get('getcustomerCount'));
        var request = {
            method: 'GET',
            url: RequestData.baseUrl + "customers/?page_item_count=" + totalCustomer,
            headers: RequestData.headers
        };
        function successfulResponse(response) {
            $timeout(function () {
                $scope.jsonToExport = response.data.customers;
                //console.log($scope.jsonToExport);
                // Prepare Excel data:
                $scope.fileName = "customerList";
                $scope.exportData = [];
                // Headers:
                $scope.exportData.push(["No", "Adı", "Soyadı", "Email", "Telefon", "Doğum Tarihi", "Cinsiyet", "Kredi", "Üyelik Tarihi", "Son Giris"]);
                // Data:
                angular.forEach($scope.jsonToExport, function (value, key) {
                    $scope.exportData.push([value.id, value.user.first_name, value.user.last_name, value.user.email, value.phone, value.user.birthday, value.gender, value.total_credit, value.user.date_joined, value.user.last_visit]);
                });
            }, 10);
        };
        function errorResponse(response) {
            console.log(response.data);
            $scope.customersList = "Wrong";
            toastr.error('Error!', 'Account has not been Updated');
        };
        $http(request).then(successfulResponse, errorResponse);
    };
}]);

app.directive('excelExport',
    function () {
        return {
            restrict: 'A',
            scope: {
                fileName: "@",
                data: "&exportData"
            },
            replace: true,
            template: '<button class="btn btn-primary" ng-click="download()"><i class="fa fa-file-excel-o"></i>&nbsp;&nbsp;Download  Excel&nbsp;&nbsp;<i class="fa fa-download"></i></button>',
            link: function (scope, element) {
                scope.download = function () {
                    function datenum(v, date1904) {
                        if (date1904) v += 1462;
                        var epoch = Date.parse(v);
                        return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000);
                    };
                    function getSheet(data, opts) {
                        var ws = {};
                        var range = {s: {c: 10000000, r: 10000000}, e: {c: 0, r: 0}};
                        for (var R = 0; R != data.length; ++R) {
                            for (var C = 0; C != data[R].length; ++C) {
                                if (range.s.r > R) range.s.r = R;
                                if (range.s.c > C) range.s.c = C;
                                if (range.e.r < R) range.e.r = R;
                                if (range.e.c < C) range.e.c = C;
                                var cell = {v: data[R][C]};
                                if (cell.v == null) continue;
                                var cell_ref = XLSX.utils.encode_cell({c: C, r: R});

                                if (typeof cell.v === 'number') cell.t = 'n';
                                else if (typeof cell.v === 'boolean') cell.t = 'b';
                                else if (cell.v instanceof Date) {
                                    cell.t = 'n';
                                    cell.z = XLSX.SSF._table[14];
                                    cell.v = datenum(cell.v);
                                }
                                else cell.t = 's';

                                ws[cell_ref] = cell;
                            }
                        }
                        if (range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range);
                        return ws;
                    };

                    function Workbook() {
                        if (!(this instanceof Workbook)) return new Workbook();
                        this.SheetNames = [];
                        this.Sheets = {};
                    }

                    var wb = new Workbook(), ws = getSheet(scope.data());
                    /* add worksheet to workbook */
                    wb.SheetNames.push(scope.fileName);
                    wb.Sheets[scope.fileName] = ws;
                    var wbout = XLSX.write(wb, {bookType: 'xlsx', bookSST: true, type: 'binary'});

                    function s2ab(s) {
                        var buf = new ArrayBuffer(s.length);
                        var view = new Uint8Array(buf);
                        for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
                        return buf;
                    }

                    saveAs(new Blob([s2ab(wbout)], {type: "application/octet-stream"}), scope.fileName + '.xlsx');
                };
            }
        };
    }
);

app.controller('editCustomer', ['$scope', '$rootScope', '$window', '$http', '$filter', '$state', '$stateParams', 'RequestData', 'toastr',
    function ($scope, $rootScope, $window, $http, $state, $filter, $stateParams, RequestData, toastr) {
        //$scope.$on('parentId', function (events, args) {
        // console.log(args);
        //});
        var userId = document.URL.split("customerEdit/")[1];
        var request = {
            method: 'GET',
            url: RequestData.baseUrl + "customers/" + userId + "/",
            headers: RequestData.headers
        };

        function successfulResponse(response) {
            $scope.customerDetail = response.data;
            // console.log(response.data);
        };
        function errorResponse(response) {
            // console.log(response.data);
            $scope.customerDetail = "Wrong";
            toastr.error('Error!', 'Account has not been Updated');
        };

        $http(request).then(successfulResponse, errorResponse);
        // console.log({scope: $scope, state: $state, stateParams: $stateParams});
        // console.log(request);

        $scope.BanUser = function (id) {
            alert("Yakında eklenecek");
            alert("Kullanıcı Id: " + id);
        };
        $scope.enabled = function () {
            alert("Kullanıcı Id: " + id);
        };
    }]);

app.controller('editCustomerCredit', ['$scope', '$rootScope', '$window', '$http', '$filter', '$state', '$stateParams', 'RequestData', 'toastr',
    function ($scope, $rootScope, $window, $http, $state, $filter, $stateParams, RequestData, toastr) {
        $scope.userId = document.URL.split("customerPurchases/")[1];
        $scope.model = new Pagination2({
            http: $http,
            pageFilter: "&page=",
            userFilter: "&customer=" + $scope.userId,
            popup: toastr,
            dataSearchUrl: "transactions/purchases/?last_x_purchases=",
            dataClassUrl: "transactions/purchases/?page=",
            dataClass: "purchases",
            RequestData: RequestData
        }).initiate();
        //console.log($scope.model);
    }]);
app.controller('editCustomerPayments', ['$scope', '$rootScope', '$window', '$http', '$filter', '$state', '$stateParams', 'RequestData', 'toastr',
    function ($scope, $rootScope, $window, $http, $state, $filter, $stateParams, RequestData, toastr) {
        $scope.userId = document.URL.split("customerPayments/")[1];
        $scope.model = new Pagination2({
            http: $http,
            pageFilter: "&page=",
            userFilter: "&customer=" + $scope.userId,
            popup: toastr,
            dataSearchUrl: "transactions/payments/?last_x_purchases=",
            dataClassUrl: "transactions/payments/?page=",
            dataClass: "payments",
            RequestData: RequestData
        }).initiate();
        //console.log($scope.model);
    }]);
app.controller('updatePackages', ['$scope', '$rootScope', '$window', '$http', '$filter', '$state', '$stateParams', 'RequestData', 'toastr',
    function ($scope, $rootScope, $window, $http, $filter, $state, $stateParams, RequestData, toastr) {
        $scope.ID = document.URL.split("updatePurchase/")[1];
        $scope.admin_password = "";
        $scope.confirm_password = "";
        $scope.addCredit = function () {
            var request = {
                method: 'POST',
                url: RequestData.baseUrl + "transactions/purchases/new/",
                headers: RequestData.headers,
                data: {
                    "customer": $scope.ID,
                    "platform": 3,
                    "reason": $scope.addCredit1.reason,
                    "credit_package": $scope.admin_password
                }
            };
            // console.log(request);
            function successfulResponse(response) {
                toastr.success('Başarılı', 'Kredi Yüklendi.', {
                    progressBar: true,
                    "closeButton": false,
                    timeOut: '2000'
                });
                //  console.log(response);
                window.location.reload();
            };
            function errorResponse(response) {
                toastr.error('Hata!', 'Kredi Yüklenemedi');
                $state.go('home.customer');
                //  console.log(response.data);
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
app.controller('updatePayments', ['$scope', '$rootScope', '$window', '$http', '$filter', '$state', '$stateParams', 'RequestData', 'toastr',
    function ($scope, $rootScope, $window, $http, $filter, $state, $stateParams, RequestData, toastr) {
        $scope.ID = document.URL.split("updatePayments/")[1];
        $scope.admin_password = "";
        $scope.confirm_password = "";
        $scope.addPayments = function () {
            var request = {
                method: 'POST',
                url: RequestData.baseUrl + "transactions/payments/new/",
                headers: RequestData.headers,
                data: {
                    "customer": $scope.ID,
                    "reason": $scope.payments.reason,
                    "interpretation": $scope.payments.interpretation,
                    "amount": $scope.admin_password
                }
            };
            //console.log(request);
            function successfulResponse(response) {
                toastr.success('Başarılı', 'Ödeme Eklendi.', {
                    progressBar: true,
                    "closeButton": false,
                    timeOut: '2000'
                });
                //console.log(response);
                window.location.reload();
            };
            function errorResponse(response) {
                toastr.error('Hata!', 'Ödeme Eklenemedi');
                $state.go('home.customer');
                // console.log(response.data);
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

