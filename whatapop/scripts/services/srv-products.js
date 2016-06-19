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

    //Para poner favorito un producto
    this.setFavourite = function (idFav) { //Usamos el Id del producto
        if (typeof(Storage) !== "undefined") {
            var idProd="prod" + idFav; //Nos aseguramos que sea único con prod, x si tb quiero almacenar el id de usuario.
            //Si ya existía, hay que borrarlo
            if(localStorage.getItem(idProd)){
                localStorage.removeItem(idProd);
                console.log("Borrando: " + idProd);
            }else {
                //Si no existía, hay que almacenarlo
                localStorage.setItem(idProd,true);
                console.log("Apuntando: " + idProd);
            }
        }
    };
    //Para recoger si un producto es favorito o no.
    this.getFavourite = function (idFav) {
        if (typeof(Storage) !== "undefined") {
            var idProd="prod" + idFav;
            var value = localStorage.getItem(idProd);
            console.log("El valor de " + idProd + " es: " + (value==="true"));
            return value==="true";
        }
        return false;
    };

    this.getIconForFav = function (idFav) {
        var image = Settings.urlWebServer + Settings.uriImages;
        if (this.getFavourite(idFav)){
            return image + Settings.icFavSel;
        }
        else {
            return image + Settings.icFavEmpty;
        }

    }
};


srvProducts.$inject = ["$http","Settings"];
angular.module("whatapop").service("SrvProducts",srvProducts);
