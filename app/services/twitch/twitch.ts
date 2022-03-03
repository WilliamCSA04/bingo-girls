import invariant from 'tiny-invariant';

invariant(process.env.TWITCH_API_BASE_URL, 'Missing twitch base url');
invariant(process.env.TWITCH_CLIENT_ID, 'Missing twitch client id');
invariant(process.env.TWITCH_APP_ACCESS_TOKEN, 'Missing twitch access token');

const BASE_URL = process.env.TWITCH_API_BASE_URL;
const CLIENT_ID = process.env.TWITCH_CLIENT_ID;
const ACCESS_TOKEN = process.env.TWITCH_APP_ACCESS_TOKEN;

const defaultHeaders = {
  authorization: `Bearer ${ACCESS_TOKEN}`,
  'Client-Id': CLIENT_ID,
};

type FetchParamsType = Parameters<typeof fetch>;
type FetchReturnType = ReturnType<typeof fetch>;

async function request(endpoint: FetchParamsType[0], init: FetchParamsType[1] = {}) {
  return fetch(endpoint, {
    ...init,
    headers: { ...defaultHeaders, ...init.headers },
  });
}

type GetUsersParamsType = {
  logins: string[];
};

export async function getUsers({ logins = [] }: GetUsersParamsType): FetchReturnType {
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
  return request(endpoint);
}

type GetClipsParamsType = {
  broadcasterId: string;
};

export async function getClips({ broadcasterId }: GetClipsParamsType): FetchReturnType {
  const endpoint = `${BASE_URL}/clips?broadcaster_id=${broadcasterId}`;
  return request(endpoint);
}
