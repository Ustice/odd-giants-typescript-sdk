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

export class RecipeItemPivot {
    'itemId': string;
    'quantity': number;
    'recipeId'?: number;
    'type': RecipeItemPivotTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "itemId",
            "baseName": "item_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number",
            "format": ""
        },
        {
            "name": "recipeId",
            "baseName": "recipe_id",
            "type": "number",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "RecipeItemPivotTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RecipeItemPivot.attributeTypeMap;
    }

    public constructor() {
    }
}


export type RecipeItemPivotTypeEnum = "input" ;
