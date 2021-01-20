import { authenticate } from './Auth';
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
    this.baseUrl = config.baseUrl || 'http://adpdemo.pperfect.com/ecomService';
  }

  public authenticate = async (username: string, password: string) =>
    await authenticate(username, password, this.baseUrl);

  public getPlacesByName = async (args: GetPlacesByNameArgs, token: string) =>
    await makeCall('Quote', 'getPlacesByName', args, token, this.baseUrl);

  public getPlacesByPostcode = async (
    args: GetPlacesByPostCodeArgs,
    token: string
  ) =>
    await makeCall('Quote', 'getPlacesByPostcode', args, token, this.baseUrl);

  public quoteToWaybill = async (args: QuoteToWaybillArgs, token: string) =>
    await makeCall('Quote', 'quoteToWaybill', args, token, this.baseUrl);

  public updateService = async (args: UpdateServiceArgs, token: string) =>
    await makeCall('Quote', 'updateService', args, token, this.baseUrl);

  /**
   * This function is used to request a quote from the parcel perfect servers
   * @param token - authentication token
   * @param details - QuoteDetails
   * @param contents - Contents[]
   * @param wayrefs - string[]
   * @param tracks -
   */
  public requestQuote = async (args: RequestQuoteArgs, token: string) =>
    await makeCall('Quote', 'requestQuote', args, token, this.baseUrl);

  public submitCollection = async (args: SubmitCollectionArgs, token: string) =>
    await makeCall('Collection', 'submitCollection', args, token, this.baseUrl);
}
