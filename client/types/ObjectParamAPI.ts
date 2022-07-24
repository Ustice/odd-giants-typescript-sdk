import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { Achievement } from '../models/Achievement';
import { AchievementAchievement } from '../models/AchievementAchievement';
import { AchievementAchievementConnection } from '../models/AchievementAchievementConnection';
import { AchievementCondition } from '../models/AchievementCondition';
import { AchievementConnections } from '../models/AchievementConnections';
import { AchievementDetails } from '../models/AchievementDetails';
import { AchievementItem } from '../models/AchievementItem';
import { AchievementItemConnections } from '../models/AchievementItemConnections';
import { AchievementRecipe } from '../models/AchievementRecipe';
import { AchievementRecipeConnection } from '../models/AchievementRecipeConnection';
import { AchievementRecipePivot } from '../models/AchievementRecipePivot';
import { AchievementUpgrade } from '../models/AchievementUpgrade';
import { AchievementUpgradeConnections } from '../models/AchievementUpgradeConnections';
import { AchievementUpgradePivot } from '../models/AchievementUpgradePivot';
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
import { GiantConnections } from '../models/GiantConnections';
import { GiantDetails } from '../models/GiantDetails';
import { GiantId } from '../models/GiantId';
import { GiantList } from '../models/GiantList';
import { GiantSkill } from '../models/GiantSkill';
import { GiantSkillConnection } from '../models/GiantSkillConnection';
import { GiantSkillPivot } from '../models/GiantSkillPivot';
import { Inhabitant } from '../models/Inhabitant';
import { InhabitantConnections } from '../models/InhabitantConnections';
import { InhabitantDetails } from '../models/InhabitantDetails';
import { InhabitantItem } from '../models/InhabitantItem';
import { InhabitantItemConnection } from '../models/InhabitantItemConnection';
import { InhabitantItemPivot } from '../models/InhabitantItemPivot';
import { Item } from '../models/Item';
import { ItemAchievement } from '../models/ItemAchievement';
import { ItemAchievementConnection } from '../models/ItemAchievementConnection';
import { ItemAchievementPivot } from '../models/ItemAchievementPivot';
import { ItemConnections } from '../models/ItemConnections';
import { ItemDetails } from '../models/ItemDetails';
import { ItemInhabitant } from '../models/ItemInhabitant';
import { ItemInhabitant1 } from '../models/ItemInhabitant1';
import { ItemInhabitantConnection } from '../models/ItemInhabitantConnection';
import { Location } from '../models/Location';
import { LocationConnection } from '../models/LocationConnection';
import { LocationConnections } from '../models/LocationConnections';
import { LocationContentsValue } from '../models/LocationContentsValue';
import { LocationDetails } from '../models/LocationDetails';
import { LocationInhabitant } from '../models/LocationInhabitant';
import { LocationInhabitantConnection } from '../models/LocationInhabitantConnection';
import { LocationInhabitantPivot } from '../models/LocationInhabitantPivot';
import { LocationItem } from '../models/LocationItem';
import { LocationItemConnection } from '../models/LocationItemConnection';
import { LocationItemPivot } from '../models/LocationItemPivot';
import { LocationLocation } from '../models/LocationLocation';
import { LocationLocationPivot } from '../models/LocationLocationPivot';
import { Recipe } from '../models/Recipe';
import { RecipeItem } from '../models/RecipeItem';
import { RecipeItemConnection } from '../models/RecipeItemConnection';
import { RecipeItemPivot } from '../models/RecipeItemPivot';
import { Region } from '../models/Region';
import { Reward } from '../models/Reward';
import { SearchResults } from '../models/SearchResults';
import { ServerStats } from '../models/ServerStats';
import { SessionInfo } from '../models/SessionInfo';
import { Skill } from '../models/Skill';
import { SkillConnections } from '../models/SkillConnections';
import { SkillDetails } from '../models/SkillDetails';
import { SkillGiant } from '../models/SkillGiant';
import { SkillGiantConnections } from '../models/SkillGiantConnections';
import { SkillGiantPivot } from '../models/SkillGiantPivot';
import { Upgrade } from '../models/Upgrade';
import { UpgradeAchievement } from '../models/UpgradeAchievement';
import { UpgradeAchievementConnection } from '../models/UpgradeAchievementConnection';
import { UpgradeCondition } from '../models/UpgradeCondition';
import { UpgradeConditionAchievement } from '../models/UpgradeConditionAchievement';
import { UpgradeConditionLevel } from '../models/UpgradeConditionLevel';
import { UpgradeConditionMaxEnergy } from '../models/UpgradeConditionMaxEnergy';
import { UpgradeConditionNull } from '../models/UpgradeConditionNull';
import { UpgradeConditionQuest } from '../models/UpgradeConditionQuest';
import { UpgradeConditionSkill } from '../models/UpgradeConditionSkill';
import { UpgradeConditionUpgrade } from '../models/UpgradeConditionUpgrade';
import { UpgradeConnections } from '../models/UpgradeConnections';
import { UpgradeDetails } from '../models/UpgradeDetails';
import { UpgradeReward } from '../models/UpgradeReward';
import { UpgradeRewardKeepable } from '../models/UpgradeRewardKeepable';
import { UpgradeRewardLearning } from '../models/UpgradeRewardLearning';
import { UpgradeRewardMovement } from '../models/UpgradeRewardMovement';
import { UpgradeSkill } from '../models/UpgradeSkill';
import { UpgradeSkillConnection } from '../models/UpgradeSkillConnection';
import { UpgradeSkillPivot } from '../models/UpgradeSkillPivot';
import { UpgradeUpgrade } from '../models/UpgradeUpgrade';
import { UpgradeUpgradeConnection } from '../models/UpgradeUpgradeConnection';
import { UpgradeUpgradePivot } from '../models/UpgradeUpgradePivot';
import { User } from '../models/User';
import { UserAchievementConnections } from '../models/UserAchievementConnections';
import { UserAchievementPivot } from '../models/UserAchievementPivot';
import { UserAchievment } from '../models/UserAchievment';
import { UserSkill } from '../models/UserSkill';
import { UserSkillConnection } from '../models/UserSkillConnection';
import { UserSkillConnections } from '../models/UserSkillConnections';
import { UserSkillPivot } from '../models/UserSkillPivot';
import { UserUpgrade } from '../models/UserUpgrade';
import { UserUpgradeConnection } from '../models/UserUpgradeConnection';
import { UserUpgradePivot } from '../models/UserUpgradePivot';

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
    categoryId: string
}

