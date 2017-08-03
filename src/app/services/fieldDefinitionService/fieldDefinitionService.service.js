class FieldDefinitionService {
    /*@ngInject*/
    constructor($resource, config) {
        this.$resource = $resource;
        this.config = config;

        this.FieldDefinition = $resource(config.restEndPoint + '/map/:mapId/pointdefinition/:pointDefId/fielddefinition/:fieldDefId', {mapId: '@mapId', pointDefId: '@pointDefId', fieldDefId: '@fieldDefId'});
    }

    createFieldDefinition(fieldDefinition, mapId, pointDefinitionId){
        return this.FieldDefinition.save({'mapId': mapId, 'pointDefId': pointDefinitionId}, fieldDefinition);
    }
}

export default FieldDefinitionService;