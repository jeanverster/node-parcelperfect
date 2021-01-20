import md5 from 'md5';
import { makeCall } from './utils';

export const getSalt = async (email: string, baseUrl?: string) => {
  const { results } = await makeCall('Auth', 'getSalt', { email }, baseUrl);
  return results[0].salt;
};

export const getSecureToken = async (
  email: string,
  password: string,
  salt: string,
  baseUrl?: string
): Promise<string> => {
  const { results } = await makeCall(
    'Auth',
    'getSecureToken',
    {
      email,
      password: md5(password + salt),
    },
    baseUrl
  );
  return results[0].token_id;
};

export const expireToken = async (
  token_id: string,
  baseUrl?: string
): Promise<void> => {
  return await makeCall('Auth', 'expireToken', { token_id }, baseUrl, token_id);
};

export const authenticate = async (
  username: string,
  password: string,
  baseUrl?: string
): Promise<string> => {
  const salt = await getSalt(username, baseUrl);
  return await getSecureToken(username, password, salt, baseUrl);
};
