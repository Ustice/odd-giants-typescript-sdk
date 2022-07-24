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

export class ItemAchievementPivot {
    'achievementId': string;
    'count': number;
    'itemId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "achievementId",
            "baseName": "achievement_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": ""
        },
        {
            "name": "itemId",
            "baseName": "item_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ItemAchievementPivot.attributeTypeMap;
    }

    public constructor() {
    }
}

