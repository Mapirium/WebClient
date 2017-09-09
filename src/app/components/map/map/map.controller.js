import markerIcon from './marker-icon.png';
import markerIconShadow from './marker-shadow.png';

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

        // Marker auf der Karte
        this.markers = [];

        this.message = "leer";

        this.markerIcon = {
            iconUrl: markerIcon,
            shadowUrl: markerIconShadow,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        };

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
                var pointData = response._embedded.pointData;
                var pointMarkers = [];
                for(var i = 0; i < pointData.length; i++) {
                    pointMarkers.push(this.createMarker(pointData[i]));
                }
                this.markers = pointMarkers;
            },
            (error) => {
                this.messagesService.errorMessage("Punkte konnte nicht geladen werden: " + error, false);
            });
    }

    /**
     * Erstellt einen neuen Marker für die Karte
     * @param pointData Daten des darzustellenden Punktes
     */
    createMarker(pointData){
        var marker = {
            lat: pointData.location.latitude,
            lng: pointData.location.longitude,
            "message": "PublicID: " + pointData.publicId,
            "icon": this.markerIcon
        };
        return marker;
    }

}

export default MapController;