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
import { UpgradeUpgradePivot } from './UpgradeUpgradePivot';
import { HttpFile } from '../http/http';

export class UpgradeUpgrade {
    'categoryId': string;
    'chance': number;
    'conditions': Array<UpgradeCondition>;
    'cost': number;
    'createdAt': Date;
    'desc': string;
    'description': string;
    'displayName': string;
    'id': string;
    'maxUses': number;
    'name': string;
    'requiresLevel': number;
    'requiresMaxEnergy': number;
    'rewards': Array<UpgradeReward>;
    'updatedAt': Date;
    'upgradeId': string;
    'value': string;
    'pivot': UpgradeUpgradePivot;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "categoryId",
            "baseName": "category_id",
            "type": "string",
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
            "name": "cost",
            "baseName": "cost",
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
            "name": "desc",
            "baseName": "desc",
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
            "name": "displayName",
            "baseName": "display_name",
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
            "name": "maxUses",
            "baseName": "max_uses",
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
            "name": "rewards",
            "baseName": "rewards",
            "type": "Array<UpgradeReward>",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "upgradeId",
            "baseName": "upgrade_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        },
        {
            "name": "pivot",
            "baseName": "pivot",
            "type": "UpgradeUpgradePivot",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpgradeUpgrade.attributeTypeMap;
    }

    public constructor() {
    }
}

