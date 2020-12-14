(function () {
    'use strict';

    function exampleSectionIconsController(exampleResource, iconHelper) {

        var vm = this;
        vm.linkAway = exampleResource.linkAway;

        function init() {

            var allIconMethod = iconHelper.getAllIcons;
            if (allIconMethod === undefined) {
                // pre v8.8 method is getIcons 
                allIconMethod = iconHelper.getIcons;
            }

            allIconMethod().then(function (icons) {

                vm.icons = icons;

                if (icons && icons.length > 0) {
                    var legacyIcons = icons.filter(function (icon) {
                        return !vm.icons.find(function (x) {
                            return x.name == icon;
                        });
                    }).map(function (icon) {
                        return {
                            name: icon,
                            svgString: null
                        };
                    });
                    vm.icons = legacyIcons.concat(vm.icons);
                }
            });
        }

        init();
    }

    angular.module('umbraco')
        .controller('exampleSectionIconsController', exampleSectionIconsController);
})();