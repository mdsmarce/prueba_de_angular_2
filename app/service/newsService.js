(function(){
	"use-strict";
	var app = angular.module("newsApp")
	.factory(
		"newsService",
		function($http){
			
			var service={
				getAll:function(){
					return $http.get("https://newsapi.org/v2/top-headlines?apiKey=55344aba235a43d4a24385915597827e&country=ar");
				}
			}

			return service;
		})
}());