export * from './Achievement';
export * from './AchievementConditionsInner';
export * from './AchievementDetails';
export * from './AchievementDetailsAllOf';
export * from './AuthenticationCredentials';
export * from './Category';
export * from './CategoryAchievements';
export * from './CategoryIndex';
export * from './CategoryInhabitants';
export * from './CategoryItems';
export * from './CategoryLocations';
export * from './CategorySkills';
export * from './CategoryUpgrades';
export * from './ErrorResponse';
export * from './Giant';
export * from './GiantDetails';
export * from './GiantDetailsAllOf';
export * from './GiantId';
export * from './GiantList';
export * from './Inhabitant';
export * from './InhabitantDetails';
export * from './InhabitantDetailsAllOf';
export * from './Item';
export * from './ItemDetails';
export * from './ItemDetailsAllOf';
export * from './Location';
export * from './LocationContentsValue';
export * from './LocationDetails';
export * from './LocationDetailsAllOf';
export * from './Recipe';
export * from './RecipeItemsInputInner';
export * from './RecipeItemsInputInnerAllOf';
export * from './RecipeItemsInputInnerAllOfPivot';
export * from './RecipeItemsOutputInner';
export * from './RecipeItemsOutputInnerAllOf';
export * from './RecipeItemsOutputInnerAllOfPivot';
export * from './RecipeItemsToolInner';
export * from './RecipeItemsToolInnerAllOf';
export * from './RecipeItemsToolInnerAllOfPivot';
export * from './RecipePivot';
export * from './Region';
export * from './Reward';
export * from './SearchResults';
export * from './ServerStats';
export * from './SessionInfo';
export * from './Skill';
export * from './SkillDetails';
export * from './SkillDetailsGiantsInner';
export * from './SkillDetailsGiantsInnerAllOf';
export * from './SkillDetailsGiantsInnerAllOfPivot';
export * from './SkillDetailsRequiredForRecipesInner';
export * from './Upgrade';
export * from './UpgradeConditionAchievement';
export * from './UpgradeConditionLevel';
export * from './UpgradeConditionMaxEnergy';
export * from './UpgradeConditionNull';
export * from './UpgradeConditionQuest';
export * from './UpgradeConditionSkill';
export * from './UpgradeConditionUpgrade';
export * from './UpgradeConditionsInner';
export * from './UpgradeDetails';
export * from './UpgradeDetailsAllOf';
export * from './UpgradeRewardKeepable';
export * from './UpgradeRewardLearning';
export * from './UpgradeRewardMovement';
export * from './UpgradeRewardsInner';
export * from './User';
export * from './UserAchievment';
export * from './UserAchievmentAllOf';
export * from './UserAchievmentAllOfPivot';
export * from './UserSkill';
export * from './UserSkillAllOf';
export * from './UserSkillAllOfPivot';
export * from './UserUpgrade';
export * from './UserUpgradeAllOf';
export * from './UserUpgradeAllOfPivot';

