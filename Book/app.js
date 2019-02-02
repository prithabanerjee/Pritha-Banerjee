var app = angular.module('myApp',["ngRoute", "ngAnimate"]);

app.controller('HeaderCtrl', function($scope){
	$scope.appDetails = {};
	$scope.appDetails.title = "BooKart";
    $scope.appDetails.tagline = "We have 1milions books for you";    
});

app.config(function($routeProvider){
	 $routeProvider
		.when('/books', {
			templateUrl: "partials/book-list.html",
			controller: "BookListControl"
		})
		.when('/kart', {
			templateUrl: "partials/kart-list.html",
			controller: "KartListControl"
		})
	.otherwise({redirectTo:'/books'});
});

app.factory("kartService", function(){
	var kart = [];
	
	return{
		getKart: function(){
			return kart;
		},
		addToKart: function(book){
			kart.push(book);
		},
		buy: function(book){
			alert("Thanks for buying!");
		}
	}
});

app.factory("bookService", function(){
	var books = [
		{
			imgUrl: "../images/gren_turtle.jpg",
			name: "Adultery",
			price: 205,
			rating: 4,
			binding: "Paperback",
			publisher : "Random House India",
			releaseDate: "12-08-2014",
			details : "I love India. Its heaven with different culture."
		},
		{
			imgUrl: "../images/gren_turtle.jpg",
			name: "Adultery",
			price: 205,
			rating: 4,
			binding: "Romantic",
			publisher : "Random House India",
			releaseDate: "12-08-2014",
			details : "I love India. Its heaven with different culture."
		},
		{
			imgUrl: "../images/gren_turtle.jpg",
			name: "Adultery",
			price: 205,
			rating: 4,
			binding: "Paperback",
			publisher : "Random House India",
			releaseDate: "12-08-2014",
			details : "I love India. Its heaven with different culture."
		},{
			imgUrl: "../images/gren_turtle.jpg",
			name: "Adultery",
			price: 205,
			rating: 4,
			binding: "Paperback",
			publisher : "Random House India",
			releaseDate: "12-08-2014",
			details : "I love India. Its heaven with different culture."
		}	
	];
	return{
		getBooks: function(){
			return books;
		}
	}
});

app.controller('KartListControl', function($scope, kartService){
	$scope.kart = kartService.getKart();
	
	$scope.buy = function(book){
		kartService.buy(book);
	}
});

app.controller('BookListControl', function($scope, bookService, kartService){
	$scope.books = bookService.getBooks();
	$scope.addToKart = function(book){
		kartService.addToKart(book);
	}
});