var srvProducts = function ($http, Settings) {
    //Obtener la colección de productos
    this.getProducts = function () {
        return $http.get(Settings.urlServer + Settings.uriProducts);
    };

    this.getProductDetail = function (id) {
        return $http.get(Settings.urlServer + Settings.uriProducts + "/" + id);
    };

    this.getImagePath = function (relativePath) {
        return relativePath ? (Settings.urlServer + "/" + relativePath): undefined;
    };
};


srvProducts.$inject = ["$http","Settings"];
angular.module("whatapop").service("SrvProducts",srvProducts);
