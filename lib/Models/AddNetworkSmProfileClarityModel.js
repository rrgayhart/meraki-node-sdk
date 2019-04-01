/**
 * MerakiDashboardAPILib
 *
 * This file was automatically generated for Meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of AddNetworkSmProfileClarityModel
 */
class AddNetworkSmProfileClarityModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.pluginBundleID = this.constructor.getValue(obj.pluginBundleID || obj.PluginBundleID);
        this.filterBrowsers = this.constructor.getValue(obj.filterBrowsers || obj.FilterBrowsers);
        this.filterSockets = this.constructor.getValue(obj.filterSockets || obj.FilterSockets);
        this.vendorConfig = this.constructor.getValue(obj.vendorConfig || obj.VendorConfig);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'pluginBundleID', realName: 'PluginBundleID' },
            { name: 'filterBrowsers', realName: 'FilterBrowsers' },
            { name: 'filterSockets', realName: 'FilterSockets' },
            { name: 'vendorConfig', realName: 'VendorConfig' },
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

module.exports = AddNetworkSmProfileClarityModel;