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

import { LocationContentsValue } from './LocationContentsValue';
import { LocationInhabitant } from './LocationInhabitant';
import { LocationItem } from './LocationItem';
import { LocationLocation } from './LocationLocation';
import { HttpFile } from '../http/http';

export class LocationDetails {
    'contents': { [key: string]: LocationContentsValue; };
    'createdAt'?: string;
    /**
    * Identifier for the Location Model
    */
    'id': string;
    /**
    * the name of the location
    */
    'label': string;
    'regionId': string;
    'updatedAt'?: Date;
    /**
    * Identifier for the User Model
    */
    'userId': number;
    'items': Array<LocationItem>;
    'npcs': Array<LocationInhabitant>;
    'connectionsFrom': LocationLocation;
    'connectionsTo': LocationLocation;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "contents",
            "baseName": "contents",
            "type": "{ [key: string]: LocationContentsValue; }",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string",
            "format": "datetime"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "^[0-9A-Z]{15}$"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "regionId",
            "baseName": "region_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "number",
            "format": ""
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<LocationItem>",
            "format": ""
        },
        {
            "name": "npcs",
            "baseName": "npcs",
            "type": "Array<LocationInhabitant>",
            "format": ""
        },
        {
            "name": "connectionsFrom",
            "baseName": "connections_from",
            "type": "LocationLocation",
            "format": ""
        },
        {
            "name": "connectionsTo",
            "baseName": "connections_to",
            "type": "LocationLocation",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LocationDetails.attributeTypeMap;
    }

    public constructor() {
    }
}

