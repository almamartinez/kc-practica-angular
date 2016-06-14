angular.module("whatapop")
    .value("Settings",{
        urlServer: "http://localhost:8000",
        uriProducts: "/api/products",
        uriCategories: "/api/categories",
        uriUsers: "/api/users"
    });
