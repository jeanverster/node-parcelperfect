import { authenticate, expireToken } from './Auth';
import {
  Config,
  GetPlacesByNameArgs,
  GetPlacesByPostCodeArgs,
  QuoteToWaybillArgs,
  RequestQuoteArgs,
  SubmitCollectionArgs,
  UpdateServiceArgs,
} from './types';
import { makeCall } from './utils';

export default class EcomService {
  private readonly baseUrl: string;
  constructor(config: Config) {
    this.baseUrl = config?.baseUrl || 'http://adpdemo.pperfect.com/ecomService';
    console.log('constructor ~ this.baseUrl', this.baseUrl);
  }

  /**
   * Used to get an access token to enable access to Parcel Perfect API.
   * The token is valid until you call the expireToken method.
   * @param username - username
   * @param password - password
   */
  public authenticate = async (username: string, password: string) =>
    await authenticate(username, password, this.baseUrl);

  /**
   * Calling this method invalidates the existing token
   * @param token - auth token
   */
  public expireToken = async (token: string) =>
    await expireToken(token, this.baseUrl);

  /**
   * On submitting a name or partial name this method returns all places matching that string
   * @param args - @type GetPlacesByNameArgs
   * @param token - auth token
   */
  public getPlacesByName = async (args: GetPlacesByNameArgs, token: string) =>
    await makeCall('Quote', 'getPlacesByName', args, this.baseUrl, token);

  /**
   * On submitting a postcode this method returns all valid places matching the postcode
   * @param args - @type GetPlacesByPostCodeArgs
   * @param token - auth token
   */
  public getPlacesByPostcode = async (
    args: GetPlacesByPostCodeArgs,
    token: string
  ) =>
    await makeCall('Quote', 'getPlacesByPostcode', args, this.baseUrl, token);

  /**
   * Generates a waybill from the quote created
   * @param args - @type QuoteToWaybillArgs
   * @param token - auth token
   */
  public quoteToWaybill = async (args: QuoteToWaybillArgs, token: string) =>
    await makeCall('Quote', 'quoteToWaybill', args, this.baseUrl, token);

  /**
   * Update the quote to the selected service from the returned array after calling requestQuote
   * @param args - @type UpdateServiceArgs
   * @param token - auth token
   */
  public updateService = async (args: UpdateServiceArgs, token: string) =>
    await makeCall('Quote', 'updateService', args, this.baseUrl, token);

  /**
   * On submitting freight weights, dims from an originating place to a destination place,
   * this method returns a list of valid services and corresponding price
   * @param args - @type RequestQuoteArgs
   * @param token - auth token
   */
  public requestQuote = async (args: RequestQuoteArgs, token: string) =>
    await makeCall('Quote', 'requestQuote', args, this.baseUrl, token);

  /**
   * Submit a collection request to the courier
   * @param args - @type SubmitCollectionArgs
   * @param token - auth token
   */
  public submitCollection = async (args: SubmitCollectionArgs, token: string) =>
    await makeCall('Collection', 'submitCollection', args, this.baseUrl, token);
}
