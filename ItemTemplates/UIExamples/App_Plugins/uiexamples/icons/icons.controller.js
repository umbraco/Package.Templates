(function () {
    'use strict';

    function exampleSectionIconsController(exampleResource, iconHelper, overlayService) {

        var vm = this;
        vm.loading = true;
        vm.linkAway = exampleResource.linkAway;

        vm.openIconOverlay = openIconOverlay;

        function init() {

            if (iconHelper.getAllIcons !== undefined) {

                iconHelper.getAllIcons().then(function (icons) {
                    vm.icons = icons;
                    vm.loading = false;
                });
            }
            else {
                iconHelper.getIcons().then(function (icons) {
                    vm.icons = icons.map(function (icon) {
                        return {
                            name: icon, svgString: null
                        };
                    });
                    vm.loading = false;
                });
            }
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