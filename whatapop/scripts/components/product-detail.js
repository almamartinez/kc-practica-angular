var ctrlProducts=function (SrvProducts) {
    var self=this;
    self.$routerOnActivate = function(next) {
        var id = next.params.id;
        SrvProducts.getProductDetail(id).then(
            function (response) {
                self.product =response.data;
            },
            function (error) {
                //Error
            }
        );

    };

    //Para poner favorito un producto
    self.setFavourite = SrvProducts.setFavourite;

    //Para recoger si un producto es favorito o no.
    self.getFavourite = SrvProducts.getFavourite;

    //Path completo de la imagen.
    self.getImagePath = SrvProducts.getImagePath;

    self.getIcon = SrvProducts.getIconForFav;
};


angular.module("whatapop")
    .component("productDetail",{
        templateUrl:"views/product-detail.html",
        bindings: {
            $router: '<',
            product: '<'
        },
        controller:["SrvProducts",ctrlProducts]
    });

