
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
                },
                {
                    'name': 'basic',
                    'alias': 'basic',
                    'icon': 'icon-sprout color-green',
                    'view': Umbraco.Sys.ServerVariables.umbracoSettings.appPluginsPath + '/uiexamples/basic.html',
                },
                {
                    'name': 'simple',
                    'alias': 'simple',
                    'icon': 'icon-sprout color-green',
                    'view': Umbraco.Sys.ServerVariables.umbracoSettings.appPluginsPath + '/uiexamples/Simple/simple.html',
                    'active': true
                },
                {
                    'name': 'tabs',
                    'alias': 'tabs',
                    'icon': 'icon-tab color-green',
                    'view': Umbraco.Sys.ServerVariables.umbracoSettings.appPluginsPath + '/uiexamples/tabs/tabs.html',
                },
                {
                    'name': 'umbbox',
                    'alias': 'umbbox',
                    'icon': 'icon-box',
                    'view': Umbraco.Sys.ServerVariables.umbracoSettings.appPluginsPath + '/uiexamples/umbbox/umbbox.html'
                }
            ]
        }

    };

    angular.module('umbraco')
        .controller('exampleSectionController', exampleSection);
})();
