
(function () {
    'use strict';

    function buttons($scope,
        localizationService,
        overlayService,
        exampleResource) {

        var vm = this;
        vm.doStuff = doStuff;
        vm.linkAway = exampleResource.linkAway;

        vm.buttonGroup = {
            defaultButton: {
                labelKey: "buttons_groupedDefaultLabel",
                hotKey: "ctrl+d",
                hotKeyWhenHidden: true,
                buttonStyle: 'success',
                handler: function () {
                    // do magic here
                    alert("you clicked Grouped Button");
                }
            },
            subButtons: [
                {
                    labelKey: "buttons_groupedSubButtonALabel",
                    hotKey: "ctrl+a",
                    hotKeyWhenHidden: true,
                    handler: function () {
                        // do magic here
                        alert("you clicked Sub Button A");
                    }
                },
                {
                    labelKey: "buttons_groupedSubButtonBLabel",
                    hotKey: "ctrl+b",
                    hotKeyWhenHidden: true,
                    buttonStyle: 'success',
                    handler: function () {
                        // do magic here
                        alert("you clicked Sub Button B");
                    }
                }
            ]
        };

        function doStuff () {
            openOverlay();
        };

        function openOverlay() {

            localizationService.localizeMany(["buttonsOverlayTitle", "buttonsOverlayMessage"])
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
        .controller('buttonsSectionController', buttons);
})();