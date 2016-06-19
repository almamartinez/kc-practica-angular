angular.module("whatapop")
    .value("Settings",{
        urlServer: "http://localhost:8000",
        urlWebServer:"http://localhost:3000",
        uriProducts: "/api/products",
        uriCategories: "/api/categories",
        uriUsers: "/api/users",
        uriUploads:"/upload",
        uriImages:"/images/",
        icFavSel:"estrella.png",
        icFavEmpty:"estrella-empty.png"
    });
