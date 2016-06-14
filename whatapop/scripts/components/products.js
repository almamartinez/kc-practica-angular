angular.module("whatapop")
    .component("products",{
        $routeConfig:[
            {
                name:"ProductList",
                path:"/",
                component:"productList",
                useAsDefault: true
            },
            {
                name:"ProductDetail",
                path:"/:id",
                component:"productDetail"
            }  
        ],
        templateUrl:"views/products.html"}
    )
    .component("productList",{
        bindings: {
            $router: '<',
            products: '<'
            },
        templateUrl: "views/product-list.html",
        controller: function(SrvProducts){
            var self=this;
            
            self.$onInit = function () {
                SrvProducts.getProducts().then(
                    function (response) {
                        self.products = response.data;
                    },
                    function (error) {
                        self.products = undefined;
                        //Error!!

                    }
                )
            };

            self.getImagePath = SrvProducts.getImagePath;
        }
    });
