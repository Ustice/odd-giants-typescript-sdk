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

import { RecipeItemsOutputInnerAllOfPivot } from './RecipeItemsOutputInnerAllOfPivot';
import { HttpFile } from '../http/http';

export class RecipeItemsOutputInnerAllOf {
    'pivot': RecipeItemsOutputInnerAllOfPivot;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pivot",
            "baseName": "pivot",
            "type": "RecipeItemsOutputInnerAllOfPivot",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RecipeItemsOutputInnerAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}

