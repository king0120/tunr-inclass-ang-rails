import newArtistController from './new.controller';
import newArtistTemplate from './new.html';

const newArtistComponent = {
  controller: newArtistController,
  template: newArtistTemplate
}

angular.module('TunrApp').component('tunrNewArtist', newArtistComponent);