export interface OddGiantsApiCategoriesRequest {
}

export interface OddGiantsApiGiantRequest {
    /**
     * 
     * @type GiantId
     * @memberof OddGiantsApigiant
     */
    giantId: GiantId
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
    categoryId: string
}

export interface OddGiantsApiItemRequest {
    /**
     * 
     * @type string
     * @memberof OddGiantsApiitem
     */
    itemId: string
}

export interface OddGiantsApiItemsByCategoryRequest {
    /**
     * 
     * @type string
     * @memberof OddGiantsApiitemsByCategory
     */
    categoryId: string
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
     * Authentication credentials
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
    searchQuery: string
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
    categoryId: string
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
    categoryId: string
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
        return this.api.achievementsByCategory(param.categoryId,  options).toPromise();
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
    public giant(param: OddGiantsApiGiantRequest, options?: Configuration): Promise<GiantDetails> {
        return this.api.giant(param.giantId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public inhabitant(param: OddGiantsApiInhabitantRequest, options?: Configuration): Promise<InhabitantDetails> {
        return this.api.inhabitant(param.inhabitantId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public inhabitantsByCategory(param: OddGiantsApiInhabitantsByCategoryRequest, options?: Configuration): Promise<Array<Inhabitant>> {
        return this.api.inhabitantsByCategory(param.categoryId,  options).toPromise();
    }

    /**
     * Item information
     * @param param the request object
     */
    public item(param: OddGiantsApiItemRequest, options?: Configuration): Promise<ItemDetails> {
        return this.api.item(param.itemId,  options).toPromise();
    }

    /**
     * List items by category
     * @param param the request object
     */
    public itemsByCategory(param: OddGiantsApiItemsByCategoryRequest, options?: Configuration): Promise<Array<Item>> {
        return this.api.itemsByCategory(param.categoryId,  options).toPromise();
    }

    /**
     * Locations around Ur
     * @param param the request object
     */
    public location(param: OddGiantsApiLocationRequest, options?: Configuration): Promise<LocationDetails> {
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
        return this.api.search(param.searchQuery,  options).toPromise();
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
     * Get Skill by category
     * @param param the request object
     */
    public skillsByCategory(param: OddGiantsApiSkillsByCategoryRequest, options?: Configuration): Promise<Array<Skill>> {
        return this.api.skillsByCategory(param.categoryId,  options).toPromise();
    }

    /**
     * Gets the details of an Upgrade
     * @param param the request object
     */
    public upgrade(param: OddGiantsApiUpgradeRequest, options?: Configuration): Promise<Array<UpgradeDetails>> {
        return this.api.upgrade(param.upgradeId,  options).toPromise();
    }

    /**
     * Get Upgradse by category
     * @param param the request object
     */
    public upgradesByCategory(param: OddGiantsApiUpgradesByCategoryRequest, options?: Configuration): Promise<Array<Upgrade>> {
        return this.api.upgradesByCategory(param.categoryId,  options).toPromise();
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
    public userUpgrades(param: OddGiantsApiUserUpgradesRequest, options?: Configuration): Promise<Array<UserUpgrade>> {
        return this.api.userUpgrades(param.userId,  options).toPromise();
    }

}
