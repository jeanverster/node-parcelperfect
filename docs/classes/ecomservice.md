[node-parcelperfect](../README.md) / [Exports](../modules.md) / EcomService

# Class: EcomService

## Hierarchy

* **EcomService**

## Table of contents

### Constructors

- [constructor](ecomservice.md#constructor)

### Properties

- [baseUrl](ecomservice.md#baseurl)

### Methods

- [authenticate](ecomservice.md#authenticate)
- [expireToken](ecomservice.md#expiretoken)
- [getPlacesByName](ecomservice.md#getplacesbyname)
- [getPlacesByPostcode](ecomservice.md#getplacesbypostcode)
- [quoteToWaybill](ecomservice.md#quotetowaybill)
- [requestQuote](ecomservice.md#requestquote)
- [submitCollection](ecomservice.md#submitcollection)
- [updateService](ecomservice.md#updateservice)

## Constructors

### constructor

\+ **new EcomService**(`config`: Config): [*EcomService*](ecomservice.md)

#### Parameters:

Name | Type |
------ | ------ |
`config` | Config |

**Returns:** [*EcomService*](ecomservice.md)

Defined in: [EcomService.ts:14](https://github.com/jeanverster/node-parcelperfect/blob/df3e988/src/EcomService.ts#L14)

## Properties

### baseUrl

• `Private` `Readonly` **baseUrl**: *string*

Defined in: [EcomService.ts:14](https://github.com/jeanverster/node-parcelperfect/blob/df3e988/src/EcomService.ts#L14)

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

Defined in: [EcomService.ts:26](https://github.com/jeanverster/node-parcelperfect/blob/df3e988/src/EcomService.ts#L26)

___

### expireToken

▸ **expireToken**(`token`: *string*): *Promise*<*void*\>

Calling this method invalidates the existing token

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`token` | *string* | auth token    |

**Returns:** *Promise*<*void*\>

Defined in: [EcomService.ts:33](https://github.com/jeanverster/node-parcelperfect/blob/df3e988/src/EcomService.ts#L33)

___

### getPlacesByName

▸ **getPlacesByName**(`args`: GetPlacesByNameArgs, `token`: *string*): *Promise*<*any*\>

On submitting a name or partial name this method returns all places matching that string

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | GetPlacesByNameArgs | @type GetPlacesByNameArgs   |
`token` | *string* | auth token    |

**Returns:** *Promise*<*any*\>

Defined in: [EcomService.ts:41](https://github.com/jeanverster/node-parcelperfect/blob/df3e988/src/EcomService.ts#L41)

___

### getPlacesByPostcode

▸ **getPlacesByPostcode**(`args`: GetPlacesByPostCodeArgs, `token`: *string*): *Promise*<*any*\>

On submitting a postcode this method returns all valid places matching the postcode

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | GetPlacesByPostCodeArgs | @type GetPlacesByPostCodeArgs   |
`token` | *string* | auth token    |

**Returns:** *Promise*<*any*\>

Defined in: [EcomService.ts:49](https://github.com/jeanverster/node-parcelperfect/blob/df3e988/src/EcomService.ts#L49)

___

### quoteToWaybill

▸ **quoteToWaybill**(`args`: QuoteToWaybillArgs, `token`: *string*): *Promise*<*any*\>

Generates a waybill from the quote created

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | QuoteToWaybillArgs | @type QuoteToWaybillArgs   |
`token` | *string* | auth token    |

**Returns:** *Promise*<*any*\>

Defined in: [EcomService.ts:60](https://github.com/jeanverster/node-parcelperfect/blob/df3e988/src/EcomService.ts#L60)

___

### requestQuote

▸ **requestQuote**(`args`: RequestQuoteArgs, `token`: *string*): *Promise*<*any*\>

On submitting freight weights, dims from an originating place to a destination place,
this method returns a list of valid services and corresponding price

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | RequestQuoteArgs | @type RequestQuoteArgs   |
`token` | *string* | auth token    |

**Returns:** *Promise*<*any*\>

Defined in: [EcomService.ts:77](https://github.com/jeanverster/node-parcelperfect/blob/df3e988/src/EcomService.ts#L77)

___

### submitCollection

▸ **submitCollection**(`args`: SubmitCollectionArgs, `token`: *string*): *Promise*<*any*\>

Submit a collection request to the courier

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | SubmitCollectionArgs | @type SubmitCollectionArgs   |
`token` | *string* | auth token    |

**Returns:** *Promise*<*any*\>

Defined in: [EcomService.ts:85](https://github.com/jeanverster/node-parcelperfect/blob/df3e988/src/EcomService.ts#L85)

___

### updateService

▸ **updateService**(`args`: UpdateServiceArgs, `token`: *string*): *Promise*<*any*\>

Update the quote to the selected service from the returned array after calling requestQuote

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | UpdateServiceArgs | @type UpdateServiceArgs   |
`token` | *string* | auth token    |

**Returns:** *Promise*<*any*\>

Defined in: [EcomService.ts:68](https://github.com/jeanverster/node-parcelperfect/blob/df3e988/src/EcomService.ts#L68)
