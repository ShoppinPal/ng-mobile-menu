angular.module('super-awesome-demo',['shoppinpal.mobile-menu'])
    .config(['$routeProvider',function($routeProvider){
        $routeProvider
            .when("/skinny", {
                templateUrl: "skinny.html"//,
                //controller: "SkinnyCtrl"
            })
            .when("/wide", {
                templateUrl: "wide.html"//,
                //controller: "WideCtrl"
            })
            .otherwise({
                redirectTo: "/skinny"
            });
    }]);
//    .controller('SkinnyCtrl', ['$scope', '$routeParams', DummyCtrl])
//    .controller('WideCtrl', ['$scope', '$routeParams', DummyCtrl]);
//
//function DummyCtrl($scope, $routeParams) {
//
//}