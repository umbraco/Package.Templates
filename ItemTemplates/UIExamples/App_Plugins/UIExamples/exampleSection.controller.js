
(function () {
    'use strict';

    function exampleSection($scope) {

        var vm = this;

        vm.page = {
            title: 'Examples',
            description: 'UI Examples',
            navigation: [
                {
                    'name': 'Icons',
                    'alias': 'icons',
                    'icon': 'icon-cupcake',
                    'view': Umbraco.Sys.ServerVariables.umbracoSettings.appPluginsPath + '/uiexamples/icons.html',
                    'active': true
                },
                {
                    'name': 'basic',
                    'alias': 'basic',
                    'icon': 'icon-sprout color-green',
                    'view': Umbraco.Sys.ServerVariables.umbracoSettings.appPluginsPath + '/uiexamples/basic.html',
                }
            ]
        }

    };

    angular.module('umbraco')
        .controller('exampleSectionController', exampleSection);
})();