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

import { ItemAchievementPivot } from './ItemAchievementPivot';
import { HttpFile } from '../http/http';

export class ItemAchievementConnection {
    'pivot': ItemAchievementPivot;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pivot",
            "baseName": "pivot",
            "type": "ItemAchievementPivot",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ItemAchievementConnection.attributeTypeMap;
    }

    public constructor() {
    }
}

