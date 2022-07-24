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

import { GiantId } from './GiantId';
import { HttpFile } from '../http/http';

export class GiantSkillPivot {
    'giantId': GiantId;
    'skillId': string;
    'primary': GiantSkillPivotPrimaryEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "giantId",
            "baseName": "giant_id",
            "type": "GiantId",
            "format": ""
        },
        {
            "name": "skillId",
            "baseName": "skill_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "primary",
            "baseName": "primary",
            "type": "GiantSkillPivotPrimaryEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GiantSkillPivot.attributeTypeMap;
    }

    public constructor() {
    }
}


export type GiantSkillPivotPrimaryEnum = "0" | "1" ;

