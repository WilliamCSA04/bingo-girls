import invariant from 'tiny-invariant';

invariant(process.env.TWITCH_API_HELIX, 'Missing twitch base url');
invariant(process.env.TWITCH_API_OAUTH2, 'Missing twitch base url');
invariant(process.env.TWITCH_CLIENT_ID, 'Missing twitch client id');
invariant(process.env.TWITCH_APP_ACCESS_TOKEN, 'Missing twitch access token');

const BASE_URL = process.env.TWITCH_API_HELIX;
const OAUTH2_URL = process.env.TWITCH_API_OAUTH2;
export const CLIENT_ID = process.env.TWITCH_CLIENT_ID;
const ACCESS_TOKEN = process.env.TWITCH_APP_ACCESS_TOKEN;

type FetchParamsType = Parameters<typeof fetch>;
type FetchReturnType = ReturnType<typeof fetch>;

async function request(endpoint: FetchParamsType[0], init: FetchParamsType[1] = {}) {
  return fetch(endpoint, {
    ...init,
  });
}

type GetUsersParamsType = {
  logins: string[];
};

export type GetTokenType = {
  access_token: string;
  expires_in: number;
  token_type: string;
};

export async function getToken(): FetchReturnType {
  const endpoint = `${OAUTH2_URL}/token?client_id=${CLIENT_ID}&client_secret=${ACCESS_TOKEN}&grant_type=client_credentials`;
  return request(endpoint, { method: 'post' });
}

export type UserType = {
  id: string;
  login: string;
  display_name: string;
  type: string;
  broadcaster_type: string;
  description: string;
  profile_image_url: string;
  offline_image_url: string;
  view_count: number;
  created_at: string;
};

export type GetUsersType = {
  data: UserType[];
};

export async function getUsers(
  { logins = [] }: GetUsersParamsType,
  { Authorization }: { Authorization: string }
): FetchReturnType {
  const url = `${BASE_URL}/users`;
  const endpoint = logins.reduce<string>((finalURL, login, index) => {
    let appendURL = finalURL;
    if (index) {
      appendURL = appendURL.concat('&');
    } else {
      appendURL = url.concat('?');
    }
    return appendURL.concat(`login=${login}`);
  }, '');
  return request(endpoint, {
    headers: {
      Authorization,
      'Client-Id': CLIENT_ID,
    },
  });
}

type GetClipsParamsType = {
  broadcasterId: string;
};

export async function getClips({ broadcasterId }: GetClipsParamsType): FetchReturnType {
  const endpoint = `${BASE_URL}/clips?login=${broadcasterId}`;
  return request(endpoint);
}
