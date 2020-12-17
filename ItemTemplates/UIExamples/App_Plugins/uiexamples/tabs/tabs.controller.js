(function () {
    'use strict';

    function tabsController($scope, $timeout, eventsService, exampleResource) {

        var vm = this;

        vm.loading = true;
        vm.tabs = [];
        vm.changeTab = changeTab;

        vm.linkAway = exampleResource.linkAway;

        function changeTab(selectedTab) {
            vm.tabs.forEach(function (tab) {
                tab.active = false;
            });
            selectedTab.active = true;
        };

        eventsService.on("app.tabChange", function (event, args) {
            $timeout(function () {
                if (args.alias === 'tabs') {
                    vm.tabs = [
                        {
                            "alias": "tabOne",
                            "label": "HTML",
                            "active": true
                        },
                        {
                            "alias": "tabTwo",
                            "label": "JavaScript"
                        }
                    ];
                    vm.loading = false;
                }
            });
        });
    };

    angular.module('umbraco').controller('tabsController', tabsController);
})();