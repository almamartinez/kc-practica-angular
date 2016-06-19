angular.module("whatapop")
    .component("categoriesSelector",{
        bindings:{
          catSelected:"="
        },
        templateUrl: "views/categories-selector.html",
        controller: function(SrvCategories){
            var self=this;            
            self.$onInit = function () {
                //Inicializamos la lista de categorías
                SrvCategories.getCategories().then(
                    function (response) {
                        self.categoriesList = response.data;
                        //Inserto un nuevo valor para cuando queremos ver todas las categorías.
                        self.categoriesList.unshift({"id":"", "name":"Todas"});
                        
                    },
                    function (error) {
                        self.categoriesList = undefined;
                        console.log("Error:" + error);

                    }
                )
            };
            
        }
    });

