(function () {
    "use strict";

    angular
        .module("demoApp")
        .controller("albumController", albumController);

    albumController.$inject = [];

    function albumController() {
        var vm = this;

        vm.message = "Welcome to the album page.";
    }
}());
