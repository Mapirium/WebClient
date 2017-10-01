class PointdetailController {
    
    /*@ngInject*/
    constructor($scope, $q, pointDefinitionService, fieldDefinitionService, fieldDataService) {
        // Werte übernehmen
        this.$scope = $scope;
        this.$q = $q;
        this.pointDefinitionService = pointDefinitionService;
        this.fieldDefinitionService = fieldDefinitionService;
        this.fieldDataService = fieldDataService;

        // Definition des geladenen Punktes
        this.pointDefinition = null;
        this.fieldDefinitions = null;
        this.fields = null;
        this.fieldsPerDefinition = {};

        // Wir müssen wissen, wann sich der übergebene Punkt ändert
        this.$scope.$watch('$ctrl.point', (newValue, oldValue) => {this.pointChanged(newValue, oldValue)});
    }

    pointChanged(newValue, oldValue){
        // Wenn kein Wert definiert wurde können wir hier auch nichts machen
        if(!newValue){
            return;
        }

        // Definition des Punktes und der Felder laden
        var promises = {
            pointDefinition: this.pointDefinitionService.getPointDefinition(newValue.pointDefinitionId, newValue.mapId).$promise,
            fieldDefinition: this.fieldDefinitionService.getFieldDefinitions(newValue.mapId, newValue.pointDefinitionId).$promise,
            fields: this.fieldDataService.getFields(newValue.mapId, newValue.publicId).$promise
        };

        // Warten, bis alle Anfragen zurückgekommen sind
        this.$q.all(promises).then((response) => {
            // GUI aufbauen
            this.buildUi(response);
        })
    }

    buildUi(values){
        // Die effektiven Werte auslesen
        this.pointDefinition = values.pointDefinition;
        this.fieldDefinitions = values.fieldDefinition._embedded.fieldDefinitions;
        this.fields = values.fields._embedded.fieldData;

        // Zwecks schnellerem Zugriff die Felder nach Definition einreihen
        this.fieldsPerDefinition = {};
        for(var i = 0; i < this.fields.length; i++){
            var field = this.fields[i];
            this.fieldsPerDefinition[field.fieldDefinitionId] = field;
        }
    }

    getFieldForDefinition(fieldDefinitionId){
        return this.fieldsPerDefinition[fieldDefinitionId];
    }
}

export default PointdetailController;