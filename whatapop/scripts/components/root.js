angular.module("whatapop").component("root",{

    $routeConfig: [
        {
            name:"Products",
            path:"/products/...",
            component:"products",
            useAsDefault: true
        },
        {
            name:"NewUser",
            path:"/newuser",
            component:"newUser"
        }
    ],
    templateUrl: "views/root.html"
});
