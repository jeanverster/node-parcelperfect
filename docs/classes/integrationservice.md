[node-parcelperfect](../README.md) / [Exports](../modules.md) / IntegrationService

# Class: IntegrationService

## Hierarchy

* **IntegrationService**

## Table of contents

### Constructors

- [constructor](integrationservice.md#constructor)

### Properties

- [baseUrl](integrationservice.md#baseurl)

### Methods

- [authenticate](integrationservice.md#authenticate)
- [expireToken](integrationservice.md#expiretoken)
- [getSingleWaybill](integrationservice.md#getsinglewaybill)
- [submitEvent](integrationservice.md#submitevent)
- [submitPOD](integrationservice.md#submitpod)
- [submitWaybill](integrationservice.md#submitwaybill)
- [submitWaybillEvent](integrationservice.md#submitwaybillevent)

## Constructors

### constructor

\+ **new IntegrationService**(`config`: Config): [*IntegrationService*](integrationservice.md)

#### Parameters:

Name | Type |
------ | ------ |
`config` | Config |

**Returns:** [*IntegrationService*](integrationservice.md)

Defined in: [IntegrationService.ts:16](https://github.com/jeanverster/node-parcelperfect/blob/df3e988/src/IntegrationService.ts#L16)

## Properties

### baseUrl

• `Private` `Readonly` **baseUrl**: *string*

Defined in: [IntegrationService.ts:16](https://github.com/jeanverster/node-parcelperfect/blob/df3e988/src/IntegrationService.ts#L16)

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

Defined in: [IntegrationService.ts:28](https://github.com/jeanverster/node-parcelperfect/blob/df3e988/src/IntegrationService.ts#L28)

___

### expireToken

▸ **expireToken**(`token`: *string*): *Promise*<*void*\>

Calling this method invalidates the existing token

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`token` | *string* | auth token    |

**Returns:** *Promise*<*void*\>

Defined in: [IntegrationService.ts:35](https://github.com/jeanverster/node-parcelperfect/blob/df3e988/src/IntegrationService.ts#L35)

___

### getSingleWaybill

▸ **getSingleWaybill**(`args`: GetSingleWaybillArgs, `token`: *string*): *Promise*<*any*\>

Returns full waybill details by submitting a waybill no.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | GetSingleWaybillArgs | @type GetSingleWaybillArgs   |
`token` | *string* | auth token    |

**Returns:** *Promise*<*any*\>

Defined in: [IntegrationService.ts:77](https://github.com/jeanverster/node-parcelperfect/blob/df3e988/src/IntegrationService.ts#L77)

___

### submitEvent

▸ **submitEvent**(`args`: SubmitEventArgs, `token`: *string*): *Promise*<*any*\>

Submit parcel level tracking events. Used when each piece of a consignment has tracking events.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | SubmitEventArgs | @type SubmitEventArgs   |
`token` | *string* | auth token    |

**Returns:** *Promise*<*any*\>

Defined in: [IntegrationService.ts:59](https://github.com/jeanverster/node-parcelperfect/blob/df3e988/src/IntegrationService.ts#L59)

___

### submitPOD

▸ **submitPOD**(`args`: SubmitPODArgs, `token`: *string*): *Promise*<*any*\>

Submit POD Details

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | SubmitPODArgs | @type SubmitPODArgs   |
`token` | *string* | auth token    |

**Returns:** *Promise*<*any*\>

Defined in: [IntegrationService.ts:51](https://github.com/jeanverster/node-parcelperfect/blob/df3e988/src/IntegrationService.ts#L51)

___

### submitWaybill

▸ **submitWaybill**(`args`: SubmitWaybillArgs, `token`: *string*): *Promise*<*any*\>

Use this method to submit waybill details along with contents, tracking numbers and references

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | SubmitWaybillArgs | @type SubmitWaybillArgs   |
`token` | *string* | auth token    |

**Returns:** *Promise*<*any*\>

Defined in: [IntegrationService.ts:43](https://github.com/jeanverster/node-parcelperfect/blob/df3e988/src/IntegrationService.ts#L43)

___

### submitWaybillEvent

▸ **submitWaybillEvent**(`args`: SubmitWaybillEventArgs, `token`: *string*): *Promise*<*any*\>

Used when a tracking event relates to an entire consignment.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | SubmitWaybillEventArgs | @type SubmitWaybillEventArgs   |
`token` | *string* | auth token    |

**Returns:** *Promise*<*any*\>

Defined in: [IntegrationService.ts:67](https://github.com/jeanverster/node-parcelperfect/blob/df3e988/src/IntegrationService.ts#L67)
