
(function () {
    'use strict';

    function buttons($scope,
        localizationService,
        overlayService,
        exampleResource) {

        var vm = this;
        vm.doStuff = doStuff;
        vm.linkAway = exampleResource.linkAway;

        /// umb-button-group ///

        vm.buttonGroup = {
            defaultButton: {
                labelKey: "buttons_groupedButton_default",
                hotKey: "ctrl+d",
                hotKeyWhenHidden: true,
                buttonStyle: 'success',
                handler: function () {
                    // do magic here
                    alert("you clicked the default button");
                }
            },
            subButtons: [
                {
                    labelKey: "buttons_groupedButton_subButtonA",
                    hotKey: "ctrl+a",
                    hotKeyWhenHidden: true,
                    handler: function () {
                        // do magic here
                        alert("you clicked a sub button A");
                    }
                },
                {
                    labelKey: "buttons_groupedButton_subButtonB",
                    hotKey: "ctrl+b",
                    hotKeyWhenHidden: true,
                buttonStyle: 'success',
                    handler: function () {
                        // do magic here
                        alert("you clicked a sub button B");
                    }
                }
            ]
        };

        ///

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