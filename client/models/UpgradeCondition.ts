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

import { UpgradeConditionAchievement } from './UpgradeConditionAchievement';
import { UpgradeConditionLevel } from './UpgradeConditionLevel';
import { UpgradeConditionMaxEnergy } from './UpgradeConditionMaxEnergy';
import { UpgradeConditionNull } from './UpgradeConditionNull';
import { UpgradeConditionQuest } from './UpgradeConditionQuest';
import { UpgradeConditionSkill } from './UpgradeConditionSkill';
import { UpgradeConditionUpgrade } from './UpgradeConditionUpgrade';
import { HttpFile } from '../http/http';

export class UpgradeCondition {
    'type': UpgradeConditionTypeEnum;
    'level'?: number;
    'imaginationId'?: string;
    'skillId'?: string;
    'achievementId'?: number;
    'questId'?: string;
    'maxEnergy'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "UpgradeConditionTypeEnum",
            "format": ""
        },
        {
            "name": "level",
            "baseName": "level",
            "type": "number",
            "format": ""
        },
        {
            "name": "imaginationId",
            "baseName": "imagination_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "skillId",
            "baseName": "skill_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "achievementId",
            "baseName": "achievement_id",
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
            "name": "maxEnergy",
            "baseName": "max_energy",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpgradeCondition.attributeTypeMap;
    }

    public constructor() {
    }
}


export type UpgradeConditionTypeEnum = "7" ;

