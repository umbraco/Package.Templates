
(function () {
    'use strict';

    function umbbox($scope, exampleResource) {
        var vm = this;
        vm.linkAway = exampleResource.linkAway;
    };

    angular.module('umbraco')
        .controller('umbboxController', umbbox);
})();