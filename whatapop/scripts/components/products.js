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
        templateUrl:"views/products.html"

    });
