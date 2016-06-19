var directive=function () {

    return {

        restrict: "EA",
        templateUrl: "views/product-searcher.html",
        scope:{
            onSearchClick: "&"
        },
        link: function (scope) {

            //Inicialización del objeto con la búsqueda.
            scope.search = {
                name: "",
                category:{id:""}
            };

            scope.doSearch = function () {
                //Cuando pulsan Buscar se envía el filtro al evento que tenemos en el scope
                scope.onSearchClick({search:scope.search});
            };
        }
    };
};

angular.module("whatapop").directive("productSearcher",directive);