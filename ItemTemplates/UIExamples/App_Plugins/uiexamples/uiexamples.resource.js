function exampleResource($q) {

    return {
        linkAway: function(url) {
            window.open(url);
        }
    };

}

angular.module('umbraco.resources').factory('exampleResource', exampleResource);
