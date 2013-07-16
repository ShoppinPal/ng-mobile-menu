angular.module('shoppinpal.mobile-menu', [])
    .run(['$rootScope', function($rootScope){
        console.log($rootScope);
        $rootScope.$on("$locationChangeStart", function(scope, future, current){
            if(future.indexOf('#sp-nav', future.length - '#sp-nav'.length) !== -1){
                scope.preventDefault();
            }
            if(future.indexOf('#sp-page', future.length - '#sp-page'.length) !== -1){
                scope.preventDefault();
            }
        });
    }]);