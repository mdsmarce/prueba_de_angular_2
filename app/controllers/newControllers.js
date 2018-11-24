(function(){
	"use-strict";
	var app = angular.module("newsApp")
	.controller(
		"newControllers",
		function(newsService){
			var vm = this;

			vm.news = [];

			vm.news = true;

			newsService
			.getAll()
			.then(function(response){
				vm.news = false;
				if (response.status == 200) {
					vm.news=[];
					for(var i = 0;i <response.data.articles.length;i++)
						if (response.data.articles[i].urlToImage != null)
							vm.news.push(response.data.articles[i]);
				} else {
					alert("ta todo mal")
				}

			})
				


			})
}());