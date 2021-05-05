import { authenticate, expireToken } from './Auth';
import {
  GetSingleWaybillArgs,
  SubmitEventArgs,
  SubmitPODArgs,
  SubmitWaybillArgs,
  SubmitWaybillEventArgs,
} from './types';
import { makeCall } from './utils';

type Config = {
  readonly baseUrl?: string;
};

export default class IntegrationService {
  private readonly baseUrl: string;
  constructor(config: Config) {
    this.baseUrl =
      config?.baseUrl || 'http://adpdemo.pperfect.com/ppintegrationservice/v3';
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
   * Use this method to submit waybill details along with contents, tracking numbers and references
   * @param args - @type SubmitWaybillArgs
   * @param token - auth token
   */
  public submitWaybill = async (args: SubmitWaybillArgs, token: string) =>
    await makeCall('Waybill', 'submitWaybill', args, this.baseUrl, token);

  /**
   * Submit POD Details
   * @param args - @type SubmitPODArgs
   * @param token - auth token
   */
  public submitPOD = async (args: SubmitPODArgs, token: string) =>
    await makeCall('POD', 'submitPOD', args, token);

  /**
   * Submit parcel level tracking events. Used when each piece of a consignment has tracking events.
   * @param args - @type SubmitEventArgs
   * @param token - auth token
   */
  public submitEvent = async (args: SubmitEventArgs, token: string) =>
    await makeCall('Event', 'submitEvent', args, this.baseUrl, token);

  /**
   * Used when a tracking event relates to an entire consignment.
   * @param args - @type SubmitWaybillEventArgs
   * @param token - auth token
   */
  public submitWaybillEvent = async (
    args: SubmitWaybillEventArgs,
    token: string
  ) =>
    await makeCall('Waybill', 'submitWaybillEvent', args, this.baseUrl, token);

  /**
   * Returns full waybill details by submitting a waybill no.
   * @param args - @type GetSingleWaybillArgs
   * @param token - auth token
   */
  public getSingleWaybill = async (args: GetSingleWaybillArgs, token: string) =>
    await makeCall('Waybill', 'getSingleWaybill', args, this.baseUrl, token);
}
