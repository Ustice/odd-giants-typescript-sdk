# OddGiants.OddGiantsApi

All URIs are relative to *https://api.oddgiants.com/public*

Method | HTTP request | Description
------------- | ------------- | -------------
[**achievement**](OddGiantsApi.md#achievement) | **GET** /encyclopedia/achievement/{achievement_id} | 
[**achievementsByCategory**](OddGiantsApi.md#achievementsByCategory) | **GET** /encyclopedia/achievments/{category} | 
[**categories**](OddGiantsApi.md#categories) | **GET** /encyclepedia/categories | 
[**inhabitant**](OddGiantsApi.md#inhabitant) | **GET** /encyclopedia/inhabitant/{inhabitant_id} | 
[**inhabitantsByCategory**](OddGiantsApi.md#inhabitantsByCategory) | **GET** /encyclopedia/inhabitants/{category} | 
[**location**](OddGiantsApi.md#location) | **GET** /encyclopedia/location/{location_id} | 
[**login**](OddGiantsApi.md#login) | **POST** /login | Logs in a user
[**loginRefresh**](OddGiantsApi.md#loginRefresh) | **POST** /login/refresh | Refreshes the user&#39;s session
[**me**](OddGiantsApi.md#me) | **GET** /users | Gets the authenticated user
[**region**](OddGiantsApi.md#region) | **GET** /encyclopedia/locations/{region_id} | 
[**search**](OddGiantsApi.md#search) | **GET** /encyclopedia/search | 
[**serverStats**](OddGiantsApi.md#serverStats) | **GET** /configs | List 
[**skill**](OddGiantsApi.md#skill) | **GET** /encyclopedia/skill/{skill_id} | 
[**skillsByCategory**](OddGiantsApi.md#skillsByCategory) | **GET** /encyclopedia/skills/{category} | 
[**upgrade**](OddGiantsApi.md#upgrade) | **GET** /encyclopedia/upgrade/{upgrade_id} | 
[**upgradesByCategory**](OddGiantsApi.md#upgradesByCategory) | **GET** /encyclopedia/upgrades/{category} | 
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
import * as fs from 'fs'

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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **achievementsByCategory**

```typescript
declare function achievementsByCategory(category: string, options?: Configuration): Array<Achievement>
```

Get Achievements by category

### Example


```typescript
import { createConfiguration, OddGiantsApi } from 'odd-giants'
import * as fs from 'fs'

const configuration = createConfiguration()
const oddGiants = new OddGiantsApi(configuration)

const category = "ar2c3v8s7djuy2zmetozkhdomha2b"

const value = await oddGiants.achievementsByCategory(category)

console.log(`API called successfully. Returned data: ${ value }`)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | [**string**] |  | defaults to undefined


### Return type

`Array<Achievement>`

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully loaded Achievement category |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **categories**

```typescript
declare function categories(options?: Configuration): CategoryIndex
```

Categories of information available within the encyclopedia/api

### Example


```typescript
import { createConfiguration, OddGiantsApi } from 'odd-giants'
import * as fs from 'fs'

const configuration = createConfiguration()
const oddGiants = new OddGiantsApi(configuration)

const value = await oddGiants.categories()

console.log(`API called successfully. Returned data: ${ value }`)
```

### Return type

`CategoryIndex`

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | CategoryIndex |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **inhabitant**

```typescript
declare function inhabitant(inhabitantId: string, options?: Configuration): Inhabitant
```


### Example


```typescript
import { createConfiguration, OddGiantsApi } from 'odd-giants'
import * as fs from 'fs'

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

`Inhabitant`

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Inhabitant loaded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **inhabitantsByCategory**

```typescript
declare function inhabitantsByCategory(category: string, options?: Configuration): Array<Inhabitant>
```


### Example


```typescript
import { createConfiguration, OddGiantsApi } from 'odd-giants'
import * as fs from 'fs'

const configuration = createConfiguration()
const oddGiants = new OddGiantsApi(configuration)

const category = "category_example"

const value = await oddGiants.inhabitantsByCategory(category)

console.log(`API called successfully. Returned data: ${ value }`)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | [**string**] |  | defaults to undefined


### Return type

`Array<Inhabitant>`

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Inhabitants loaded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **location**

```typescript
declare function location(locationId: string, options?: Configuration): Location
```

Locations around Ur

### Example


```typescript
import { createConfiguration, OddGiantsApi } from 'odd-giants'
import * as fs from 'fs'

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

`Location`

### Authorization

No authorization required

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
import * as fs from 'fs'

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
 **authenticationCredentials** | **AuthenticationCredentials**|  |


### Return type

`SessionInfo`

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The user has sucessfully authenticated |  -  |
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
import * as fs from 'fs'

const configuration = createConfiguration()
const oddGiants = new OddGiantsApi(configuration)

const value = await oddGiants.loginRefresh()

console.log(`API called successfully. Returned data: ${ value }`)
```

### Return type

`SessionInfo`

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The user has successfully refreshed their session. |  -  |
**400** | Something went wrong. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **me**

```typescript
declare function me(options?: Configuration): User
```

Gets the authenticated user

### Example


```typescript
import { createConfiguration, OddGiantsApi } from 'odd-giants'
import * as fs from 'fs'

const configuration = createConfiguration()
const oddGiants = new OddGiantsApi(configuration)

const value = await oddGiants.me()

console.log(`API called successfully. Returned data: ${ value }`)
```

### Return type

`User`

### Authorization

No authorization required

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
import * as fs from 'fs'

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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Location loaded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **search**

```typescript
declare function search(q: string, options?: Configuration): SearchResults
```

Search

### Example


```typescript
import { createConfiguration, OddGiantsApi } from 'odd-giants'
import * as fs from 'fs'

const configuration = createConfiguration()
const oddGiants = new OddGiantsApi(configuration)

const q = "q_example"

const value = await oddGiants.search(q)

console.log(`API called successfully. Returned data: ${ value }`)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | [**string**] |  | defaults to undefined


### Return type

`SearchResults`

### Authorization

No authorization required

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
import * as fs from 'fs'

const configuration = createConfiguration()
const oddGiants = new OddGiantsApi(configuration)

const value = await oddGiants.serverStats()

console.log(`API called successfully. Returned data: ${ value }`)
```

### Return type

`ServerStats`

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **skill**

```typescript
declare function skill(skillId: string, options?: Configuration): SkillDetails
```

Get Skill

### Example


```typescript
import { createConfiguration, OddGiantsApi } from 'odd-giants'
import * as fs from 'fs'

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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Skill loaded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **skillsByCategory**

```typescript
declare function skillsByCategory(category: string, options?: Configuration): Array<Skill>
```

Get Skill Category

### Example


```typescript
import { createConfiguration, OddGiantsApi } from 'odd-giants'
import * as fs from 'fs'

const configuration = createConfiguration()
const oddGiants = new OddGiantsApi(configuration)

const category = "ar2c3v8s7djuy2zmetozkhdomha2b"

const value = await oddGiants.skillsByCategory(category)

console.log(`API called successfully. Returned data: ${ value }`)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | [**string**] |  | defaults to undefined


### Return type

`Array<Skill>`

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Skill category loaded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **upgrade**

```typescript
declare function upgrade(upgradeId: string, options?: Configuration): Array<UpgradeDetails>
```

Gets the details of an Upgrade

### Example


```typescript
import { createConfiguration, OddGiantsApi } from 'odd-giants'
import * as fs from 'fs'

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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully loaded Upgrade details |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **upgradesByCategory**

```typescript
declare function upgradesByCategory(category: string, options?: Configuration): Array<Upgrade>
```

Get upgrade category

### Example


```typescript
import { createConfiguration, OddGiantsApi } from 'odd-giants'
import * as fs from 'fs'

const configuration = createConfiguration()
const oddGiants = new OddGiantsApi(configuration)

const category = "ar2c3v8s7djuy2zmetozkhdomha2b"

const value = await oddGiants.upgradesByCategory(category)

console.log(`API called successfully. Returned data: ${ value }`)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | [**string**] |  | defaults to undefined


### Return type

`Array<Upgrade>`

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Upgrade category loaded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **user**

```typescript
declare function user(userId: number, options?: Configuration): User
```

Gets information about a specific user

### Example


```typescript
import { createConfiguration, OddGiantsApi } from 'odd-giants'
import * as fs from 'fs'

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

No authorization required

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
import * as fs from 'fs'

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

No authorization required

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
import * as fs from 'fs'

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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sucessfully loaded the given user&#39;s skills |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **userUpgrades**

```typescript
declare function userUpgrades(userId: number, options?: Configuration): Array<Upgrade>
```

Gets the upgrades for a given user

### Example


```typescript
import { createConfiguration, OddGiantsApi } from 'odd-giants'
import * as fs from 'fs'

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

`Array<Upgrade>`

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sucessfully loaded the given user&#39;s upgrades |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


