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

import { SkillGiantPivot } from './SkillGiantPivot';
import { HttpFile } from '../http/http';

export class SkillGiantConnections {
    'pivot'?: SkillGiantPivot;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pivot",
            "baseName": "pivot",
            "type": "SkillGiantPivot",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SkillGiantConnections.attributeTypeMap;
    }

    public constructor() {
    }
}

