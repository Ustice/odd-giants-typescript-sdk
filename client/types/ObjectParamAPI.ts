import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { Achievement } from '../models/Achievement';
import { AchievementConditionsInner } from '../models/AchievementConditionsInner';
import { AchievementDetails } from '../models/AchievementDetails';
import { AchievementDetailsAllOf } from '../models/AchievementDetailsAllOf';
import { AuthenticationCredentials } from '../models/AuthenticationCredentials';
import { Category } from '../models/Category';
import { CategoryAchievements } from '../models/CategoryAchievements';
import { CategoryIndex } from '../models/CategoryIndex';
import { CategoryInhabitants } from '../models/CategoryInhabitants';
import { CategoryItems } from '../models/CategoryItems';
import { CategoryLocations } from '../models/CategoryLocations';
import { CategorySkills } from '../models/CategorySkills';
import { CategoryUpgrades } from '../models/CategoryUpgrades';
import { ErrorResponse } from '../models/ErrorResponse';
import { Giant } from '../models/Giant';
import { GiantDetails } from '../models/GiantDetails';
import { GiantDetailsAllOf } from '../models/GiantDetailsAllOf';
import { GiantId } from '../models/GiantId';
import { GiantList } from '../models/GiantList';
import { Inhabitant } from '../models/Inhabitant';
import { InhabitantDetails } from '../models/InhabitantDetails';
import { InhabitantDetailsAllOf } from '../models/InhabitantDetailsAllOf';
import { Item } from '../models/Item';
import { ItemDetails } from '../models/ItemDetails';
import { ItemDetailsAllOf } from '../models/ItemDetailsAllOf';
import { Location } from '../models/Location';
import { LocationContentsValue } from '../models/LocationContentsValue';
import { LocationDetails } from '../models/LocationDetails';
import { LocationDetailsAllOf } from '../models/LocationDetailsAllOf';
import { Recipe } from '../models/Recipe';
import { RecipeItemsInputInner } from '../models/RecipeItemsInputInner';
import { RecipeItemsInputInnerAllOf } from '../models/RecipeItemsInputInnerAllOf';
import { RecipeItemsInputInnerAllOfPivot } from '../models/RecipeItemsInputInnerAllOfPivot';
import { RecipeItemsOutputInner } from '../models/RecipeItemsOutputInner';
import { RecipeItemsOutputInnerAllOf } from '../models/RecipeItemsOutputInnerAllOf';
import { RecipeItemsOutputInnerAllOfPivot } from '../models/RecipeItemsOutputInnerAllOfPivot';
import { RecipeItemsToolInner } from '../models/RecipeItemsToolInner';
import { RecipeItemsToolInnerAllOf } from '../models/RecipeItemsToolInnerAllOf';
import { RecipeItemsToolInnerAllOfPivot } from '../models/RecipeItemsToolInnerAllOfPivot';
import { RecipePivot } from '../models/RecipePivot';
import { Region } from '../models/Region';
import { Reward } from '../models/Reward';
import { SearchResults } from '../models/SearchResults';
import { ServerStats } from '../models/ServerStats';
import { SessionInfo } from '../models/SessionInfo';
import { Skill } from '../models/Skill';
import { SkillDetails } from '../models/SkillDetails';
import { SkillDetailsGiantsInner } from '../models/SkillDetailsGiantsInner';
import { SkillDetailsGiantsInnerAllOf } from '../models/SkillDetailsGiantsInnerAllOf';
import { SkillDetailsGiantsInnerAllOfPivot } from '../models/SkillDetailsGiantsInnerAllOfPivot';
import { SkillDetailsRequiredForRecipesInner } from '../models/SkillDetailsRequiredForRecipesInner';
import { Upgrade } from '../models/Upgrade';
import { UpgradeConditionAchievement } from '../models/UpgradeConditionAchievement';
import { UpgradeConditionLevel } from '../models/UpgradeConditionLevel';
import { UpgradeConditionMaxEnergy } from '../models/UpgradeConditionMaxEnergy';
import { UpgradeConditionNull } from '../models/UpgradeConditionNull';
import { UpgradeConditionQuest } from '../models/UpgradeConditionQuest';
import { UpgradeConditionSkill } from '../models/UpgradeConditionSkill';
import { UpgradeConditionUpgrade } from '../models/UpgradeConditionUpgrade';
import { UpgradeConditionsInner } from '../models/UpgradeConditionsInner';
import { UpgradeDetails } from '../models/UpgradeDetails';
import { UpgradeDetailsAllOf } from '../models/UpgradeDetailsAllOf';
import { UpgradeRewardKeepable } from '../models/UpgradeRewardKeepable';
import { UpgradeRewardLearning } from '../models/UpgradeRewardLearning';
import { UpgradeRewardMovement } from '../models/UpgradeRewardMovement';
import { UpgradeRewardsInner } from '../models/UpgradeRewardsInner';
import { User } from '../models/User';
import { UserAchievment } from '../models/UserAchievment';
import { UserAchievmentAllOf } from '../models/UserAchievmentAllOf';
import { UserAchievmentAllOfPivot } from '../models/UserAchievmentAllOfPivot';
import { UserSkill } from '../models/UserSkill';
import { UserSkillAllOf } from '../models/UserSkillAllOf';
import { UserSkillAllOfPivot } from '../models/UserSkillAllOfPivot';
import { UserUpgrade } from '../models/UserUpgrade';
import { UserUpgradeAllOf } from '../models/UserUpgradeAllOf';
import { UserUpgradeAllOfPivot } from '../models/UserUpgradeAllOfPivot';

