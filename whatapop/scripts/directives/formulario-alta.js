
angular.module("whatapop").directive("formularioAlta", function (SrvUsers) {

    return {
        // Con 'restrict' indicamos cómo vamos a usar la directiva.
        // Con 'A' la usamos como atributo de un elemento html.
        // Con 'E' la usamos como elemento html.
        restrict: "EA",

        // Con 'template' o 'templateUrl' indicamos la jerarquía de componentes
        // que el navegador va a renderizar como vista de la directiva.
        templateUrl: "views/formulario-alta.html",

        // Con 'scope' definimos la interfaz de comunicación entre la
        // directiva y el scope padre (controlador / componentes).
        scope: {
            // Con '&' notificamos eventos al controlador padre.
            alHacerClick: "&",
            checkUserNick: "&"
        },
        // Con 'link' establecemos la lógica de la  directiva y además
        // podemos hacer manipulación del DOM de la vista.
        link: function (scope) {

            // Creo un nuevo objeto receta:
            scope.user = {
                name: "",
                nick:"",
                email:"",
                latitude:0,
                longitude:0
            };
            scope.isValidEmail=false;
            scope.isValidNick =false;

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    function (data) {
                        scope.user.latitude=data.coords.latitude;
                        scope.user.longitude=data.coords.longitude;
                    }
                );
            }

            scope.registerUser = function () {

                scope.alHacerClick({ user: scope.user });
            };

            scope.checkToRegister = function () {

                return scope.user.nick && scope.user.email && scope.isValidEmail && scope.isValidNick;
            }

            scope.checkNick = function(){
                SrvUsers.getUserByNick(scope.user.nick).then(
                    function (response) {
                        scope.isValidNick = !response.data;
                    }
                );

            }

            scope.checkEmail = function () {
                SrvUsers.getUserByEmail(scope.user.email).then(
                    function (response) {
                        scope.isValidEmail = !response.data;
                    }
                );
            }
        }

    };
});
