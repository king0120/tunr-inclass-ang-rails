NewArtistController.$inject = ["$stateParams", "$http", "artistsService", "$state"];

function NewArtistController($stateParams, $http, artistsService, $state) {
	var vm = this;
	vm.artist = {};

	vm.saveArtist = function () {
		artistsService.saveArtist(vm.artist).then((res) => {
			console.log(res);
      $state.go("home");
		});
	};
}

export default NewArtistController;