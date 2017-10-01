class PointDefinitionService {
    /*@ngInject*/
    constructor($resource, config) {
        this.$resource = $resource;
        this.config = config;

        this.PointDefinition = $resource(config.restEndPoint + '/map/:mapId/pointdefinition/:pointDefId', {mapId: '@mapId', pointDefId: '@pointDefId'});
    }

    getPointDefinition(pointDefintionId, mapId){
        return this.PointDefinition.get({'mapId': mapId, 'pointDefId': pointDefintionId});
    }

    createPointDefinition(pointDefinition, mapId){
        return this.PointDefinition.save({'mapId': mapId}, pointDefinition);
    }
}

export default PointDefinitionService;