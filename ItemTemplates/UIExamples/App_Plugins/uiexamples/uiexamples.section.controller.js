
(function () {
    'use strict';

    function exampleSection($scope) {

        var vm = this;

        vm.page = {
            title: 'Examples',
            description: 'UI Examples',
            navigation: [
                {
                    'name': 'Info',
                    'alias': 'default',
                    'icon': 'icon-sprout',
                    'view': Umbraco.Sys.ServerVariables.umbracoSettings.appPluginsPath + '/uiexamples/info.html',
                    'active': true
                },
                {
                    'name': 'Umbbox',
                    'alias': 'umbbox',
                    'icon': 'icon-box',
                    'view': Umbraco.Sys.ServerVariables.umbracoSettings.appPluginsPath + '/uiexamples/umbbox/umbbox.html'
                },
                {
                    'name': 'Layout',
                    'alias': 'layout',
                    'icon': 'icon-layout',
                    'view': Umbraco.Sys.ServerVariables.umbracoSettings.appPluginsPath + '/uiexamples/layout/layout.html'
                },
                {
                    'name': 'Tabs',
                    'alias': 'tabs',
                    'icon': 'icon-tab',
                    'view': Umbraco.Sys.ServerVariables.umbracoSettings.appPluginsPath + '/uiexamples/tabs/tabs.html',
                },
                {
                    'name': 'Icons',
                    'alias': 'icons',
                    'icon': 'icon-picture',
                    'view': Umbraco.Sys.ServerVariables.umbracoSettings.appPluginsPath + '/uiexamples/icons/icons.html',
                },
                {
                    'name': 'Buttons',
                    'alias': 'buttons',
                    'icon': 'icon-checkbox-empty',
                    'view': Umbraco.Sys.ServerVariables.umbracoSettings.appPluginsPath + '/uiexamples/buttons/buttons.html',
                },
            ]
        }

    };

    angular.module('umbraco')
        .controller('exampleSectionController', exampleSection);
})();
