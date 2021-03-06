/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UpdateNetworkSmDevicesTagsModel
 */
class UpdateNetworkSmDevicesTagsModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.wifiMacs = this.constructor.getValue(obj.wifiMacs);
        this.ids = this.constructor.getValue(obj.ids);
        this.serials = this.constructor.getValue(obj.serials);
        this.scope = this.constructor.getValue(obj.scope);
        this.tags = this.constructor.getValue(obj.tags);
        this.updateAction = this.constructor.getValue(obj.updateAction);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'wifiMacs', realName: 'wifiMacs' },
            { name: 'ids', realName: 'ids' },
            { name: 'serials', realName: 'serials' },
            { name: 'scope', realName: 'scope' },
            { name: 'tags', realName: 'tags' },
            { name: 'updateAction', realName: 'updateAction' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = UpdateNetworkSmDevicesTagsModel;
