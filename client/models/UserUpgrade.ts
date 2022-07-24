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

import { UpgradeCondition } from './UpgradeCondition';
import { UpgradeReward } from './UpgradeReward';
import { UserUpgradePivot } from './UserUpgradePivot';
import { HttpFile } from '../http/http';

export class UserUpgrade {
    'id': string;
    'categoryId': string;
    'name': string;
    'displayName': string;
    'description': string;
    'cost': number;
    'maxUses': number;
    'chance': number;
    'conditions': Array<UpgradeCondition>;
    'rewards': Array<UpgradeReward>;
    'requiresLevel': number;
    'requiresMaxEnergy': number;
    'createdAt': Date;
    'updatedAt': Date;
    'value': string;
    'upgradeId': string;
    'desc': string;
    'pivot': UserUpgradePivot;

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
            "name": "displayName",
            "baseName": "display_name",
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
            "name": "cost",
            "baseName": "cost",
            "type": "number",
            "format": ""
        },
        {
            "name": "maxUses",
            "baseName": "max_uses",
            "type": "number",
            "format": ""
        },
        {
            "name": "chance",
            "baseName": "chance",
            "type": "number",
            "format": ""
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<UpgradeCondition>",
            "format": ""
        },
        {
            "name": "rewards",
            "baseName": "rewards",
            "type": "Array<UpgradeReward>",
            "format": ""
        },
        {
            "name": "requiresLevel",
            "baseName": "requires_level",
            "type": "number",
            "format": ""
        },
        {
            "name": "requiresMaxEnergy",
            "baseName": "requires_max_energy",
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
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        },
        {
            "name": "upgradeId",
            "baseName": "upgrade_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "desc",
            "baseName": "desc",
            "type": "string",
            "format": ""
        },
        {
            "name": "pivot",
            "baseName": "pivot",
            "type": "UserUpgradePivot",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UserUpgrade.attributeTypeMap;
    }

    public constructor() {
    }
}

