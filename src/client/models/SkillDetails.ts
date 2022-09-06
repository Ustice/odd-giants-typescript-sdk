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

import { AchievementDetails } from './AchievementDetails';
import { Recipe } from './Recipe';
import { SkillGiant } from './SkillGiant';
import { UpgradeDetails } from './UpgradeDetails';
import { HttpFile } from '../http/http';

export class SkillDetails {
    'categoryId': string;
    'createdAt': string;
    'description': string;
    'group': string;
    'id': string;
    'level': number;
    'name': string;
    'pointCost': number;
    'questId': string;
    'reqQuests': Array<string>;
    'requiresLevel': number;
    'updatedAt': string;
    'giants': Array<SkillGiant>;
    'learned': string;
    'requiredAchievements': Array<AchievementDetails>;
    'requiredForAchievements': Array<AchievementDetails>;
    'requiredForRecipes': Array<Recipe>;
    'requiredForSkills': Array<SkillDetails>;
    'requiredForUpgrades': Array<UpgradeDetails>;
    'requiredSkills': Array<SkillDetails>;
    'requiredUpgrades': Array<UpgradeDetails>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "categoryId",
            "baseName": "category_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string",
            "format": "datetime"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "group",
            "baseName": "group",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "level",
            "baseName": "level",
            "type": "number",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "pointCost",
            "baseName": "point_cost",
            "type": "number",
            "format": ""
        },
        {
            "name": "questId",
            "baseName": "quest_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "reqQuests",
            "baseName": "req_quests",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "requiresLevel",
            "baseName": "requires_level",
            "type": "number",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string",
            "format": "datetime"
        },
        {
            "name": "giants",
            "baseName": "giants",
            "type": "Array<SkillGiant>",
            "format": ""
        },
        {
            "name": "learned",
            "baseName": "learned",
            "type": "string",
            "format": ""
        },
        {
            "name": "requiredAchievements",
            "baseName": "required_achievements",
            "type": "Array<AchievementDetails>",
            "format": ""
        },
        {
            "name": "requiredForAchievements",
            "baseName": "required_for_achievements",
            "type": "Array<AchievementDetails>",
            "format": ""
        },
        {
            "name": "requiredForRecipes",
            "baseName": "required_for_recipes",
            "type": "Array<Recipe>",
            "format": ""
        },
        {
            "name": "requiredForSkills",
            "baseName": "required_for_skills",
            "type": "Array<SkillDetails>",
            "format": ""
        },
        {
            "name": "requiredForUpgrades",
            "baseName": "required_for_upgrades",
            "type": "Array<UpgradeDetails>",
            "format": ""
        },
        {
            "name": "requiredSkills",
            "baseName": "required_skills",
            "type": "Array<SkillDetails>",
            "format": ""
        },
        {
            "name": "requiredUpgrades",
            "baseName": "required_upgrades",
            "type": "Array<UpgradeDetails>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SkillDetails.attributeTypeMap;
    }

    public constructor() {
    }
}
