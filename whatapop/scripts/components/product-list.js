angular.module("whatapop")
    .component("productList",{
        binding:{
            $router: '<'
        },
        templateUrl: "views/product-list.html",
        controller: ["SrvProducts","$filter","Settings",function (SrvProducts,$filter,Settings) {
            var self = this;
            var originalProducts;
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
                )
            };
            //Aquí llega cuando se pulsa Buscar
            self.searchClicked = function (search) {
                //Por si nos pasan undefined:
                var myFilter = (search || {name: "", category:{id: ""}});

                //Filtramos siempre la lista original
                var lista = originalProducts;

                //Filtramos:
                lista = $filter("filter")(lista, myFilter);

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