import { Achievement } from './Achievement';
import { AchievementConditionsInner, AchievementConditionsInnerTypeEnum      } from './AchievementConditionsInner';
import { AchievementDetails } from './AchievementDetails';
import { AchievementDetailsAllOf } from './AchievementDetailsAllOf';
import { AuthenticationCredentials } from './AuthenticationCredentials';
import { Category } from './Category';
import { CategoryAchievements } from './CategoryAchievements';
import { CategoryIndex } from './CategoryIndex';
import { CategoryInhabitants } from './CategoryInhabitants';
import { CategoryItems } from './CategoryItems';
import { CategoryLocations } from './CategoryLocations';
import { CategorySkills } from './CategorySkills';
import { CategoryUpgrades } from './CategoryUpgrades';
import { ErrorResponse } from './ErrorResponse';
import { Giant } from './Giant';
import { GiantDetails } from './GiantDetails';
import { GiantDetailsAllOf } from './GiantDetailsAllOf';
import { GiantId } from './GiantId';
import { GiantList } from './GiantList';
import { Inhabitant } from './Inhabitant';
import { InhabitantDetails } from './InhabitantDetails';
import { InhabitantDetailsAllOf } from './InhabitantDetailsAllOf';
import { Item     , ItemArticleEnum               } from './Item';
import { ItemDetails     , ItemDetailsArticleEnum                    } from './ItemDetails';
import { ItemDetailsAllOf } from './ItemDetailsAllOf';
import { Location } from './Location';
import { LocationContentsValue } from './LocationContentsValue';
import { LocationDetails } from './LocationDetails';
import { LocationDetailsAllOf } from './LocationDetailsAllOf';
import { Recipe   , RecipeLearntEnum                } from './Recipe';
import { RecipeItemsInputInner     , RecipeItemsInputInnerArticleEnum                } from './RecipeItemsInputInner';
import { RecipeItemsInputInnerAllOf } from './RecipeItemsInputInnerAllOf';
import { RecipeItemsInputInnerAllOfPivot  , RecipeItemsInputInnerAllOfPivotTypeEnum    } from './RecipeItemsInputInnerAllOfPivot';
import { RecipeItemsOutputInner     , RecipeItemsOutputInnerArticleEnum                } from './RecipeItemsOutputInner';
import { RecipeItemsOutputInnerAllOf } from './RecipeItemsOutputInnerAllOf';
import { RecipeItemsOutputInnerAllOfPivot  , RecipeItemsOutputInnerAllOfPivotTypeEnum    } from './RecipeItemsOutputInnerAllOfPivot';
import { RecipeItemsToolInner     , RecipeItemsToolInnerArticleEnum                } from './RecipeItemsToolInner';
import { RecipeItemsToolInnerAllOf } from './RecipeItemsToolInnerAllOf';
import { RecipeItemsToolInnerAllOfPivot  , RecipeItemsToolInnerAllOfPivotTypeEnum    } from './RecipeItemsToolInnerAllOfPivot';
import { RecipePivot  , RecipePivotTypeEnum   } from './RecipePivot';
import { Region } from './Region';
import { Reward } from './Reward';
import { SearchResults } from './SearchResults';
import { ServerStats } from './ServerStats';
import { SessionInfo } from './SessionInfo';
import { Skill } from './Skill';
import { SkillDetails } from './SkillDetails';
import { SkillDetailsGiantsInner } from './SkillDetailsGiantsInner';
import { SkillDetailsGiantsInnerAllOf } from './SkillDetailsGiantsInnerAllOf';
import { SkillDetailsGiantsInnerAllOfPivot  , SkillDetailsGiantsInnerAllOfPivotPrimaryEnum   } from './SkillDetailsGiantsInnerAllOfPivot';
import { SkillDetailsRequiredForRecipesInner   , SkillDetailsRequiredForRecipesInnerLearntEnum                } from './SkillDetailsRequiredForRecipesInner';
import { Upgrade } from './Upgrade';
import { UpgradeConditionAchievement, UpgradeConditionAchievementTypeEnum    } from './UpgradeConditionAchievement';
import { UpgradeConditionLevel, UpgradeConditionLevelTypeEnum    } from './UpgradeConditionLevel';
import { UpgradeConditionMaxEnergy, UpgradeConditionMaxEnergyTypeEnum    } from './UpgradeConditionMaxEnergy';
import { UpgradeConditionNull, UpgradeConditionNullTypeEnum   } from './UpgradeConditionNull';
import { UpgradeConditionQuest, UpgradeConditionQuestTypeEnum    } from './UpgradeConditionQuest';
import { UpgradeConditionSkill, UpgradeConditionSkillTypeEnum    } from './UpgradeConditionSkill';
import { UpgradeConditionUpgrade, UpgradeConditionUpgradeTypeEnum    } from './UpgradeConditionUpgrade';
import { UpgradeConditionsInner, UpgradeConditionsInnerTypeEnum         } from './UpgradeConditionsInner';
import { UpgradeDetails } from './UpgradeDetails';
import { UpgradeDetailsAllOf } from './UpgradeDetailsAllOf';
import { UpgradeRewardKeepable , UpgradeRewardKeepableTypeEnum    } from './UpgradeRewardKeepable';
import { UpgradeRewardLearning, UpgradeRewardLearningTypeEnum   } from './UpgradeRewardLearning';
import { UpgradeRewardMovement, UpgradeRewardMovementTypeEnum         } from './UpgradeRewardMovement';
import { UpgradeRewardsInner, UpgradeRewardsInnerTypeEnum           } from './UpgradeRewardsInner';
import { User } from './User';
import { UserAchievment } from './UserAchievment';
import { UserAchievmentAllOf } from './UserAchievmentAllOf';
import { UserAchievmentAllOfPivot } from './UserAchievmentAllOfPivot';
import { UserSkill                  } from './UserSkill';
import { UserSkillAllOf , UserSkillAllOfLearnedEnum     } from './UserSkillAllOf';
import { UserSkillAllOfPivot } from './UserSkillAllOfPivot';
import { UserUpgrade } from './UserUpgrade';
import { UserUpgradeAllOf } from './UserUpgradeAllOf';
import { UserUpgradeAllOfPivot } from './UserUpgradeAllOfPivot';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "application/octet-stream": 0,
  "application/x-www-form-urlencoded": 0
}


