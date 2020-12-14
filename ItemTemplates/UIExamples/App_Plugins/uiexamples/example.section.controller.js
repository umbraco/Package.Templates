
(function () {
    'use strict';

    function exampleSection($scope) {

        var vm = this;

        vm.page = {
            title: 'Examples',
            description: 'UI Examples',
            navigation: [
                {
                    'name': 'UI Examples',
                    'alias': 'default',
                    'icon': 'icon-sprout',
                    'view': Umbraco.Sys.ServerVariables.umbracoSettings.appPluginsPath + '/uiexamples/default.html',
                    'active': true
                },
                {
                    'name': 'Icons',
                    'alias': 'icons',
                    'icon': 'icon-picture',
                    'view': Umbraco.Sys.ServerVariables.umbracoSettings.appPluginsPath + '/uiexamples/icons/icons.html',
                },
                {
                    'name': 'simple',
                    'alias': 'simple',
                    'icon': 'icon-checkbox-empty',
                    'view': Umbraco.Sys.ServerVariables.umbracoSettings.appPluginsPath + '/uiexamples/Simple/simple.html',
                },
                {
                    'name': 'tabs',
                    'alias': 'tabs',
                    'icon': 'icon-tab',
                    'view': Umbraco.Sys.ServerVariables.umbracoSettings.appPluginsPath + '/uiexamples/tabs/tabs.html',
                },
                {
                    'name': 'umbbox',
                    'alias': 'umbbox',
                    'icon': 'icon-box',
                    'view': Umbraco.Sys.ServerVariables.umbracoSettings.appPluginsPath + '/uiexamples/umbbox/umbbox.html'
                },
                {
                    'name': 'layout',
                    'alias': 'layout',
                    'icon': 'icon-layout',
                    'view': Umbraco.Sys.ServerVariables.umbracoSettings.appPluginsPath + '/uiexamples/layout/layout.html'
                },

            ]
        }

    };

    angular.module('umbraco')
        .controller('exampleSectionController', exampleSection);
})();
