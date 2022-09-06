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

import { CategoryAchievements } from './CategoryAchievements';
import { CategoryInhabitants } from './CategoryInhabitants';
import { CategoryItems } from './CategoryItems';
import { CategoryLocations } from './CategoryLocations';
import { CategorySkills } from './CategorySkills';
import { CategoryUpgrades } from './CategoryUpgrades';
import { GiantList } from './GiantList';
import { HttpFile } from '../http/http';

/**
* Index of the Encyclopedia
*/
export class CategoryIndex {
    'achievements': CategoryAchievements;
    'giants': GiantList;
    'inhabitants': CategoryInhabitants;
    'items': CategoryItems;
    'locations': CategoryLocations;
    'skills': CategorySkills;
    'upgrades': CategoryUpgrades;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "achievements",
            "baseName": "achievements",
            "type": "CategoryAchievements",
            "format": ""
        },
        {
            "name": "giants",
            "baseName": "giants",
            "type": "GiantList",
            "format": ""
        },
        {
            "name": "inhabitants",
            "baseName": "inhabitants",
            "type": "CategoryInhabitants",
            "format": ""
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "CategoryItems",
            "format": ""
        },
        {
            "name": "locations",
            "baseName": "locations",
            "type": "CategoryLocations",
            "format": ""
        },
        {
            "name": "skills",
            "baseName": "skills",
            "type": "CategorySkills",
            "format": ""
        },
        {
            "name": "upgrades",
            "baseName": "upgrades",
            "type": "CategoryUpgrades",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CategoryIndex.attributeTypeMap;
    }

    public constructor() {
    }
}
