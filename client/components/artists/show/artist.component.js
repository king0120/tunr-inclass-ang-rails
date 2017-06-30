import ArtistController from "./artist.controller";
import artistTemplate from "./artist.html";

const artistComponent = {
	controller: ArtistController,
	template: artistTemplate
};

angular.module("TunrApp").component("tunrArtist", artistComponent);