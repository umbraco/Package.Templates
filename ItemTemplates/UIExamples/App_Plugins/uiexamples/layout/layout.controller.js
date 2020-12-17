(function () {
    'use strict';

    function layoutController($scope, exampleResource) {
        var vm = this;
        vm.loading = false; 

        vm.toggleLoading = toggleLoading;

        function toggleLoading() {
            vm.loading = !vm.loading;
        }
        
        vm.linkAway = exampleResource.linkAway;
    }

    angular.module('umbraco')
        .controller('exampleLayoutController', layoutController);
})();