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

import { AchievementCondition } from './AchievementCondition';
import { GiantId } from './GiantId';
import { ItemAchievementPivot } from './ItemAchievementPivot';
import { Reward } from './Reward';
import { HttpFile } from '../http/http';

export class ItemAchievement {
    'category': string;
    'categoryId': string;
    'conditions': Array<AchievementCondition>;
    'createdAt': Date;
    'description': string;
    'id': string;
    'name': string;
    'reward': Reward;
    'rewardCurrants': number;
    'rewardEnergy': number;
    'rewardGiant': GiantId;
    'rewardGiantFavor': number;
    'rewardMood': number;
    'rewardXp': number;
    'statusText': string;
    'updatedAt': Date;
    'pivot': ItemAchievementPivot;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "category",
            "baseName": "category",
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
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<AchievementCondition>",
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
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "reward",
            "baseName": "reward",
            "type": "Reward",
            "format": ""
        },
        {
            "name": "rewardCurrants",
            "baseName": "reward_currants",
            "type": "number",
            "format": ""
        },
        {
            "name": "rewardEnergy",
            "baseName": "reward_energy",
            "type": "number",
            "format": ""
        },
        {
            "name": "rewardGiant",
            "baseName": "reward_giant",
            "type": "GiantId",
            "format": ""
        },
        {
            "name": "rewardGiantFavor",
            "baseName": "reward_giant_favor",
            "type": "number",
            "format": ""
        },
        {
            "name": "rewardMood",
            "baseName": "reward_mood",
            "type": "number",
            "format": ""
        },
        {
            "name": "rewardXp",
            "baseName": "reward_xp",
            "type": "number",
            "format": ""
        },
        {
            "name": "statusText",
            "baseName": "status_text",
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
            "type": "ItemAchievementPivot",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ItemAchievement.attributeTypeMap;
    }

    public constructor() {
    }
}

