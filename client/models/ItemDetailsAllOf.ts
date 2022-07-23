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

import { Achievement } from './Achievement';
import { Inhabitant } from './Inhabitant';
import { Recipe } from './Recipe';
import { HttpFile } from '../http/http';

export class ItemDetailsAllOf {
    'recipesTool'?: Array<Recipe & any>;
    'recipesInput'?: Array<Recipe & any>;
    'recipesOutput'?: Array<Recipe & any>;
    'npcs'?: Array<Inhabitant & any>;
    'achievements'?: Array<Achievement & any>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "recipesTool",
            "baseName": "recipes_tool",
            "type": "Array<Recipe & any>",
            "format": ""
        },
        {
            "name": "recipesInput",
            "baseName": "recipes_input",
            "type": "Array<Recipe & any>",
            "format": ""
        },
        {
            "name": "recipesOutput",
            "baseName": "recipes_output",
            "type": "Array<Recipe & any>",
            "format": ""
        },
        {
            "name": "npcs",
            "baseName": "npcs",
            "type": "Array<Inhabitant & any>",
            "format": ""
        },
        {
            "name": "achievements",
            "baseName": "achievements",
            "type": "Array<Achievement & any>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ItemDetailsAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}

