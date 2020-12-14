(function () {
    'use strict';

    function exampleSectionIconsController(exampleResource, iconHelper, overlayService) {

        var vm = this;
        vm.linkAway = exampleResource.linkAway;

        vm.openIconOverlay = openIconOverlay;

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

        /////////

        function openIconOverlay(icon) {

            var options = {
                view: Umbraco.Sys.ServerVariables.umbracoSettings.appPluginsPath + '/uiexamples/icons/iconOverlay.html',
                title: icon.name,
                content: icon.name,
                icon: icon,
                hideSubmitButton: true,
                close: function () {
                    overlayService.close();
                }
            }
            overlayService.open(options);
        }

        init();
    }

    angular.module('umbraco')
        .controller('exampleSectionIconsController', exampleSectionIconsController);
})();