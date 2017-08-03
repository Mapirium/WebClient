class CreateMapController {
    
    /*@ngInject*/
    constructor(mapService, pointDefinitionService, fieldDefinitionService) {
        this.mapService = mapService;
        this.pointDefinitionService = pointDefinitionService;
        this.fieldDefinitionService = fieldDefinitionService;

        this.fieldDefinitions = {};
        this.fieldDefinitionCount = 0;

        this.map = this.createMap();
        this.addFieldDefinition();
    }

    createMap(){
        return {
            name: '',
            title: ''
        }
    }

    createPointDefinition(mapId){
        return {
            name: '',
            'mapId': mapId
        }
    }

    addFieldDefinition(){
        // Feld erstellen
        var fieldDef = this.createFieldDefinition();
        this.fieldDefinitions[this.fieldDefinitionCount++] = fieldDef;
    }

    createFieldDefinition(){
        return {
            fieldType: 'string',
            label: 'Name',
            description: 'Der Name dieses Punktes',
            mandatory: false,
        }
    }

    removeFieldDefinition(count){
        delete this.fieldDefinitions[count];
    }

    saveMap(){
        // Karte erstellen
        this.mapService.createMap(this.map).$promise.then((response) => {
            // ID der erstellten Map auslesen
            var mapId = response.publicId;

            // Punkt erstellen
            var pointDef = this.createPointDefinition(mapId);
            pointDef.name = this.map.title;

            // Punkt speichern
            this.pointDefinitionService.createPointDefinition(pointDef, mapId).$promise.then((response) => {
                // ID der Punkt-Definition auslesen
                var pointDefId = response.publicId;

                // Felder speichern
                Object.keys(this.fieldDefinitions).forEach((key,index) => {
                    var fieldDef = this.fieldDefinitions[key];

                    this.fieldDefinitionService.createFieldDefinition(fieldDef, mapId, pointDefId);
                })
            })
        })
    }
}

export default CreateMapController;