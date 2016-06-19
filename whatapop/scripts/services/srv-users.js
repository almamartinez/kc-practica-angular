var srvUsers = function ($http,Settings,$filter) {

    //Obtener un usuario
    this.getUsers = function () {
        return $http.get(Settings.urlServer + Settings.uriUsers);
    };

    this.getUserByEmail = function (email){
        return this.getUsers().then(
            function (response) {
                var urs = response.data;
                return $filter("filter")(urs,{email:email});
            }
        );
    };

    this.getUserByNick = function (nick){
        return this.getUsers().then(
            function (response) {
                var urs = response.data;
                return $filter("filter")(urs,{nick:nick});
            }
        );
    }

    //Guardar user
    this.registerUser = function (user, imagen) {

        var promesa;
        // La imagen viene:
        if(imagen){

            // Montamos un 'FormData' con la imagen (para transferir objetos).
            var datos = new FormData();
            datos.append("img",imagen)

            // Configuramos el content-type de la petición. Hay que indicarlo cmo 'undefined'
            // para que Angular js infiera el tipo.
            var configuracion = {
                "headers": {
                    "Content-Type":undefined
                }
            };

            // Subimos la imagen al servidor

            promesa = $http
                .post(Settings.urlServer + Settings.uriUploads, datos, configuracion)
                .then(function (respuesta){
                    //En ´path´me viene dada la ruta rela tiva de la imagen subida
                    var ruta = respuesta.data.path;

                    // Establecemos la ruta de la imagen en
                    // el objeto receta antes de guardarla
                    user.avatar = ruta;

                    return $http.post(Settings.urlServer + Settings.uriUsers,user);

                });

        }// En caso de no tener imagen
        else{
            promesa = $http.post(Settings.urlServer + Settings.uriUsers,user);
        }

        return promesa;
    };
}

srvUsers.$inject = ["$http","Settings","$filter"];
angular.module("whatapop").service("SrvUsers",srvUsers);