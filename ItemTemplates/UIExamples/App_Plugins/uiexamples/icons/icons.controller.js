(function () {
    'use strict';

    function exampleSectionIconsController(exampleResource, iconHelper) {

        var vm = this;
        vm.linkAway = exampleResource.linkAway;

        function init() {
            iconHelper.getAllIcons().then(function (icons) {
                vm.icons = icons;

                //copied from IconPickerController in umbraco.controllers.js
                iconHelper.getIcons().then(function (icons) {
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
            });
        }

        init(); 
    }

    angular.module('umbraco')
        .controller('exampleSectionIconsController', exampleSectionIconsController);
})();