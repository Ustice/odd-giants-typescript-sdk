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

import { UserSkillPivot } from './UserSkillPivot';
import { HttpFile } from '../http/http';

export class UserSkillConnections {
    'ends': string;
    /**
    * Indicates whether a user has learned the skill.
    */
    'learned': UserSkillConnectionsLearnedEnum;
    'pivot': UserSkillPivot;
    'starts': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "ends",
            "baseName": "ends",
            "type": "string",
            "format": "datetime"
        },
        {
            "name": "learned",
            "baseName": "learned",
            "type": "UserSkillConnectionsLearnedEnum",
            "format": ""
        },
        {
            "name": "pivot",
            "baseName": "pivot",
            "type": "UserSkillPivot",
            "format": ""
        },
        {
            "name": "starts",
            "baseName": "starts",
            "type": "string",
            "format": "datetime"
        }    ];

    static getAttributeTypeMap() {
        return UserSkillConnections.attributeTypeMap;
    }

    public constructor() {
    }
}


export type UserSkillConnectionsLearnedEnum = "0" | "1" ;
