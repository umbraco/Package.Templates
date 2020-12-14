(function () {
    'use strict';

    function layoutController($scope) {
        var vm = this;
        vm.loading = false; 

        vm.toggleLoading = toggleLoading;

        function toggleLoading() {
            vm.loading = !vm.loading;
        }
    }

    angular.module('umbraco')
        .controller('exampleLayoutController', layoutController);
})();