import { ObservableOddGiantsApi } from "./ObservableAPI";
import { OddGiantsApiRequestFactory, OddGiantsApiResponseProcessor} from "../apis/OddGiantsApi";

export interface OddGiantsApiAchievementRequest {
    /**
     * 
     * @type string
     * @memberof OddGiantsApiachievement
     */
    achievementId: string
}

export interface OddGiantsApiAchievementsByCategoryRequest {
    /**
     * 
     * @type string
     * @memberof OddGiantsApiachievementsByCategory
     */
    category: string
}

export interface OddGiantsApiCategoriesRequest {
}

export interface OddGiantsApiInhabitantRequest {
    /**
     * 
     * @type string
     * @memberof OddGiantsApiinhabitant
     */
    inhabitantId: string
}

export interface OddGiantsApiInhabitantsByCategoryRequest {
    /**
     * 
     * @type string
     * @memberof OddGiantsApiinhabitantsByCategory
     */
    category: string
}

export interface OddGiantsApiLocationRequest {
    /**
     * 
     * @type string
     * @memberof OddGiantsApilocation
     */
    locationId: string
}

export interface OddGiantsApiLoginRequest {
    /**
     * 
     * @type AuthenticationCredentials
     * @memberof OddGiantsApilogin
     */
    authenticationCredentials?: AuthenticationCredentials
}

export interface OddGiantsApiLoginRefreshRequest {
}

export interface OddGiantsApiMeRequest {
}

export interface OddGiantsApiRegionRequest {
    /**
     * 
     * @type string
     * @memberof OddGiantsApiregion
     */
    regionId: string
}

export interface OddGiantsApiSearchRequest {
    /**
     * 
     * @type string
     * @memberof OddGiantsApisearch
     */
    q: string
}

export interface OddGiantsApiServerStatsRequest {
}

export interface OddGiantsApiSkillRequest {
    /**
     * 
     * @type string
     * @memberof OddGiantsApiskill
     */
    skillId: string
}

export interface OddGiantsApiSkillsByCategoryRequest {
    /**
     * 
     * @type string
     * @memberof OddGiantsApiskillsByCategory
     */
    category: string
}

export interface OddGiantsApiUpgradeRequest {
    /**
     * 
     * @type string
     * @memberof OddGiantsApiupgrade
     */
    upgradeId: string
}

export interface OddGiantsApiUpgradesByCategoryRequest {
    /**
     * 
     * @type string
     * @memberof OddGiantsApiupgradesByCategory
     */
    category: string
}

export interface OddGiantsApiUserRequest {
    /**
     * 
     * @type number
     * @memberof OddGiantsApiuser
     */
    userId: number
}

export interface OddGiantsApiUserAchievementsRequest {
    /**
     * 
     * @type number
     * @memberof OddGiantsApiuserAchievements
     */
    userId: number
}

export interface OddGiantsApiUserSkillsRequest {
    /**
     * 
     * @type number
     * @memberof OddGiantsApiuserSkills
     */
    userId: number
}

export interface OddGiantsApiUserUpgradesRequest {
    /**
     * 
     * @type number
     * @memberof OddGiantsApiuserUpgrades
     */
    userId: number
}

export class ObjectOddGiantsApi {
    private api: ObservableOddGiantsApi

