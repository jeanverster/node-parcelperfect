import { authenticate, expireToken } from './Auth';
import {
  Config,
  ConfigureNotificationArgs,
  GetCollectionArgs,
  GetEventsArgs,
  GetPODArgs,
  GetPODsByDateArgs,
  GetPODSignatureArgs,
  GetTracksArgs,
  GetWaybillArgs,
  GetWaybillByValueArgs,
  GetWaybillsByDateArgs,
} from './types';
import { makeCall } from './utils/index';

export default class TrackingService {
  private readonly baseUrl: string;
  constructor(config: Config) {
    this.baseUrl =
      config?.baseUrl || 'http://tracking.parcelperfect.com/pptrackservice/v3';
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
   * @param args - @type GetWaybillArgs
   * @param token - auth token
   */
  public getWaybill = async (args: GetWaybillArgs, token: string) =>
    await makeCall('Waybill', 'getWaybill', args, this.baseUrl, token);

  public getPOD = async (args: GetPODArgs, token: string) =>
    await makeCall('Waybill', 'getPOD', args, this.baseUrl, token);

  public getTracks = async (args: GetTracksArgs, token: string) =>
    await makeCall('Waybill', 'getTracks', args, this.baseUrl, token);

  public getEvents = async (args: GetEventsArgs, token: string) =>
    await makeCall('Waybill', 'getEvents', args, this.baseUrl, token);

  public getWaybillsByDate = async (
    args: GetWaybillsByDateArgs,
    token: string
  ) =>
    await makeCall('Waybill', 'getWaybillsByDate', args, this.baseUrl, token);

  public getPODsByDate = async (args: GetPODsByDateArgs, token: string) =>
    await makeCall('Waybill', 'getPODsByDate', args, this.baseUrl, token);

  public getWaybillByValue = async (
    args: GetWaybillByValueArgs,
    token: string
  ) =>
    await makeCall('Waybill', 'getWaybillByValue', args, this.baseUrl, token);

  public getPODSignature = async (args: GetPODSignatureArgs, token: string) =>
    await makeCall('Waybill', 'getPODSignature', args, this.baseUrl, token);

  public getCollection = async (args: GetCollectionArgs, token: string) =>
    await makeCall('Waybill', 'getCollection', args, this.baseUrl, token);

  public configureNotifications = async (
    args: ConfigureNotificationArgs,
    token: string
  ) =>
    await makeCall(
      'Waybill',
      'configureNotifications',
      args,
      this.baseUrl,
      token
    );
}
