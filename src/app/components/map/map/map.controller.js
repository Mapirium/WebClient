class MapController {
    
    /*@ngInject*/
    constructor($stateParams, $scope) {
        this.$stateParams = $stateParams;
        this.$scope = $scope;

        // Angezeigter Bereich der Karte
        this.mapBounds = [];
        this.mapCenter = {};

        this.message = "leer";

        // ID der anzuzeigenden Map auslesen. Diese wird als Teil der URL übergeben
        this.currentMapId = this.$stateParams.mapId;

        this.$scope.$watch('$ctrl.mapBounds', (newValue, oldValue) => {this.boundChanged(newValue, oldValue)});
    }

    boundChanged(newValue, oldValue){
        if(newValue != null) {
            console.log("Neuer Wert");
            this.message = "Grenzen haben sich geändert: " + newValue;
        }
    }

}

export default MapController;