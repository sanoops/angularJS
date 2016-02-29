var app = angular.module('myApp',[]);


app.directive("enter", function(){
	return function(scope,element){
		element.bind("mouseenter",function(){
            console.log("I 'am inside of you")
            element.addClass("error")
		})
	}
})




app.directive("leave", function(){
	return function(scope,element){
		element.bind("mouseleave",function(){
			console.log("I 'am leaving")



		})
	}
})



/*app.controller("appControl", function(){

	var dat = this;
	dat.message = "hello"

})

app.directive("superapp", function(){
	console.log(scope.dat.message)
	// return function(scope){
		console.log(scope)
/*			restrict: "E",
			template: "<div> Hi... Sir </div>"*/
	// }
// })


/*myApp.factory('Data',function(){
	return {message:"I am in angular"}
})
myApp.factory('helloWorldFromFactory', function() {
    return {
        sayHello: function() {
            return "Hello, World!"
        }
    };
});*/

/*function mycontroller($scope,Data){

	$scope.data = Data
}

function nextController($scope,Data){
	$scope.data = Data
	$scope.revese = function(message){
		return message.split("").reverse().join("")
	}
}*/