let enumsMap: Set<string> = new Set<string>([
    "AchievementConditionsInnerTypeEnum",
    "GiantId",
    "ItemArticleEnum",
    "ItemDetailsArticleEnum",
    "RecipeLearntEnum",
    "RecipeItemsInputInnerArticleEnum",
    "RecipeItemsInputInnerAllOfPivotTypeEnum",
    "RecipeItemsOutputInnerArticleEnum",
    "RecipeItemsOutputInnerAllOfPivotTypeEnum",
    "RecipeItemsToolInnerArticleEnum",
    "RecipeItemsToolInnerAllOfPivotTypeEnum",
    "RecipePivotTypeEnum",
    "SkillDetailsGiantsInnerAllOfPivotPrimaryEnum",
    "SkillDetailsRequiredForRecipesInnerLearntEnum",
    "UpgradeConditionAchievementTypeEnum",
    "UpgradeConditionLevelTypeEnum",
    "UpgradeConditionMaxEnergyTypeEnum",
    "UpgradeConditionNullTypeEnum",
    "UpgradeConditionQuestTypeEnum",
    "UpgradeConditionSkillTypeEnum",
    "UpgradeConditionUpgradeTypeEnum",
    "UpgradeConditionsInnerTypeEnum",
    "UpgradeRewardKeepableTypeEnum",
    "UpgradeRewardLearningTypeEnum",
    "UpgradeRewardMovementTypeEnum",
    "UpgradeRewardsInnerTypeEnum",
    "UserSkillAllOfLearnedEnum",
]);