    public constructor(configuration: Configuration, requestFactory?: OddGiantsApiRequestFactory, responseProcessor?: OddGiantsApiResponseProcessor) {
        this.api = new ObservableOddGiantsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets Achievement details
     * @param param the request object
     */
    public achievement(param: OddGiantsApiAchievementRequest, options?: Configuration): Promise<AchievementDetails> {
        return this.api.achievement(param.achievementId,  options).toPromise();
    }

    /**
     * Get Achievements by category
     * @param param the request object
     */
    public achievementsByCategory(param: OddGiantsApiAchievementsByCategoryRequest, options?: Configuration): Promise<Array<Achievement>> {
        return this.api.achievementsByCategory(param.category,  options).toPromise();
    }

    /**
     * Categories of information available within the encyclopedia/api
     * @param param the request object
     */
    public categories(param: OddGiantsApiCategoriesRequest = {}, options?: Configuration): Promise<CategoryIndex> {
        return this.api.categories( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public inhabitant(param: OddGiantsApiInhabitantRequest, options?: Configuration): Promise<Inhabitant> {
        return this.api.inhabitant(param.inhabitantId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public inhabitantsByCategory(param: OddGiantsApiInhabitantsByCategoryRequest, options?: Configuration): Promise<Array<Inhabitant>> {
        return this.api.inhabitantsByCategory(param.category,  options).toPromise();
    }

    /**
     * Locations around Ur
     * @param param the request object
     */
    public location(param: OddGiantsApiLocationRequest, options?: Configuration): Promise<Location> {
        return this.api.location(param.locationId,  options).toPromise();
    }

    /**
     * User's provide an email address and password to gain access to authenticated routes. 
     * Logs in a user
     * @param param the request object
     */
    public login(param: OddGiantsApiLoginRequest = {}, options?: Configuration): Promise<SessionInfo> {
        return this.api.login(param.authenticationCredentials,  options).toPromise();
    }

    /**
     * By sending the refresh_token, the user is able to refresh their session.
     * Refreshes the user's session
     * @param param the request object
     */
    public loginRefresh(param: OddGiantsApiLoginRefreshRequest = {}, options?: Configuration): Promise<SessionInfo> {
        return this.api.loginRefresh( options).toPromise();
    }

    /**
     * Gets the authenticated user
     * Gets the authenticated user
     * @param param the request object
     */
    public me(param: OddGiantsApiMeRequest = {}, options?: Configuration): Promise<User> {
        return this.api.me( options).toPromise();
    }

    /**
     * Locations around Ur
     * @param param the request object
     */
    public region(param: OddGiantsApiRegionRequest, options?: Configuration): Promise<Location> {
        return this.api.region(param.regionId,  options).toPromise();
    }

    /**
     * Search
     * @param param the request object
     */
    public search(param: OddGiantsApiSearchRequest, options?: Configuration): Promise<SearchResults> {
        return this.api.search(param.q,  options).toPromise();
    }

    /**
     * 
     * List 
     * @param param the request object
     */
    public serverStats(param: OddGiantsApiServerStatsRequest = {}, options?: Configuration): Promise<ServerStats> {
        return this.api.serverStats( options).toPromise();
    }

    /**
     * Get Skill
     * @param param the request object
     */
    public skill(param: OddGiantsApiSkillRequest, options?: Configuration): Promise<SkillDetails> {
        return this.api.skill(param.skillId,  options).toPromise();
    }

    /**
     * Get Skill Category
     * @param param the request object
     */
    public skillsByCategory(param: OddGiantsApiSkillsByCategoryRequest, options?: Configuration): Promise<Array<Skill>> {
        return this.api.skillsByCategory(param.category,  options).toPromise();
    }

    /**
     * Gets the details of an Upgrade
     * @param param the request object
     */
    public upgrade(param: OddGiantsApiUpgradeRequest, options?: Configuration): Promise<Array<UpgradeDetails>> {
        return this.api.upgrade(param.upgradeId,  options).toPromise();
    }

    /**
     * Get upgrade category
     * @param param the request object
     */
    public upgradesByCategory(param: OddGiantsApiUpgradesByCategoryRequest, options?: Configuration): Promise<Array<Upgrade>> {
        return this.api.upgradesByCategory(param.category,  options).toPromise();
    }

    /**
     * Gets information about a specific user
     * @param param the request object
     */
    public user(param: OddGiantsApiUserRequest, options?: Configuration): Promise<User> {
        return this.api.user(param.userId,  options).toPromise();
    }

    /**
     * Gets the achievments for a given user
     * @param param the request object
     */
    public userAchievements(param: OddGiantsApiUserAchievementsRequest, options?: Configuration): Promise<Array<UserAchievment>> {
        return this.api.userAchievements(param.userId,  options).toPromise();
    }

    /**
     * Gets the skills for a given user
     * @param param the request object
     */
    public userSkills(param: OddGiantsApiUserSkillsRequest, options?: Configuration): Promise<Array<UserSkill>> {
        return this.api.userSkills(param.userId,  options).toPromise();
    }

    /**
     * Gets the upgrades for a given user
     * @param param the request object
     */
    public userUpgrades(param: OddGiantsApiUserUpgradesRequest, options?: Configuration): Promise<Array<Upgrade>> {
        return this.api.userUpgrades(param.userId,  options).toPromise();
    }

}
