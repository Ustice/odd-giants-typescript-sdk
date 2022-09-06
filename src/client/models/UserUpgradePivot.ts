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

export class UserUpgradePivot {
    'upgradeId': string;
    /**
    * Identifier for the User Model
    */
    'userId': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "upgradeId",
            "baseName": "upgrade_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UserUpgradePivot.attributeTypeMap;
    }

    public constructor() {
    }
}
