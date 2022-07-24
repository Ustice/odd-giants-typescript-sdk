/**
 * Odd Giants Public API
 * Odd Giants Public API
 *
 * OpenAPI spec version: 0.0.1
 * Contact: ustice@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class LocationLocationPivot {
    /**
    * Identifier for the Location Model
    */
    'locationId': string;
    /**
    * Identifier for the Location Model
    */
    'connectionId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "locationId",
            "baseName": "location_id",
            "type": "string",
            "format": "^[0-9A-Z]{15}$"
        },
        {
            "name": "connectionId",
            "baseName": "connection_id",
            "type": "string",
            "format": "^[0-9A-Z]{15}$"
        }    ];

    static getAttributeTypeMap() {
        return LocationLocationPivot.attributeTypeMap;
    }

    public constructor() {
    }
}

