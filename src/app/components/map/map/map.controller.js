import markerIcon from './marker-icon.png';
import selectedMarkerIcon from './selected-marker-icon.png';
import markerIconShadow from './marker-shadow.png';

class MapController {
    
    /*@ngInject*/
    constructor($stateParams, $scope, pointDataService, messagesService, mapService) {
        this.$stateParams = $stateParams;
        this.$scope = $scope;
        this.pointDataService = pointDataService;
        this.messagesService = messagesService;
        this.mapService = mapService;

        // Angezeigter Bereich der Karte
        this.mapBounds = {
            "northEast": {"lat": 48.50204750525715, "lng": 11.722412109375},
            "southWest": {"lat": 44.88701247981298, "lng": 4.691162109375}
        };
        this.mapCenter = {};

        // Marker auf der Karte
        this.markers = [];

        // Aktuell ausgewählter Marker
        this.selectedMarker = null;
        this.selectedPoint = null;

        this.message = "leer";

        this.markerIcon = {
            iconUrl: markerIcon,
            shadowUrl: markerIconShadow,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        };

        this.selectedMarkerIcon = {
            iconUrl: selectedMarkerIcon,
            shadowUrl: markerIconShadow,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        };

        // ID der anzuzeigenden Map auslesen. Diese wird als Teil der URL übergeben
        this.currentMapId = this.$stateParams.mapId;

        // Karte laden
        this.map = this.mapService.getMap(this.currentMapId);

        this.$scope.$watch('$ctrl.mapBounds', (newValue, oldValue) => {this.boundChanged(newValue, oldValue)});
        this.$scope.$on('leafletDirectiveMarker.click', (event, args) => {this.markerClicked(event, args)});
    }

    /**
     * Wird aufgerufen, wenn sich der angezeigte Bereich der Karte geändert hat.
     * @param newValue Neuer, aktueller Ausschnitt
     * @param oldValue Gewählter Ausschnitt vor der Änderung
     */
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
                this.displayMarkers(pointData);
            },
            (error) => {
                this.messagesService.errorMessage("Punkte konnte nicht geladen werden: " + error, false);
            });
    }

    /**
     * Wird aufgerufen, wenn ein Marker angeklickt wurde
     */
    markerClicked(event, args){
        // Marker und Punkt auslesen
        var marker = args.model;
        var pointData = marker.pointData;

        // Wichtig: Der Marker wird zwar als Argument übergeben. Dieser ist aber nur eine Kopie und alle Änderungen
        // daran haben keine Auswirkungen auf die Karte. Deshalb suchen wir hier den "richtigen" Marker.
        var trueMarker = this.findMarkerForPoint(pointData);

        this.selectMarker(trueMarker, pointData);
    }

    /**
     * Sucht einen Marker für einen bestimmten Punkt.
     * @param point Punkt, dessen Marker gefunden werden soll
     * @returns Gefundener Marker. <code>null</code>, wenn zum gegebenen Punkt kein Marker vorhanden ist.
     */
    findMarkerForPoint(point){
        for(var i = 0; i < this.markers.length; i++){
            var marker = this.markers[i];
            var markerPoint = marker.pointData;
            if(markerPoint.publicId === point.publicId){
                return marker;
            }
        }

        // Wenn wir hier sind, haben wir nichts gefunden
        return null;
    }

    /**
     * Zeigt die geladenen Punkte auf der Karte an
     * @param pointData Liste mit den anzuzeigenden Punkten
     */
    displayMarkers(pointData){
        var pointMarkers = [];
        for(var i = 0; i < pointData.length; i++) {
            var point = pointData[i];

            // Den selektieren Punkt erstellen wir nicht neu, sondern übernehmen ihn am schluss
            if(this.selectedMarker && point.publicId === this.selectedMarker.pointData.publicId){
                continue;
            }

            // Marker erstellen und hinzufügen
            pointMarkers.push(this.createMarker(point));
        }

        // Den selektierten Marker hinzufügen
        if(this.selectedMarker){
            pointMarkers.push(this.selectedMarker);
        }

        this.markers = pointMarkers;
    }

    /**
     * Wählt einen Marker auf der Karte aus
     * @param marker Auszuwählender Marker
     * @param point Punkt hinter dem Marker
     */
    selectMarker(marker, point){
        // Ist der Marker bereits selektiert?
        if(this.selectedMarker && this.selectedMarker.pointData.publicId === point.publicId){
            return;
        }

        // Aktueller Marker deselektieren
        if(this.selectedMarker){
            this.selectedMarker.icon = this.markerIcon;
            this.selectedMarker.focus = false;
        }

        // Neuer Marker selektieren
        this.selectedMarker = marker;
        this.selectedMarker.icon = this.selectedMarkerIcon;
        this.selectedMarker.focus = true;
        this.selectedPoint = point;
    }

    /**
     * Erstellt einen neuen Marker für die Karte
     * @param pointData Daten des darzustellenden Punktes
     */
    createMarker(pointData){
        var marker = {
            lat: pointData.location.latitude,
            lng: pointData.location.longitude,
            // "message": "PublicID: " + pointData.publicId,
            icon: this.markerIcon,
            draggable: false,
            focus: false,
            "pointData": pointData
        };
        return marker;
    }

}

export default MapController;