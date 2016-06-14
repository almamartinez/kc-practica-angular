var srvCategories = function ($http,Settings) {

    //Obtener la colección de categorias
    this.getCategories = function () {
        return $http.get(Settings.urlServer + Settings.uriCategories);
    };
};

srvCategories.$inject = ["$http","Settings"];
angular.module("whatapop").service("SrvCategories",srvCategories);