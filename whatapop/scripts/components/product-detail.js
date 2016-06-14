angular.module("whatapop")
    .component("productDetail",{
        templateUrl:"views/product-detail.html",
        bindings: {
            $router: '<',
            product: '<'
        },
        controller:function (SrvProducts) {
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

            self.getImagePath = SrvProducts.getImagePath;
        }
    });

