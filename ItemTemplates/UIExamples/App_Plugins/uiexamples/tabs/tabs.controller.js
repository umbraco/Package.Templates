(function () {
    'use strict';

    function tabsController($scope, eventsService) {

        var vm = this;

        vm.changeTab = changeTab;

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

        function changeTab(selectedTab) {
            vm.tabs.forEach(function (tab) {
                tab.active = false;
            });
            selectedTab.active = true;
        };

        eventsService.on("app.tabChange", function (args) {
            console.log("args", args);
        });
    };

    angular.module('umbraco')
        .controller('tabsController', tabsController);
})();