import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { OddGiantsApiRequestFactory, OddGiantsApiResponseProcessor} from "../apis/OddGiantsApi";
export class ObservableOddGiantsApi {
    private requestFactory: OddGiantsApiRequestFactory;
    private responseProcessor: OddGiantsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OddGiantsApiRequestFactory,
        responseProcessor?: OddGiantsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OddGiantsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OddGiantsApiResponseProcessor();
    }

    /**
     * Gets Achievement details
     * @param achievementId 
     */
    public achievement(achievementId: string, _options?: Configuration): Observable<AchievementDetails> {
        const requestContextPromise = this.requestFactory.achievement(achievementId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.achievement(rsp)));
            }));
    }

    /**
     * Get Achievements by category
     * @param categoryId 
     */
    public achievementsByCategory(categoryId: string, _options?: Configuration): Observable<Array<Achievement>> {
        const requestContextPromise = this.requestFactory.achievementsByCategory(categoryId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.achievementsByCategory(rsp)));
            }));
    }

    /**
     * Categories of information available within the encyclopedia/api
     */
    public categories(_options?: Configuration): Observable<CategoryIndex> {
        const requestContextPromise = this.requestFactory.categories(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.categories(rsp)));
            }));
    }

    /**
     * @param giantId 
     */
    public giant(giantId: GiantId, _options?: Configuration): Observable<GiantDetails> {
        const requestContextPromise = this.requestFactory.giant(giantId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.giant(rsp)));
            }));
    }

    /**
     * @param inhabitantId 
     */
    public inhabitant(inhabitantId: string, _options?: Configuration): Observable<InhabitantDetails> {
        const requestContextPromise = this.requestFactory.inhabitant(inhabitantId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.inhabitant(rsp)));
            }));
    }

    /**
     * @param categoryId 
     */
    public inhabitantsByCategory(categoryId: string, _options?: Configuration): Observable<Array<Inhabitant>> {
        const requestContextPromise = this.requestFactory.inhabitantsByCategory(categoryId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.inhabitantsByCategory(rsp)));
            }));
    }

    /**
     * Item information
     * @param itemId 
     */
    public item(itemId: string, _options?: Configuration): Observable<ItemDetails> {
        const requestContextPromise = this.requestFactory.item(itemId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.item(rsp)));
            }));
    }

    /**
     * List items by category
     * @param categoryId 
     */
    public itemsByCategory(categoryId: string, _options?: Configuration): Observable<Array<Item>> {
        const requestContextPromise = this.requestFactory.itemsByCategory(categoryId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.itemsByCategory(rsp)));
            }));
    }

    /**
     * Locations around Ur
     * @param locationId 
     */
    public location(locationId: string, _options?: Configuration): Observable<LocationDetails> {
        const requestContextPromise = this.requestFactory.location(locationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.location(rsp)));
            }));
    }

    /**
     * User's provide an email address and password to gain access to authenticated routes. 
     * Logs in a user
     * @param authenticationCredentials Authentication credentials
     */
    public login(authenticationCredentials?: AuthenticationCredentials, _options?: Configuration): Observable<SessionInfo> {
        const requestContextPromise = this.requestFactory.login(authenticationCredentials, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.login(rsp)));
            }));
    }

    /**
     * By sending the refresh_token, the user is able to refresh their session.
     * Refreshes the user's session
     */
    public loginRefresh(_options?: Configuration): Observable<SessionInfo> {
        const requestContextPromise = this.requestFactory.loginRefresh(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.loginRefresh(rsp)));
            }));
    }

    /**
     * Gets the authenticated user
     * Gets the authenticated user
     */
    public me(_options?: Configuration): Observable<User> {
        const requestContextPromise = this.requestFactory.me(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.me(rsp)));
            }));
    }

    /**
     * Locations around Ur
     * @param regionId 
     */
    public region(regionId: string, _options?: Configuration): Observable<Location> {
        const requestContextPromise = this.requestFactory.region(regionId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.region(rsp)));
            }));
    }

    /**
     * Search
     * @param searchQuery 
     */
    public search(searchQuery: string, _options?: Configuration): Observable<SearchResults> {
        const requestContextPromise = this.requestFactory.search(searchQuery, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.search(rsp)));
            }));
    }

    /**
     * 
     * List 
     */
    public serverStats(_options?: Configuration): Observable<ServerStats> {
        const requestContextPromise = this.requestFactory.serverStats(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.serverStats(rsp)));
            }));
    }

    /**
     * Get Skill
     * @param skillId 
     */
    public skill(skillId: string, _options?: Configuration): Observable<SkillDetails> {
        const requestContextPromise = this.requestFactory.skill(skillId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.skill(rsp)));
            }));
    }

    /**
     * Get Skill by category
     * @param categoryId 
     */
    public skillsByCategory(categoryId: string, _options?: Configuration): Observable<Array<Skill>> {
        const requestContextPromise = this.requestFactory.skillsByCategory(categoryId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.skillsByCategory(rsp)));
            }));
    }

    /**
     * Gets the details of an Upgrade
     * @param upgradeId 
     */
    public upgrade(upgradeId: string, _options?: Configuration): Observable<Array<UpgradeDetails>> {
        const requestContextPromise = this.requestFactory.upgrade(upgradeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.upgrade(rsp)));
            }));
    }

    /**
     * Get Upgradse by category
     * @param categoryId 
     */
    public upgradesByCategory(categoryId: string, _options?: Configuration): Observable<Array<Upgrade>> {
        const requestContextPromise = this.requestFactory.upgradesByCategory(categoryId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.upgradesByCategory(rsp)));
            }));
    }

    /**
     * Gets information about a specific user
     * @param userId 
     */
    public user(userId: number, _options?: Configuration): Observable<User> {
        const requestContextPromise = this.requestFactory.user(userId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.user(rsp)));
            }));
    }

    /**
     * Gets the achievments for a given user
     * @param userId 
     */
    public userAchievements(userId: number, _options?: Configuration): Observable<Array<UserAchievment>> {
        const requestContextPromise = this.requestFactory.userAchievements(userId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.userAchievements(rsp)));
            }));
    }

    /**
     * Gets the skills for a given user
     * @param userId 
     */
    public userSkills(userId: number, _options?: Configuration): Observable<Array<UserSkill>> {
        const requestContextPromise = this.requestFactory.userSkills(userId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.userSkills(rsp)));
            }));
    }

    /**
     * Gets the upgrades for a given user
     * @param userId 
     */
    public userUpgrades(userId: number, _options?: Configuration): Observable<Array<UserUpgrade>> {
        const requestContextPromise = this.requestFactory.userUpgrades(userId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.userUpgrades(rsp)));
            }));
    }

}
