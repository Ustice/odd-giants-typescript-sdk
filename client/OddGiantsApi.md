# OddGiants.OddGiantsApi

All URIs are relative to *https://api.oddgiants.com/public*

Method | HTTP request | Description
------------- | ------------- | -------------
[**achievement**](OddGiantsApi.md#achievement) | **GET** /encyclopedia/achievement/{achievement_id} | 
[**achievementsByCategory**](OddGiantsApi.md#achievementsByCategory) | **GET** /encyclopedia/achievments/{category_id} | 
[**categories**](OddGiantsApi.md#categories) | **GET** /encyclepedia/categories | 
[**giant**](OddGiantsApi.md#giant) | **GET** /encyclopedia/giants/{giant_id} | 
[**inhabitant**](OddGiantsApi.md#inhabitant) | **GET** /encyclopedia/inhabitant/{inhabitant_id} | 
[**inhabitantsByCategory**](OddGiantsApi.md#inhabitantsByCategory) | **GET** /encyclopedia/inhabitants/{category_id} | 
[**item**](OddGiantsApi.md#item) | **GET** /encyclopedia/item/{item_id} | 
[**itemsByCategory**](OddGiantsApi.md#itemsByCategory) | **GET** /encyclopedia/items/{category_id} | 
[**location**](OddGiantsApi.md#location) | **GET** /encyclopedia/location/{location_id} | 
[**login**](OddGiantsApi.md#login) | **POST** /login | Logs in a user
[**loginRefresh**](OddGiantsApi.md#loginRefresh) | **POST** /login/refresh | Refreshes the user&#39;s session
[**me**](OddGiantsApi.md#me) | **GET** /users | Gets the authenticated user
[**region**](OddGiantsApi.md#region) | **GET** /encyclopedia/locations/{region_id} | 
[**search**](OddGiantsApi.md#search) | **GET** /encyclopedia/search | 
[**serverStats**](OddGiantsApi.md#serverStats) | **GET** /configs | List 
[**skill**](OddGiantsApi.md#skill) | **GET** /encyclopedia/skill/{skill_id} | 
[**skillsByCategory**](OddGiantsApi.md#skillsByCategory) | **GET** /encyclopedia/skills/{category_id} | 
[**upgrade**](OddGiantsApi.md#upgrade) | **GET** /encyclopedia/upgrade/{upgrade_id} | 
[**upgradesByCategory**](OddGiantsApi.md#upgradesByCategory) | **GET** /encyclopedia/upgrades/{category_id} | 
[**user**](OddGiantsApi.md#user) | **GET** /users/{user_id} | 
[**userAchievements**](OddGiantsApi.md#userAchievements) | **GET** /users/{user_id}/achievments | 
[**userSkills**](OddGiantsApi.md#userSkills) | **GET** /users/{user_id}/skills | 
[**userUpgrades**](OddGiantsApi.md#userUpgrades) | **GET** /users/{user_id}/upgrades | 


# **achievement**

```typescript
declare function achievement(achievementId: string, options?: Configuration): AchievementDetails
```

Gets Achievement details

### Example


```typescript
import { createConfiguration, OddGiantsApi } from 'odd-giants'

const configuration = createConfiguration()
const oddGiants = new OddGiantsApi(configuration)

const achievementId = "ar2c3v8s7djuy2zmetozkhdomha2b"

const value = await oddGiants.achievement(achievementId)

console.log(`API called successfully. Returned data: ${ value }`)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **achievementId** | [**string**] |  | defaults to undefined


### Return type

`AchievementDetails`

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully loaded Achievement |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **achievementsByCategory**

```typescript
declare function achievementsByCategory(categoryId: string, options?: Configuration): Array<Achievement>
```

Get Achievements by category

### Example


```typescript
import { createConfiguration, OddGiantsApi } from 'odd-giants'

const configuration = createConfiguration()
const oddGiants = new OddGiantsApi(configuration)

const categoryId = "ar2c3v8s7djuy2zmetozkhdomha2b"

const value = await oddGiants.achievementsByCategory(categoryId)

console.log(`API called successfully. Returned data: ${ value }`)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | [**string**] |  | defaults to undefined


### Return type

`Array<Achievement>`

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully loaded Achievement by category |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **categories**

```typescript
declare function categories(options?: Configuration): CategoryIndex
```

Categories of information available within the encyclopedia/api

### Example


```typescript
import { createConfiguration, OddGiantsApi } from 'odd-giants'

const configuration = createConfiguration()
const oddGiants = new OddGiantsApi(configuration)

const value = await oddGiants.categories()

console.log(`API called successfully. Returned data: ${ value }`)
```

### Return type

`CategoryIndex`

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | CategoryIndex |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **giant**

```typescript
declare function giant(giantId: GiantId, options?: Configuration): GiantDetails
```


### Example


```typescript
import { createConfiguration, OddGiantsApi } from 'odd-giants'

const configuration = createConfiguration()
const oddGiants = new OddGiantsApi(configuration)

const giantId = "alph"

const value = await oddGiants.giant(giantId)

console.log(`API called successfully. Returned data: ${ value }`)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **giantId** | **GiantId** |  | defaults to undefined


### Return type

`GiantDetails`

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully loaded Giant |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **inhabitant**

```typescript
declare function inhabitant(inhabitantId: string, options?: Configuration): InhabitantDetails
```


### Example


```typescript
import { createConfiguration, OddGiantsApi } from 'odd-giants'

const configuration = createConfiguration()
const oddGiants = new OddGiantsApi(configuration)

const inhabitantId = "npc_p"

const value = await oddGiants.inhabitant(inhabitantId)

console.log(`API called successfully. Returned data: ${ value }`)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inhabitantId** | [**string**] |  | defaults to undefined


### Return type

`InhabitantDetails`

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully loaded Inhabitant |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **inhabitantsByCategory**

```typescript
declare function inhabitantsByCategory(categoryId: string, options?: Configuration): Array<Inhabitant>
```


### Example


```typescript
import { createConfiguration, OddGiantsApi } from 'odd-giants'

const configuration = createConfiguration()
const oddGiants = new OddGiantsApi(configuration)

const categoryId = "ar2c3v8s7djuy2zmetozkhdomha2b"

const value = await oddGiants.inhabitantsByCategory(categoryId)

console.log(`API called successfully. Returned data: ${ value }`)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | [**string**] |  | defaults to undefined


### Return type

`Array<Inhabitant>`

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sucessfully loaded Inhabitants by category |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **item**

```typescript
declare function item(itemId: string, options?: Configuration): ItemDetails
```

Item information

### Example


```typescript
import { createConfiguration, OddGiantsApi } from 'odd-giants'

const configuration = createConfiguration()
const oddGiants = new OddGiantsApi(configuration)

const itemId = "ar2c3v8s7djuy2zmetozkhdomha2b"

const value = await oddGiants.item(itemId)

console.log(`API called successfully. Returned data: ${ value }`)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemId** | [**string**] |  | defaults to undefined


### Return type

`ItemDetails`

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully loaded Item |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **itemsByCategory**

```typescript
declare function itemsByCategory(categoryId: string, options?: Configuration): Array<Item>
```

List items by category

### Example


```typescript
import { createConfiguration, OddGiantsApi } from 'odd-giants'

const configuration = createConfiguration()
const oddGiants = new OddGiantsApi(configuration)

const categoryId = "ar2c3v8s7djuy2zmetozkhdomha2b"

const value = await oddGiants.itemsByCategory(categoryId)

console.log(`API called successfully. Returned data: ${ value }`)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | [**string**] |  | defaults to undefined


### Return type

`Array<Item>`

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sucessfully loaded Items by category |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **location**

```typescript
declare function location(locationId: string, options?: Configuration): LocationDetails
```

Locations around Ur

### Example


```typescript
import { createConfiguration, OddGiantsApi } from 'odd-giants'

const configuration = createConfiguration()
const oddGiants = new OddGiantsApi(configuration)

const locationId = "GCR105E77812AEF"

const value = await oddGiants.location(locationId)

console.log(`API called successfully. Returned data: ${ value }`)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | [**string**] |  | defaults to undefined


### Return type

`LocationDetails`

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Location loaded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **login**

```typescript
declare function login(authenticationCredentials?: AuthenticationCredentials, options?: Configuration): SessionInfo
```

User's provide an email address and password to gain access to authenticated routes. 

### Example


```typescript
import { createConfiguration, OddGiantsApi } from 'odd-giants'

const configuration = createConfiguration()
const oddGiants = new OddGiantsApi(configuration)

const authenticationCredentials = {
    email: "user@domain.tld",
    password: "THIS_IS_A_BAD_PASSWORD",
    remember: true,
  }

const value = await oddGiants.login(authenticationCredentials)

console.log(`API called successfully. Returned data: ${ value }`)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authenticationCredentials** | **AuthenticationCredentials**| Authentication credentials |


### Return type

`SessionInfo`

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful authentication |  -  |
**302** | The user failed to log in successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **loginRefresh**

```typescript
declare function loginRefresh(options?: Configuration): SessionInfo
```

By sending the refresh_token, the user is able to refresh their session.

### Example


```typescript
import { createConfiguration, OddGiantsApi } from 'odd-giants'

const configuration = createConfiguration()
const oddGiants = new OddGiantsApi(configuration)

const value = await oddGiants.loginRefresh()

console.log(`API called successfully. Returned data: ${ value }`)
```

### Return type

`SessionInfo`

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The user has successfully refreshed their session |  -  |
**400** | Something went wrong |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **me**

```typescript
declare function me(options?: Configuration): User
```

Gets the authenticated user

### Example


```typescript
import { createConfiguration, OddGiantsApi } from 'odd-giants'

const configuration = createConfiguration()
const oddGiants = new OddGiantsApi(configuration)

const value = await oddGiants.me()

console.log(`API called successfully. Returned data: ${ value }`)
```

### Return type

`User`

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Hey, it&#39;s you! |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **region**

```typescript
declare function region(regionId: string, options?: Configuration): Location
```

Locations around Ur

### Example


```typescript
import { createConfiguration, OddGiantsApi } from 'odd-giants'

const configuration = createConfiguration()
const oddGiants = new OddGiantsApi(configuration)

const regionId = "ar2c3v8s7djuy2zmetozkhdomha2b"

const value = await oddGiants.region(regionId)

console.log(`API called successfully. Returned data: ${ value }`)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **regionId** | [**string**] |  | defaults to undefined


### Return type

`Location`

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully loaded Region |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **search**

```typescript
declare function search(searchQuery: string, options?: Configuration): SearchResults
```

Search

### Example


```typescript
import { createConfiguration, OddGiantsApi } from 'odd-giants'

const configuration = createConfiguration()
const oddGiants = new OddGiantsApi(configuration)

const searchQuery = "search_query_example"

const value = await oddGiants.search(searchQuery)

console.log(`API called successfully. Returned data: ${ value }`)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchQuery** | [**string**] |  | defaults to undefined


### Return type

`SearchResults`

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully loaded search results |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **serverStats**

```typescript
declare function serverStats(options?: Configuration): ServerStats
```



### Example


```typescript
import { createConfiguration, OddGiantsApi } from 'odd-giants'

const configuration = createConfiguration()
const oddGiants = new OddGiantsApi(configuration)

const value = await oddGiants.serverStats()

console.log(`API called successfully. Returned data: ${ value }`)
```

### Return type

`ServerStats`

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully loaded server stats |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **skill**

```typescript
declare function skill(skillId: string, options?: Configuration): SkillDetails
```

Get Skill

### Example


```typescript
import { createConfiguration, OddGiantsApi } from 'odd-giants'

const configuration = createConfiguration()
const oddGiants = new OddGiantsApi(configuration)

const skillId = "ar2c3v"

const value = await oddGiants.skill(skillId)

console.log(`API called successfully. Returned data: ${ value }`)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skillId** | [**string**] |  | defaults to undefined


### Return type

`SkillDetails`

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sucessfully loaded Inhabitants by category |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **skillsByCategory**

```typescript
declare function skillsByCategory(categoryId: string, options?: Configuration): Array<Skill>
```

Get Skill by category

### Example


```typescript
import { createConfiguration, OddGiantsApi } from 'odd-giants'

const configuration = createConfiguration()
const oddGiants = new OddGiantsApi(configuration)

const categoryId = "ar2c3v8s7djuy2zmetozkhdomha2b"

const value = await oddGiants.skillsByCategory(categoryId)

console.log(`API called successfully. Returned data: ${ value }`)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | [**string**] |  | defaults to undefined


### Return type

`Array<Skill>`

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sucessfully loaded Inhabitants by category |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **upgrade**

```typescript
declare function upgrade(upgradeId: string, options?: Configuration): Array<UpgradeDetails>
```

Gets the details of an Upgrade

### Example


```typescript
import { createConfiguration, OddGiantsApi } from 'odd-giants'

const configuration = createConfiguration()
const oddGiants = new OddGiantsApi(configuration)

const upgradeId = "ar2c3v8s7djuy2zmetozkhdomha2b"

const value = await oddGiants.upgrade(upgradeId)

console.log(`API called successfully. Returned data: ${ value }`)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **upgradeId** | [**string**] |  | defaults to undefined


### Return type

`Array<UpgradeDetails>`

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sucessfully loaded Inhabitants by category |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **upgradesByCategory**

```typescript
declare function upgradesByCategory(categoryId: string, options?: Configuration): Array<Upgrade>
```

Get Upgradse by category

### Example


```typescript
import { createConfiguration, OddGiantsApi } from 'odd-giants'

const configuration = createConfiguration()
const oddGiants = new OddGiantsApi(configuration)

const categoryId = "ar2c3v8s7djuy2zmetozkhdomha2b"

const value = await oddGiants.upgradesByCategory(categoryId)

console.log(`API called successfully. Returned data: ${ value }`)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | [**string**] |  | defaults to undefined


### Return type

`Array<Upgrade>`

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sucessfully loaded Inhabitants by category |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **user**

```typescript
declare function user(userId: number, options?: Configuration): User
```

Gets information about a specific user

### Example


```typescript
import { createConfiguration, OddGiantsApi } from 'odd-giants'

const configuration = createConfiguration()
const oddGiants = new OddGiantsApi(configuration)

const userId = 572

const value = await oddGiants.user(userId)

console.log(`API called successfully. Returned data: ${ value }`)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**number**] |  | defaults to undefined


### Return type

`User`

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully loaded user info |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **userAchievements**

```typescript
declare function userAchievements(userId: number, options?: Configuration): Array<UserAchievment>
```

Gets the achievments for a given user

### Example


```typescript
import { createConfiguration, OddGiantsApi } from 'odd-giants'

const configuration = createConfiguration()
const oddGiants = new OddGiantsApi(configuration)

const userId = 572

const value = await oddGiants.userAchievements(userId)

console.log(`API called successfully. Returned data: ${ value }`)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**number**] |  | defaults to undefined


### Return type

`Array<UserAchievment>`

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sucessfully loaded the given user&#39;s achievments |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **userSkills**

```typescript
declare function userSkills(userId: number, options?: Configuration): Array<UserSkill>
```

Gets the skills for a given user

### Example


```typescript
import { createConfiguration, OddGiantsApi } from 'odd-giants'

const configuration = createConfiguration()
const oddGiants = new OddGiantsApi(configuration)

const userId = 572

const value = await oddGiants.userSkills(userId)

console.log(`API called successfully. Returned data: ${ value }`)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**number**] |  | defaults to undefined


### Return type

`Array<UserSkill>`

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sucessfully loaded the User&#39;s Skills |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **userUpgrades**

```typescript
declare function userUpgrades(userId: number, options?: Configuration): Array<UserUpgrade>
```

Gets the upgrades for a given user

### Example


```typescript
import { createConfiguration, OddGiantsApi } from 'odd-giants'

const configuration = createConfiguration()
const oddGiants = new OddGiantsApi(configuration)

const userId = 572

const value = await oddGiants.userUpgrades(userId)

console.log(`API called successfully. Returned data: ${ value }`)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**number**] |  | defaults to undefined


### Return type

`Array<UserUpgrade>`

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sucessfully loaded the User&#39;s Upgrades |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


