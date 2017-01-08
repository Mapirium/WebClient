/*
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2016.
 */
class HomeController {

    /*@ngInject*/
    constructor(mapService, messagesService) {
        this.mapService = mapService;
        this.messagesService = messagesService;

        this.title = 'ESTA WebJS - Starterkit';
        this.welcomeMessage = 'Herzlich Willkommen';

        this.maps = [];

        this.loadMaps();
    }

    loadMaps() {
        this.mapService.getAllMaps().$promise.then((response) => {
                this.maps = response;
            },
            (error) => {
                this.messagesService.errorMessage('Ooops!! Etwas hat nicht funktioniert', false);
            });
    }
}

export default HomeController;