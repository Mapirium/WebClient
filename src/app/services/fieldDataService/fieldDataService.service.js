class FieldDataService {
    /*@ngInject*/
    constructor($resource, config) {
        this.$resource = $resource;
        this.config = config;

        this.FieldData = this.$resource(config.restEndPoint + '/map/:mapId/point/:pointId/field/:fieldId', {mapId: '@mapId', pointId: '@pointId', fieldId: '@fieldId'});
    }

    /**
     * Gibt alle Felder eines Punktes zurück
     * @param mapId ID der Karte
     * @param pointId ID des Punktes
     */
    getFields(mapId, pointId){
        return this.FieldData.get({'mapId': mapId, 'pointId': pointId});
    }
}

export default FieldDataService;