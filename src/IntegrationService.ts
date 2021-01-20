import { authenticate } from './Auth';
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
      config.baseUrl || 'http://adpdemo.pperfect.com/ppintegrationservice/v3';
  }

  public authenticate = async (username: string, password: string) =>
    await authenticate(username, password, this.baseUrl);

  public submitWaybill = async (args: SubmitWaybillArgs, token: string) =>
    await makeCall('Waybill', 'submitWaybill', args, token, this.baseUrl);

  public submitPOD = async (args: SubmitPODArgs, token: string) =>
    await makeCall('POD', 'submitPOD', args, token);

  public submitEvent = async (args: SubmitEventArgs, token: string) =>
    await makeCall('Event', 'submitEvent', args, token, this.baseUrl);

  public submitWaybillEvent = async (
    args: SubmitWaybillEventArgs,
    token: string
  ) => await makeCall('Event', 'submitWaybillEvent', args, token, this.baseUrl);

  public getSingleWaybill = async (args: GetSingleWaybillArgs, token: string) =>
    await makeCall('Event', 'getSingleWaybill', args, token, this.baseUrl);
}
