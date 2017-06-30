ArtistsController.$inject = ["artistsService"];

function ArtistsController(artistsService) {
	const vm = this;

	activate();

	function activate() {
		artistsService.getArtists().then(res => {
			vm.artists = res;
		});
	}
}

export default ArtistsController;
