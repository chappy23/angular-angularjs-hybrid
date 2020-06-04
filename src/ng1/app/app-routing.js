(function () {
    "use strict";

    angular
        .module("demoApp")
        .config(configState);

    configState.$inject = ["$stateProvider", "$locationProvider"];

    function configState($stateProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $stateProvider
            .state("album",
                {
                    templateUrl: "ng1/app/album/album.html",
                    controller: "albumController",
                    controllerAs: "vm",
                    url: "/album"
                })
            .state("pricing",
                {
                    templateUrl: "ng1/app/pricing/pricing.html",
                    controller: "pricingController",
                    controllerAs: "vm",
                    url: "/pricing"
                })
            .state("home", {
                url: "/",
                template: ""
            })
            .state("checkout", {
                url: "/checkout",
                template: ""
            });
    }
}());
