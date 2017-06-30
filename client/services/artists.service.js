artistsService.$inject = ["$http"];
function artistsService($http){
	const service = this;

	service.getArtists = function(){
		return $http.get("/artists").then(res => res.data);
	}; 

	service.getArtist = function (id) {
		return $http.get(`/artists/${id}`).then(res => res.data);
	}; 

	service.saveArtist = function (newArtist) {
		return $http.post("/artists", newArtist).then(res => {
			return res.data;
		});
	};

	return service;
}

angular.module("TunrApp").service("artistsService", artistsService);