var userId=1;
//Controlador 
angular.module("MyFirstApp",["ngRoute"])


.controller("UsuariosController",function($scope){
    //Declaración de modelo
    $scope.nuevoUsuario={};
    $scope.usuarios=[
        {
            id:0,
            nombre:"Sandra Garcia",
            correo:"micorreo@123.com",
            division: "DID"
        },
        {
            id:1,
            nombre:"Vero Morales",
            correo:"sucorreo@456.com",
            division: "DSC"
        }
    ];
    $scope.agregarUsuario=function(){
        //Si no existe el usuario
        if($scope.nuevoUsuario.id==null){
            userId=userId++;
            //El nuevo usuario tendrá el siguiente valor de Id
            $scope.nuevoUsuario.id=userId;
            //Empujamos nuevo valor en la pila
            $scope.usuarios.push($scope.nuevoUsuario);
        //Si ya existe el usuario (nos sirve para editar)
        }else{
            //Para cada usuario en la lista
            for(var i in $scope.usuarios){
                //Si el id coincide con el id de usuario
                if($scope.usuarios[i].id==$scope.nuevoUsuario.id){
                    //El usuario en indice i en el arreglo guardara nuevo usuario
                    $scope.usuarios[i]=$scope.nuevoUsuario;
                }
            }
            
        }
    //Evitamos que guarde valores anteriores
    $scope.nuevoUsuario=null;
    }

    $scope.editarUsuario=function(id){
        //Para cada elemento en arreglo usuarios 
        for(var i in $scope.usuarios){
            //Si su indice coincide con el dado por usuario
            if($scope.usuarios[i].id == id){
                /*Copia los valores que tenia guardados en el formulario
                para que desde ahi modifiquemos valores*/
                $scope.nuevoUsuario=angular.copy($scope.usuarios[i]);
            }
        }
    }

    $scope.eliminarUsuario=function(id){
        //Para cada elemento en arreglo usuarios 
        for(var i in $scope.usuarios){
            //Si su indice coincide con el dado por usuario
            if($scope.usuarios[i].id==id){
                /*Esta funcion agrega o quita un elemento del arreglo
                arreglo.splice(indice,cuantos,elementos...)
                indice: obligatorio, entero que marca la posicion donde se agregara/quitara elemento
                cuantos: opcional, el numero de elementos a ser quitados
                elementos...: opcional, lo(s) nuevo(s) elemento(s) a agregar*/
                $scope.usuarios.splice(1,1);
                $scope.nuevoUsuario={};
            }
        }
    }
});

