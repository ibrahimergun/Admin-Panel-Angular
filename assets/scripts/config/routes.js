'use strict';

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('/',{
            url:'/',
            templateUrl:'views/login.html'
        })
        .state('home',{
            url:'/home',
            templateUrl:'views/home.html'
        })
        .state('home.dashboard',{
            url:'/dashboard',
            templateUrl:'views/dashboard.html'
        })
        .state('home.customer',{
            url:'/customer',
            templateUrl:'views/pages/customer/list.html'
        })
        .state('home.customerPayments',{
            url:'/customerPayments/{id}',
            templateUrl:'views/pages/customer/payments.html'
        })
        .state('home.customerPurchases',{
            url:'/customerPurchases/{id}',
            templateUrl:'views/pages/customer/purchases.html'
        })
        .state('home.customerEdit',{
            url:'/customerEdit/{id}',
            templateUrl:'views/pages/customer/edit.html'
        })
        .state('home.updatePurchase',{
            url:'/updatePurchase/{id}',
            templateUrl:'views/pages/customer/updatePurchase.html'
        })
        .state('home.historyPayments',{
            url:'/historyPayments/{id}',
            templateUrl:'views/pages/interpreter/historyPayments.html'
        })
        .state('home.updatePayments',{
            url:'/updatePayments/{id}',
            templateUrl:'views/pages/customer/updatePayments.html'
        })
        .state('home.interpreter',{
            url:'/interpreter',
            templateUrl:'views/pages/interpreter/list.html'
        })
        .state('home.interpreterEdit',{
            url:'/interpreterEdit/{id}',
            templateUrl:'views/pages/interpreter/edit.html'
        })
        .state('home.newInterpreter', {
            url: '/newInterpreter/',
            templateUrl:'views/pages/interpreter/new.html'
        })
        .state('home.interpretations', {
            url: '/interpretations/',
            templateUrl:'views/pages/interpretations/list.html'
        })
        .state('home.interpreterPayments',{
            url:'/interpreterPayments/{id}',
            templateUrl:'views/pages/interpreter/payments.html'
        })
        .state('home.updateinterpreterPayments',{
            url:'/updateinterpreterPayments/{id}',
            templateUrl:'views/pages/interpreter/updateinterpreterPayments.html'
        })
        .state('home.editInterpretations',{
            url:'/editInterpretations/{id}',
            templateUrl:'views/pages/interpretations/edit.html'
        })
        .state('home.admin',{
            url:'/admin',
            templateUrl:'views/pages/admin/list.html'
        })
        .state('home.adminEdit',{
            url:'/adminEdit/{id}',
            templateUrl:'views/pages/admin/edit.html'
        })
        .state('home.newAdmin', {
            url: '/newAdmin/',
            templateUrl:'views/pages/admin/new.html'
        })
        .state('home.profileAdmin', {
            url: '/adminProfile/{id}',
            templateUrl:'views/pages/admin/profile.html'
        })
        .state('home.transInterpreter',{
            url:'/transInterpreter',
            templateUrl:'views/pages/transaction/interpreter/historyPayments.html'
        })
        .state('home.transCustomer',{
            url:'/transCustomer',
            templateUrl:'views/pages/transaction/customer/payments.html'
        })
        .state('home.creditSettings',{
            url:'/creditSettings',
            templateUrl:'views/pages/settings/creditSettings.html'
        })
        .state('home.creditPackages',{
            url:'/creditPackages',
            templateUrl:'views/pages/settings/creditPackages.html'
        })
        .state('home.addPackages',{
            url:'/addPackages',
            templateUrl:'views/pages/settings/addPackages.html'
        })
});
app.run(function ($rootScope, $state) {
    $rootScope.$state = $state;
});