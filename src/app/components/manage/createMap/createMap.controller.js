class CreateMapController {
    
    /*@ngInject*/
    constructor() {
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
        alert("Karte erstellen");
    }
}

export default CreateMapController;