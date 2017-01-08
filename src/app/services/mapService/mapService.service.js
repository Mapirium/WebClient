class MapService {
    /*@ngInject*/
    constructor($resource, config) {
        this.$resource = $resource;
        this.config = config;

        this.Mitarbeiter = $resource(config.restEndPoint + '/mitarbeiter/:uid', {uid: '@userId'});
        this.Map = $resource(config.restEndPoint + '/map/:mapId', {mapId: '@mapId'});
    }

    getAllMaps(){
        return this.Map.query();
    }
}

export default MapService;