var srvUsers = function ($http,Settings) {

    //Obtener un usuario
    this.getUser = function () {
        return $http.get(Settings.urlServer + Settings.uriUsers);
    };
}

srvUsers.$inject = ["$http","Settings"];
angular.module("whatapop").service("SrvUsers",srvUsers);