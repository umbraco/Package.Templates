(function () {
    'use strict';

    function overlayController() {

        var vm = this;

        vm.colors = [
            { name: "Black", value: "color-black", default: true },
            { name: "Blue Grey", value: "color-blue-grey" },
            { name: "Grey", value: "color-grey" },
            { name: "Brown", value: "color-brown" },
            { name: "Blue", value: "color-blue" },
            { name: "Light Blue", value: "color-light-blue" },
            { name: "Indigo", value: "color-indigo" },
            { name: "Purple", value: "color-purple" },
            { name: "Deep Purple", value: "color-deep-purple" },
            { name: "Cyan", value: "color-cyan" },
            { name: "Green", value: "color-green" },
            { name: "Light Green", value: "color-light-green" },
            { name: "Lime", value: "color-lime" },
            { name: "Yellow", value: "color-yellow" },
            { name: "Amber", value: "color-amber" },
            { name: "Orange", value: "color-orange" },
            { name: "Deep Orange", value: "color-deep-orange" },
            { name: "Red", value: "color-red" },
            { name: "Pink", value: "color-pink" }
        ];

    }

    angular.module('umbraco')
        .controller('exampleSectionIconsOverlayController', overlayController);
})();