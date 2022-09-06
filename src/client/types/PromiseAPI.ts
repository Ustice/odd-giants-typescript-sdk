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
import { GetAchievementsByCategoryResponse } from '../models/GetAchievementsByCategoryResponse';
import { GetInhabitantsByCategoryResponse } from '../models/GetInhabitantsByCategoryResponse';
import { GetItemsByCategoryResponse } from '../models/GetItemsByCategoryResponse';
import { GetSkillsByCategoryResponse } from '../models/GetSkillsByCategoryResponse';
import { GetUpgradeResponse } from '../models/GetUpgradeResponse';
import { GetUpgradesByCategoryResponse } from '../models/GetUpgradesByCategoryResponse';
import { GetUserAchievementsResponse } from '../models/GetUserAchievementsResponse';
import { GetUserSkillsResponse } from '../models/GetUserSkillsResponse';
import { GetUserUpgradesResponse } from '../models/GetUserUpgradesResponse';
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
import { LocationContents } from '../models/LocationContents';
import { LocationContentsValue } from '../models/LocationContentsValue';
import { LocationDetails } from '../models/LocationDetails';
import { LocationInhabitant } from '../models/LocationInhabitant';
import { LocationInhabitantConnection } from '../models/LocationInhabitantConnection';
import { LocationInhabitantPivot } from '../models/LocationInhabitantPivot';
import { LocationItem } from '../models/LocationItem';
import { LocationItemConnection } from '../models/LocationItemConnection';
import { LocationItemPivot } from '../models/LocationItemPivot';
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
import { ObservableOddGiantsApi } from './ObservableAPI';

import { OddGiantsApiRequestFactory, OddGiantsApiResponseProcessor} from "../apis/OddGiantsApi";
export class PromiseOddGiantsApi {
    private api: ObservableOddGiantsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OddGiantsApiRequestFactory,
        responseProcessor?: OddGiantsApiResponseProcessor
    ) {
        this.api = new ObservableOddGiantsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets Achievement details
     * @param achievementId 
     */
    public achievement(achievementId: string, _options?: Configuration): Promise<AchievementDetails> {
        const result = this.api.achievement(achievementId, _options);
        return result.toPromise();
    }

    /**
     * Get Achievements by category
     * @param categoryId 
     */
    public achievementsByCategory(categoryId: string, _options?: Configuration): Promise<GetAchievementsByCategoryResponse> {
        const result = this.api.achievementsByCategory(categoryId, _options);
        return result.toPromise();
    }

    /**
     * Categories of information available within the encyclopedia/api
     */
    public categories(_options?: Configuration): Promise<CategoryIndex> {
        const result = this.api.categories(_options);
        return result.toPromise();
    }

    /**
     * @param giantId 
     */
    public giant(giantId: GiantId, _options?: Configuration): Promise<GiantDetails> {
        const result = this.api.giant(giantId, _options);
        return result.toPromise();
    }

    /**
     * @param inhabitantId 
     */
    public inhabitant(inhabitantId: string, _options?: Configuration): Promise<InhabitantDetails> {
        const result = this.api.inhabitant(inhabitantId, _options);
        return result.toPromise();
    }

    /**
     * @param categoryId 
     */
    public inhabitantsByCategory(categoryId: string, _options?: Configuration): Promise<GetInhabitantsByCategoryResponse> {
        const result = this.api.inhabitantsByCategory(categoryId, _options);
        return result.toPromise();
    }

    /**
     * Item information
     * @param itemId 
     */
    public item(itemId: string, _options?: Configuration): Promise<ItemDetails> {
        const result = this.api.item(itemId, _options);
        return result.toPromise();
    }

    /**
     * List items by category
     * @param categoryId 
     */
    public itemsByCategory(categoryId: string, _options?: Configuration): Promise<GetItemsByCategoryResponse> {
        const result = this.api.itemsByCategory(categoryId, _options);
        return result.toPromise();
    }

    /**
     * Locations around Ur
     * @param locationId 
     */
    public location(locationId: string, _options?: Configuration): Promise<LocationDetails> {
        const result = this.api.location(locationId, _options);
        return result.toPromise();
    }

    /**
     * User's provide an email address and password to gain access to authenticated routes. 
     * Logs in a user
     * @param authenticationCredentials Authentication credentials
     */
    public login(authenticationCredentials?: AuthenticationCredentials, _options?: Configuration): Promise<SessionInfo> {
        const result = this.api.login(authenticationCredentials, _options);
        return result.toPromise();
    }

    /**
     * By sending the refresh_token, the user is able to refresh their session.
     * Refreshes the user's session
     */
    public loginRefresh(_options?: Configuration): Promise<SessionInfo> {
        const result = this.api.loginRefresh(_options);
        return result.toPromise();
    }

    /**
     * Gets the authenticated user
     * Gets the authenticated user
     */
    public me(_options?: Configuration): Promise<User> {
        const result = this.api.me(_options);
        return result.toPromise();
    }

    /**
     * Locations around Ur
     * @param regionId 
     */
    public region(regionId: string, _options?: Configuration): Promise<Location> {
        const result = this.api.region(regionId, _options);
        return result.toPromise();
    }

    /**
     * Search
     * @param searchQuery 
     */
    public search(searchQuery: string, _options?: Configuration): Promise<SearchResults> {
        const result = this.api.search(searchQuery, _options);
        return result.toPromise();
    }

    /**
     * 
     * List 
     */
    public serverStats(_options?: Configuration): Promise<ServerStats> {
        const result = this.api.serverStats(_options);
        return result.toPromise();
    }

    /**
     * Get Skill
     * @param skillId 
     */
    public skill(skillId: string, _options?: Configuration): Promise<SkillDetails> {
        const result = this.api.skill(skillId, _options);
        return result.toPromise();
    }

    /**
     * Get Skill by category
     * @param categoryId 
     */
    public skillsByCategory(categoryId: string, _options?: Configuration): Promise<GetSkillsByCategoryResponse> {
        const result = this.api.skillsByCategory(categoryId, _options);
        return result.toPromise();
    }

    /**
     * Gets the details of an Upgrade
     * @param upgradeId 
     */
    public upgrade(upgradeId: string, _options?: Configuration): Promise<GetUpgradeResponse> {
        const result = this.api.upgrade(upgradeId, _options);
        return result.toPromise();
    }

    /**
     * Get Upgradse by category
     * @param categoryId 
     */
    public upgradesByCategory(categoryId: string, _options?: Configuration): Promise<GetUpgradesByCategoryResponse> {
        const result = this.api.upgradesByCategory(categoryId, _options);
        return result.toPromise();
    }

    /**
     * Gets information about a specific user
     * @param userId 
     */
    public user(userId: number, _options?: Configuration): Promise<User> {
        const result = this.api.user(userId, _options);
        return result.toPromise();
    }

    /**
     * Gets the achievments for a given user
     * @param userId 
     */
    public userAchievements(userId: number, _options?: Configuration): Promise<GetUserAchievementsResponse> {
        const result = this.api.userAchievements(userId, _options);
        return result.toPromise();
    }

    /**
     * Gets the skills for a given user
     * @param userId 
     */
    public userSkills(userId: number, _options?: Configuration): Promise<GetUserSkillsResponse> {
        const result = this.api.userSkills(userId, _options);
        return result.toPromise();
    }

    /**
     * Gets the upgrades for a given user
     * @param userId 
     */
    public userUpgrades(userId: number, _options?: Configuration): Promise<GetUserUpgradesResponse> {
        const result = this.api.userUpgrades(userId, _options);
        return result.toPromise();
    }


}



