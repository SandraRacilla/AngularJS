angular.module("app",["ngRoute"])
    .config(function($routeProvider){
        $routeProvider
            .when("/",{
                controller: "UsuariosController",
                controllerAs: "index.html"
            })
            .when("/crear",{
                controller: "UsuariosController",
                templateUrl: "crear.html"
            });
    });