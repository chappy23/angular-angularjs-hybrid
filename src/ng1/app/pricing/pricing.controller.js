(function () {
    "use strict";

    angular
        .module("demoApp")
        .controller("pricingController", pricingController);

    pricingController.$inject = [];

    function pricingController() {
        var vm = this;

        vm.message = "Welcome to the pricing page.";
    }
}());
