import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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
     * @param category 
     */
    public achievementsByCategory(category: string, _options?: Configuration): Observable<Array<Achievement>> {
        const requestContextPromise = this.requestFactory.achievementsByCategory(category, _options);

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
     * @param inhabitantId 
     */
    public inhabitant(inhabitantId: string, _options?: Configuration): Observable<Inhabitant> {
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
     * @param category 
     */
    public inhabitantsByCategory(category: string, _options?: Configuration): Observable<Array<Inhabitant>> {
        const requestContextPromise = this.requestFactory.inhabitantsByCategory(category, _options);

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
     * Locations around Ur
     * @param locationId 
     */
    public location(locationId: string, _options?: Configuration): Observable<Location> {
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
     * @param authenticationCredentials 
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
     * @param q 
     */
    public search(q: string, _options?: Configuration): Observable<SearchResults> {
        const requestContextPromise = this.requestFactory.search(q, _options);

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
     * Get Skill Category
     * @param category 
     */
    public skillsByCategory(category: string, _options?: Configuration): Observable<Array<Skill>> {
        const requestContextPromise = this.requestFactory.skillsByCategory(category, _options);

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
     * Get upgrade category
     * @param category 
     */
    public upgradesByCategory(category: string, _options?: Configuration): Observable<Array<Upgrade>> {
        const requestContextPromise = this.requestFactory.upgradesByCategory(category, _options);

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
    public userUpgrades(userId: number, _options?: Configuration): Observable<Array<Upgrade>> {
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