let typeMap: {[index: string]: any} = {
    "Achievement": Achievement,
    "AchievementConditionsInner": AchievementConditionsInner,
    "AchievementDetails": AchievementDetails,
    "AchievementDetailsAllOf": AchievementDetailsAllOf,
    "AuthenticationCredentials": AuthenticationCredentials,
    "Category": Category,
    "CategoryAchievements": CategoryAchievements,
    "CategoryIndex": CategoryIndex,
    "CategoryInhabitants": CategoryInhabitants,
    "CategoryItems": CategoryItems,
    "CategoryLocations": CategoryLocations,
    "CategorySkills": CategorySkills,
    "CategoryUpgrades": CategoryUpgrades,
    "ErrorResponse": ErrorResponse,
    "Giant": Giant,
    "GiantDetails": GiantDetails,
    "GiantDetailsAllOf": GiantDetailsAllOf,
    "GiantList": GiantList,
    "Inhabitant": Inhabitant,
    "InhabitantDetails": InhabitantDetails,
    "InhabitantDetailsAllOf": InhabitantDetailsAllOf,
    "Item": Item,
    "ItemDetails": ItemDetails,
    "ItemDetailsAllOf": ItemDetailsAllOf,
    "Location": Location,
    "LocationContentsValue": LocationContentsValue,
    "LocationDetails": LocationDetails,
    "LocationDetailsAllOf": LocationDetailsAllOf,
    "Recipe": Recipe,
    "RecipeItemsInputInner": RecipeItemsInputInner,
    "RecipeItemsInputInnerAllOf": RecipeItemsInputInnerAllOf,
    "RecipeItemsInputInnerAllOfPivot": RecipeItemsInputInnerAllOfPivot,
    "RecipeItemsOutputInner": RecipeItemsOutputInner,
    "RecipeItemsOutputInnerAllOf": RecipeItemsOutputInnerAllOf,
    "RecipeItemsOutputInnerAllOfPivot": RecipeItemsOutputInnerAllOfPivot,
    "RecipeItemsToolInner": RecipeItemsToolInner,
    "RecipeItemsToolInnerAllOf": RecipeItemsToolInnerAllOf,
    "RecipeItemsToolInnerAllOfPivot": RecipeItemsToolInnerAllOfPivot,
    "RecipePivot": RecipePivot,
    "Region": Region,
    "Reward": Reward,
    "SearchResults": SearchResults,
    "ServerStats": ServerStats,
    "SessionInfo": SessionInfo,
    "Skill": Skill,
    "SkillDetails": SkillDetails,
    "SkillDetailsGiantsInner": SkillDetailsGiantsInner,
    "SkillDetailsGiantsInnerAllOf": SkillDetailsGiantsInnerAllOf,
    "SkillDetailsGiantsInnerAllOfPivot": SkillDetailsGiantsInnerAllOfPivot,
    "SkillDetailsRequiredForRecipesInner": SkillDetailsRequiredForRecipesInner,
    "Upgrade": Upgrade,
    "UpgradeConditionAchievement": UpgradeConditionAchievement,
    "UpgradeConditionLevel": UpgradeConditionLevel,
    "UpgradeConditionMaxEnergy": UpgradeConditionMaxEnergy,
    "UpgradeConditionNull": UpgradeConditionNull,
    "UpgradeConditionQuest": UpgradeConditionQuest,
    "UpgradeConditionSkill": UpgradeConditionSkill,
    "UpgradeConditionUpgrade": UpgradeConditionUpgrade,
    "UpgradeConditionsInner": UpgradeConditionsInner,
    "UpgradeDetails": UpgradeDetails,
    "UpgradeDetailsAllOf": UpgradeDetailsAllOf,
    "UpgradeRewardKeepable": UpgradeRewardKeepable,
    "UpgradeRewardLearning": UpgradeRewardLearning,
    "UpgradeRewardMovement": UpgradeRewardMovement,
    "UpgradeRewardsInner": UpgradeRewardsInner,
    "User": User,
    "UserAchievment": UserAchievment,
    "UserAchievmentAllOf": UserAchievmentAllOf,
    "UserAchievmentAllOfPivot": UserAchievmentAllOfPivot,
    "UserSkill": UserSkill,
    "UserSkillAllOf": UserSkillAllOf,
    "UserSkillAllOfPivot": UserSkillAllOfPivot,
    "UserUpgrade": UserUpgrade,
    "UserUpgradeAllOf": UserUpgradeAllOf,
    "UserUpgradeAllOfPivot": UserUpgradeAllOfPivot,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "text/plain") {
            return String(data);
        }

        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }

        if (mediaType === "text/html") {
            return rawData;
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
