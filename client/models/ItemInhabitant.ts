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

import { Item } from './Item';
import { ItemInhabitant1 } from './ItemInhabitant1';
import { HttpFile } from '../http/http';

export class ItemInhabitant {
    'article': string;
    'categoryId': string;
    'createdAt': Date;
    'description': string;
    'hasInfopage': number;
    'id': string;
    'items': Array<Item>;
    'name': string;
    'namePlural': string;
    'updatedAt': Date;
    'pivot': ItemInhabitant1;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "article",
            "baseName": "article",
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
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "hasInfopage",
            "baseName": "has_infopage",
            "type": "number",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<Item>",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
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
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "pivot",
            "baseName": "pivot",
            "type": "ItemInhabitant1",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ItemInhabitant.attributeTypeMap;
    }

    public constructor() {
    }
}

