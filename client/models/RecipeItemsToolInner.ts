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

import { RecipeItemsToolInnerAllOfPivot } from './RecipeItemsToolInnerAllOfPivot';
import { HttpFile } from '../http/http';

export class RecipeItemsToolInner {
    'id': string;
    'categoryId': string;
    'label': string;
    'nameSingle': string;
    'namePlural': string;
    'article': RecipeItemsToolInnerArticleEnum;
    'description': string;
    'hasInfo': number;
    'hasInfopage': number;
    'isRoutable': number;
    'adjustedScale'?: number;
    'stackmax': number;
    'capacity': number;
    'baseCost': number;
    'parentClasses': Array<string>;
    'createdAt': Date;
    'updatedAt': Date;
    'name': string;
    'pivot': RecipeItemsToolInnerAllOfPivot;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "categoryId",
            "baseName": "category_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "nameSingle",
            "baseName": "name_single",
            "type": "string",
            "format": ""
        },
        {
            "name": "namePlural",
            "baseName": "name_plural",
            "type": "string",
            "format": ""
        },
        {
            "name": "article",
            "baseName": "article",
            "type": "RecipeItemsToolInnerArticleEnum",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "hasInfo",
            "baseName": "has_info",
            "type": "number",
            "format": ""
        },
        {
            "name": "hasInfopage",
            "baseName": "has_infopage",
            "type": "number",
            "format": ""
        },
        {
            "name": "isRoutable",
            "baseName": "is_routable",
            "type": "number",
            "format": ""
        },
        {
            "name": "adjustedScale",
            "baseName": "adjusted_scale",
            "type": "number",
            "format": ""
        },
        {
            "name": "stackmax",
            "baseName": "stackmax",
            "type": "number",
            "format": ""
        },
        {
            "name": "capacity",
            "baseName": "capacity",
            "type": "number",
            "format": ""
        },
        {
            "name": "baseCost",
            "baseName": "base_cost",
            "type": "number",
            "format": ""
        },
        {
            "name": "parentClasses",
            "baseName": "parent_classes",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "pivot",
            "baseName": "pivot",
            "type": "RecipeItemsToolInnerAllOfPivot",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RecipeItemsToolInner.attributeTypeMap;
    }

    public constructor() {
    }
}


export type RecipeItemsToolInnerArticleEnum = "a" | "the" ;

