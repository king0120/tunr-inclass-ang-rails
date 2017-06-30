ArtistController.$inject = ["$stateParams","artistsService"];

function ArtistController($stateParams, artistsService) {
	const vm = this;

	activate();

	function activate() {
		artistsService.getArtist($stateParams.id).then(res => {
			vm.artist = res.artist;
      vm.songs = res.songs;
		});
	}
}

export default ArtistController;
