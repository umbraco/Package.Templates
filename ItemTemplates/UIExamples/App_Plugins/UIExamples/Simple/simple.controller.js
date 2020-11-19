
(function () {
    'use strict';

    function simple($scope) {

        var vm = this;

        vm.doStuff = function () {
            alert("hello world");
        };

    };

    angular.module('umbraco')
        .controller('exampleSectionSimpleController', simple);
})();