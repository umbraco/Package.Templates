/**
 * @ngdoc
 * 
 * @name: editorController
 * @description: code for a property editor in the umbraco back office
 * 
 */
(function () {
    'use strict';

    function editorController($scope, assetsService, $timeout, editorService) {

        var vm = this;

        function init() {
            if($scope.model.value === null || $scope.model.value === ""){
                $scope.model.value = $scope.model.config.defaultValue;
            }

            assetsService
                .load([
                    "~/App_Plugins/UmbracoPackage.1/MarkDownPropertyEditor/lib/markdown.converter.js",
                    "~/App_Plugins/UmbracoPackage.1/MarkDownPropertyEditor/lib/markdown.sanitizer.js",
                    "~/App_Plugins/UmbracoPackage.1/MarkDownPropertyEditor/lib/markdown.editor.js"
                ])
                .then(function () {
                    // this function will execute when all dependencies have loaded
                    $timeout(function(){
                        
                        var converter2 = new Markdown.Converter();
                        var editor2 = new Markdown.Editor(converter2, "-" + $scope.model.alias);
                        editor2.run();

                        // subscribe to the image dialog clicks
                        editor2.hooks.set("insertImageDialog", function (callback) {
                            // here we can intercept our own dialog handling
                            var mediaPicker = {
                                disableFolderSelect: true,
                                submit: function (model) {
                                    var selectedImagePath = model.selection[0].image;
                                    callback(selectedImagePath);
                                    editorService.close();
                                },
                                close: function () {
                                    editorService.close();
                                }
                            };
                            editorService.mediaPicker(mediaPicker);

                            return true; // tell the editor that we'll take care of getting the image url
                        });
                    });
                });

            // load the separate css for the editor to avoid it blocking our JavaScript loading
            assetsService.loadCss("~/App_Plugins/UmbracoPackage.1/MarkDownPropertyEditor/lib/markdown.editor.less");
        }

        // call init, when controller is loaded 
        init(); 
    }

    angular.module('umbraco')
        .controller('umbracopackage__1MarkdownEditorController', editorController);
})();