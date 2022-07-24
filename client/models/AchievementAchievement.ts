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
import { AchievementCondition } from './AchievementCondition';
import { GiantId } from './GiantId';
import { Reward } from './Reward';
import { HttpFile } from '../http/http';

export class AchievementAchievement {
    'id': string;
    'categoryId': string;
    'name': string;
    'description': string;
    'statusText': string;
    'conditions': Array<AchievementCondition>;
    'rewardXp': number;
    'rewardCurrants': number;
    'rewardMood': number;
    'rewardEnergy': number;
    'rewardGiant': GiantId;
    'rewardGiantFavor': number;
    'createdAt': Date;
    'updatedAt': Date;
    'reward': Reward;
    'category': string;
    'achievementId'?: Achievement;
    'connectionId'?: Achievement;

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
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "statusText",
            "baseName": "status_text",
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
            "name": "rewardXp",
            "baseName": "reward_xp",
            "type": "number",
            "format": ""
        },
        {
            "name": "rewardCurrants",
            "baseName": "reward_currants",
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
            "name": "reward",
            "baseName": "reward",
            "type": "Reward",
            "format": ""
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "string",
            "format": ""
        },
        {
            "name": "achievementId",
            "baseName": "achievement_id",
            "type": "Achievement",
            "format": ""
        },
        {
            "name": "connectionId",
            "baseName": "connection_id",
            "type": "Achievement",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AchievementAchievement.attributeTypeMap;
    }

    public constructor() {
    }
}

