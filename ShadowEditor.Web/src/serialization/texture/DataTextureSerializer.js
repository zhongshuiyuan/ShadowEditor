import BaseSerializer from '../BaseSerializer';
import TextureSerializer from './TextureSerializer';

/**
 * DataTextureSerializer
 * @author tengge / https://github.com/tengge1
 */
function DataTextureSerializer() {
    BaseSerializer.call(this);
}

DataTextureSerializer.prototype = Object.create(BaseSerializer.prototype);
DataTextureSerializer.prototype.constructor = DataTextureSerializer;

DataTextureSerializer.prototype.toJSON = function (obj) {
    return TextureSerializer.prototype.toJSON.call(this, obj);
};

DataTextureSerializer.prototype.fromJSON = function (json, parent, server) {
    var obj = parent === undefined ? new THREE.DataTexture() : parent;

    TextureSerializer.prototype.fromJSON.call(this, json, obj, server);

    return obj;
};

export default DataTextureSerializer;