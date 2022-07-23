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
     * @param category 
     */
    public achievementsByCategory(category: string, _options?: Configuration): Promise<Array<Achievement>> {
        const result = this.api.achievementsByCategory(category, _options);
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
     * @param inhabitantId 
     */
    public inhabitant(inhabitantId: string, _options?: Configuration): Promise<Inhabitant> {
        const result = this.api.inhabitant(inhabitantId, _options);
        return result.toPromise();
    }

    /**
     * @param category 
     */
    public inhabitantsByCategory(category: string, _options?: Configuration): Promise<Array<Inhabitant>> {
        const result = this.api.inhabitantsByCategory(category, _options);
        return result.toPromise();
    }

    /**
     * Locations around Ur
     * @param locationId 
     */
    public location(locationId: string, _options?: Configuration): Promise<Location> {
        const result = this.api.location(locationId, _options);
        return result.toPromise();
    }

    /**
     * User's provide an email address and password to gain access to authenticated routes. 
     * Logs in a user
     * @param authenticationCredentials 
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
     * @param q 
     */
    public search(q: string, _options?: Configuration): Promise<SearchResults> {
        const result = this.api.search(q, _options);
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
     * Get Skill Category
     * @param category 
     */
    public skillsByCategory(category: string, _options?: Configuration): Promise<Array<Skill>> {
        const result = this.api.skillsByCategory(category, _options);
        return result.toPromise();
    }

    /**
     * Gets the details of an Upgrade
     * @param upgradeId 
     */
    public upgrade(upgradeId: string, _options?: Configuration): Promise<Array<UpgradeDetails>> {
        const result = this.api.upgrade(upgradeId, _options);
        return result.toPromise();
    }

    /**
     * Get upgrade category
     * @param category 
     */
    public upgradesByCategory(category: string, _options?: Configuration): Promise<Array<Upgrade>> {
        const result = this.api.upgradesByCategory(category, _options);
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
    public userAchievements(userId: number, _options?: Configuration): Promise<Array<UserAchievment>> {
        const result = this.api.userAchievements(userId, _options);
        return result.toPromise();
    }

    /**
     * Gets the skills for a given user
     * @param userId 
     */
    public userSkills(userId: number, _options?: Configuration): Promise<Array<UserSkill>> {
        const result = this.api.userSkills(userId, _options);
        return result.toPromise();
    }

    /**
     * Gets the upgrades for a given user
     * @param userId 
     */
    public userUpgrades(userId: number, _options?: Configuration): Promise<Array<Upgrade>> {
        const result = this.api.userUpgrades(userId, _options);
        return result.toPromise();
    }


}



