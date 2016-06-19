
angular.module("whatapop").filter("valueIn",
    function () {
        return function (products,sellers) {
            var productsFromSellers=[]
            for (var i=0; i < products.length; i++){
                var prod = products[i];
                if(sellers.indexOf(prod.seller.id)>=0) {//El vendedor del producto está en la lista
                    productsFromSellers.push(prod);
                }
            }

            return productsFromSellers;
        }
    });