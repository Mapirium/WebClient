class MapService {
    /*@ngInject*/
    constructor($resource, config) {
        this.$resource = $resource;
        this.config = config;

        this.Map = $resource(config.restEndPoint + '/map/:mapId', {mapId: '@mapId'});
    }

    getAllMaps(){
        return this.Map.get();
    }

    createMap(map){
        return this.Map.save(map);
    }
}

export default MapService;