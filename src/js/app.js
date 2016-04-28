/**
 * Created by AlvaroBelmonte on 16/04/2016.
 */
angular.module('App', [])
    .controller('myCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
        console.log('pec02_p6');
        var bootstrap_enabled = (typeof $().modal == 'function');
        console.log(bootstrap_enabled);

        var self = this;
        var url = $location.absUrl()+'data/data.json';


        $http.get(url).success(function(datos)
        {
            self.datos = datos.listado;
        }, function(errResponse){
            console.error('Error');
        });

    }]);



