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

export class UserSkillAllOfPivot {
    /**
    * Identifier for the User Model
    */
    'userId': number;
    'skillId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "number",
            "format": ""
        },
        {
            "name": "skillId",
            "baseName": "skill_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UserSkillAllOfPivot.attributeTypeMap;
    }

    public constructor() {
    }
}

