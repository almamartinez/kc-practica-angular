angular.module("whatapop")
    .component("newUser", {
        bindings:{ //Hay que indicar el binding con el router para poder usarlo en el controller (self).
            $router:"<" //enlace unidireccional. Nunca podría ser bidireccional, siempre "<" e indica de fuera hacia adentro.
        },
        templateUrl:"views/new-user.html",
        //Inyección de dependencias del servicio
        controller: ["SrvUsers",function (SrvUsers) {
            var self = this;

            // Definimos una variable para el documento de la imagen de la receta que se ha seleccionado.
            var imgUser;
            // Guardamos la receta.
            self.registerUser = function (user) {

                SrvUsers.registerUser(user, imgUser).then(function(response) {

                    // Se guarda bien la receta, vamos a verla a la lista de recetas.
                    //Hay que navegar manualmente.

                    // $router tiene los datos relacionados con la ruta que se está navegando.
                    // Puedo ejecutar su función 'navigate()' para hacer una redirección.
                    alert("Usuario creado!!");
                    self.$router.navigate(["Products"]);

                });

            };

            //Guarda el documento de imagen indicado para almacenarlo en servidor, junto con la receta al aceptar.
            self.selectImage = function (imagen) {
                imgUser = imagen;
            };

            // Eliminamos el documento de imagen que hubiese seleccionado previamente.
            self.unselectImage = function () {
                imgUser = undefined;
            };
        }]
    });