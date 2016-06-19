angular.module("whatapop")
    .component("productList",{
        binding:{
            $router: '<'
        },
        templateUrl: "views/product-list.html",
        controller: ["SrvProducts","SrvUsers","$filter",function (SrvProducts,SrvUsers,$filter) {
            var self = this;
            var originalProducts;
            var position;

            self.$onInit = function () {

                SrvProducts.getProducts().then(
                    function (response) {
                        self.products = response.data;
                        originalProducts=self.products;
                    },
                    function (error) {
                        self.products = undefined;
                        //Error!!

                    }
                );

                SrvUsers.getUsers().then(
                    function (response) {
                        self.users = response.data;
                    }
                );

                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        function (data) {
                            position = {"latitude": data.coords.latitude, "longitude": data.coords.longitude};
                        }
                    );
                }

            };
            //Aquí llega cuando se pulsa Buscar
            self.searchClicked = function (search) {
                //Por si nos pasan undefined:
                var myFilter = (search || {name: "", category:{id: ""},distance:""});

                //Filtramos siempre la lista original
                var lista = originalProducts;

                //Filtramos los productos primero:
                lista = $filter("filter")(lista, {name:myFilter.name,category:{id:myFilter.category.id}});

                //Buscamos los usuarios dentro de la distancia que han seleccionado:
                if (myFilter.distance && position){
                    var closeSellers = $filter("UserDistance")(self.users,myFilter.distance,position);
                    lista = $filter("valueIn")(lista,closeSellers);
                }

                // Enlazamos los productos a mostrar
                self.products = lista;
            };

            //Para poner favorito un producto
            self.setFavourite = SrvProducts.setFavourite;

            //Para recoger si un producto es favorito o no.
            self.getFavourite = SrvProducts.getFavourite;
                
            //Path completo de la imagen.
            self.getImagePath = SrvProducts.getImagePath;

            self.getIcon = SrvProducts.getIconForFav;
        }]
    });
