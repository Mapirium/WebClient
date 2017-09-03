class MapController {
    
    /*@ngInject*/
    constructor($stateParams, $scope, pointDataService, messagesService) {
        this.$stateParams = $stateParams;
        this.$scope = $scope;
        this.pointDataService = pointDataService;
        this.messagesService = messagesService;

        // Angezeigter Bereich der Karte
        this.mapBounds = [];
        this.mapCenter = {};

        this.message = "leer";

        // ID der anzuzeigenden Map auslesen. Diese wird als Teil der URL übergeben
        this.currentMapId = this.$stateParams.mapId;

        this.$scope.$watch('$ctrl.mapBounds', (newValue, oldValue) => {this.boundChanged(newValue, oldValue)});
    }

    boundChanged(newValue, oldValue) {
        // Ohne Wert können wir nichts laden
        if(!newValue || newValue.length < 1){
            return;
        }

        // Punkte laden
        this.pointDataService.findPointsInArea(this.currentMapId, newValue).$promise.then(
            (response) => {
                this.message = response;
            },
            (error) => {
                this.messagesService.errorMessage("Punkte konnte nicht geladen werden: " + error, false);
            });
    }

}

export default MapController;