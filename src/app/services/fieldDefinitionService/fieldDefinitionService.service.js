class FieldDefinitionService {
    /*@ngInject*/
    constructor($resource, config) {
        this.$resource = $resource;
        this.config = config;

        this.FieldDefinition = this.$resource(config.restEndPoint + '/map/:mapId/pointdefinition/:pointDefId/fielddefinition/:fieldDefId', {mapId: '@mapId', pointDefId: '@pointDefId', fieldDefId: '@fieldDefId'});
    }

    createFieldDefinition(fieldDefinition, mapId, pointDefinitionId){
        return this.FieldDefinition.save({'mapId': mapId, 'pointDefId': pointDefinitionId}, fieldDefinition);
    }

    getFieldDefinitions(mapId, pointDefId){
        return this.FieldDefinition.get({'mapId': mapId, 'pointDefId': pointDefId});
    }
}

export default FieldDefinitionService;