var myNinjaApp = angular.module('myNinjaApp', []);

// will fire before the application runs
myNinjaApp.config(function(){


});

// will fire when the application runs
myNinjaApp.run(function(){


});

// working on controllers
// a controller essensially control our application data
// different controllers are used to control different parts of the app
myNinjaApp.controller('ninjaController',['$scope',function($scope){

    // to pass data between html view and javascript controller we need the scope object
    $scope.message = "hey everybody";
    $scope.ninjas= [{
        name:'yoshi',
        belt:'green',
        rate: 50
    },
    {
        name:'cristal',
        belt:'yellow',
        rate: 30
    },
    {
        name:'shaun',
        belt:'orange',
        rate: 10
    }];

}]);