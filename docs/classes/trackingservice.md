[node-parcelperfect](../README.md) / [Exports](../modules.md) / TrackingService

# Class: TrackingService

## Hierarchy

* **TrackingService**

## Table of contents

### Constructors

- [constructor](trackingservice.md#constructor)

### Properties

- [baseUrl](trackingservice.md#baseurl)

### Methods

- [authenticate](trackingservice.md#authenticate)
- [configureNotifications](trackingservice.md#configurenotifications)
- [expireToken](trackingservice.md#expiretoken)
- [getCollection](trackingservice.md#getcollection)
- [getEvents](trackingservice.md#getevents)
- [getPOD](trackingservice.md#getpod)
- [getPODSignature](trackingservice.md#getpodsignature)
- [getPODsByDate](trackingservice.md#getpodsbydate)
- [getTracks](trackingservice.md#gettracks)
- [getWaybill](trackingservice.md#getwaybill)
- [getWaybillByValue](trackingservice.md#getwaybillbyvalue)
- [getWaybillsByDate](trackingservice.md#getwaybillsbydate)

## Constructors

### constructor

\+ **new TrackingService**(`config`: Config): [*TrackingService*](trackingservice.md)

#### Parameters:

Name | Type |
------ | ------ |
`config` | Config |

**Returns:** [*TrackingService*](trackingservice.md)

Defined in: [TrackingService.ts:18](https://github.com/jeanverster/node-parcelperfect/blob/df3e988/src/TrackingService.ts#L18)

## Properties

### baseUrl

• `Private` `Readonly` **baseUrl**: *string*

Defined in: [TrackingService.ts:18](https://github.com/jeanverster/node-parcelperfect/blob/df3e988/src/TrackingService.ts#L18)

## Methods

### authenticate

▸ **authenticate**(`username`: *string*, `password`: *string*): *Promise*<*string*\>

Used to get an access token to enable access to Parcel Perfect API.
The token is valid until you call the expireToken method.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`username` | *string* | username   |
`password` | *string* | password    |

**Returns:** *Promise*<*string*\>

Defined in: [TrackingService.ts:30](https://github.com/jeanverster/node-parcelperfect/blob/df3e988/src/TrackingService.ts#L30)

___

### configureNotifications

▸ **configureNotifications**(`args`: ConfigureNotificationArgs, `token`: *string*): *Promise*<*any*\>

#### Parameters:

Name | Type |
------ | ------ |
`args` | ConfigureNotificationArgs |
`token` | *string* |

**Returns:** *Promise*<*any*\>

Defined in: [TrackingService.ts:78](https://github.com/jeanverster/node-parcelperfect/blob/df3e988/src/TrackingService.ts#L78)

___

### expireToken

▸ **expireToken**(`token`: *string*): *Promise*<*void*\>

Calling this method invalidates the existing token

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`token` | *string* | auth token    |

**Returns:** *Promise*<*void*\>

Defined in: [TrackingService.ts:37](https://github.com/jeanverster/node-parcelperfect/blob/df3e988/src/TrackingService.ts#L37)

___

### getCollection

▸ **getCollection**(`args`: GetCollectionArgs, `token`: *string*): *Promise*<*any*\>

#### Parameters:

Name | Type |
------ | ------ |
`args` | GetCollectionArgs |
`token` | *string* |

**Returns:** *Promise*<*any*\>

Defined in: [TrackingService.ts:75](https://github.com/jeanverster/node-parcelperfect/blob/df3e988/src/TrackingService.ts#L75)

___

### getEvents

▸ **getEvents**(`args`: GetEventsArgs, `token`: *string*): *Promise*<*any*\>

#### Parameters:

Name | Type |
------ | ------ |
`args` | GetEventsArgs |
`token` | *string* |

**Returns:** *Promise*<*any*\>

Defined in: [TrackingService.ts:54](https://github.com/jeanverster/node-parcelperfect/blob/df3e988/src/TrackingService.ts#L54)

___

### getPOD

▸ **getPOD**(`args`: GetPODArgs, `token`: *string*): *Promise*<*any*\>

#### Parameters:

Name | Type |
------ | ------ |
`args` | GetPODArgs |
`token` | *string* |

**Returns:** *Promise*<*any*\>

Defined in: [TrackingService.ts:48](https://github.com/jeanverster/node-parcelperfect/blob/df3e988/src/TrackingService.ts#L48)

___

### getPODSignature

▸ **getPODSignature**(`args`: GetPODSignatureArgs, `token`: *string*): *Promise*<*any*\>

#### Parameters:

Name | Type |
------ | ------ |
`args` | GetPODSignatureArgs |
`token` | *string* |

**Returns:** *Promise*<*any*\>

Defined in: [TrackingService.ts:72](https://github.com/jeanverster/node-parcelperfect/blob/df3e988/src/TrackingService.ts#L72)

___

### getPODsByDate

▸ **getPODsByDate**(`args`: GetPODsByDateArgs, `token`: *string*): *Promise*<*any*\>

#### Parameters:

Name | Type |
------ | ------ |
`args` | GetPODsByDateArgs |
`token` | *string* |

**Returns:** *Promise*<*any*\>

Defined in: [TrackingService.ts:63](https://github.com/jeanverster/node-parcelperfect/blob/df3e988/src/TrackingService.ts#L63)

___

### getTracks

▸ **getTracks**(`args`: GetTracksArgs, `token`: *string*): *Promise*<*any*\>

#### Parameters:

Name | Type |
------ | ------ |
`args` | GetTracksArgs |
`token` | *string* |

**Returns:** *Promise*<*any*\>

Defined in: [TrackingService.ts:51](https://github.com/jeanverster/node-parcelperfect/blob/df3e988/src/TrackingService.ts#L51)

___

### getWaybill

▸ **getWaybill**(`args`: GetWaybillArgs, `token`: *string*): *Promise*<*any*\>

On submitting a name or partial name this method returns all places matching that string

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | GetWaybillArgs | @type GetWaybillArgs   |
`token` | *string* | auth token    |

**Returns:** *Promise*<*any*\>

Defined in: [TrackingService.ts:45](https://github.com/jeanverster/node-parcelperfect/blob/df3e988/src/TrackingService.ts#L45)

___

### getWaybillByValue

▸ **getWaybillByValue**(`args`: GetWaybillByValueArgs, `token`: *string*): *Promise*<*any*\>

#### Parameters:

Name | Type |
------ | ------ |
`args` | GetWaybillByValueArgs |
`token` | *string* |

**Returns:** *Promise*<*any*\>

Defined in: [TrackingService.ts:66](https://github.com/jeanverster/node-parcelperfect/blob/df3e988/src/TrackingService.ts#L66)

___

### getWaybillsByDate

▸ **getWaybillsByDate**(`args`: GetWaybillsByDateArgs, `token`: *string*): *Promise*<*any*\>

#### Parameters:

Name | Type |
------ | ------ |
`args` | GetWaybillsByDateArgs |
`token` | *string* |

**Returns:** *Promise*<*any*\>

Defined in: [TrackingService.ts:57](https://github.com/jeanverster/node-parcelperfect/blob/df3e988/src/TrackingService.ts#L57)
