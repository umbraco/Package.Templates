
(function () {
    'use strict';

    function simple($scope,
        localizationService,
        overlayService) {

        var vm = this;
        vm.doStuff = doStuff;

        ///

        function doStuff () {
            openOverlay();
        };

        function openOverlay() {

            localizationService.localizeMany(["exampleOverlayTitle", "exampleOverlayMessage"])
                .then(function (values) {

                    var overlay = {
                        title: values[0],
                        content: values[1],
                        disableBackdropClick: true,
                        disableEscKey: true,
                        submit: function () {
                            overlayService.close();
                        }
                    };

                    overlayService.confirmDelete(overlay);
                });
        }
    };

    angular.module('umbraco')
        .controller('exampleSectionSimpleController', simple);
})();
