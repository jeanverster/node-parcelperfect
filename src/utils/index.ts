import fetch from 'node-fetch';
import qs from 'query-string';

export const makeCall = async (
  className: string,
  methodName: string,
  params: any,
  token?: string,
  baseUrl?: string
) => {
  try {
    const queryparams = qs.stringify({
      params: JSON.stringify(params),
      method: methodName,
      class: className,
      token_id: token,
    });
    const response = await fetch(
      `${baseUrl || ''}/Json?` + queryparams
    ).then(r => r.json());
    if (response.errormessage !== '') {
      throw new Error(response.errormessage);
    }
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
