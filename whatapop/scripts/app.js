
var dependencies = ["ngComponentRouter",
    "ngSanitize",
    "dahr.ng-haversine",
    "dahr.ng-image-picker"];

//Setter del módulo.
angular.module("whatapop",dependencies);

// Configuramos el proveedor '$locationProvider'. Establecemos el
// modo de navegación HTML5 para que funcione el Single Page Application
angular.module("whatapop").config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
});

// En el value '$routerRootComponent' indicamos el componente raíz.
angular.module("whatapop").value("$routerRootComponent","root");