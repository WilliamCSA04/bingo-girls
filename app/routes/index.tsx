import type { LoaderFunction } from 'remix';

import { HomeHeader, StreamerSection } from '~/components';
import dbClient from '~/db';
import { firebaseService, twitchService } from '~/services';
import type { GetTokenType, GetUsersType } from '~/services/twitch/twitch';

const getStreamers = async () => {
  await dbClient.$connect();
  const streamers = await dbClient.streamers.findMany();
  await dbClient.$disconnect();
  const data = streamers.map(async (streamer) => {
    const url = await firebaseService.getFile(streamer.image_endpoint);
    return {
      ...streamer,
      image_endpoint: url,
    };
  });
  return Promise.all(data);
};

export const loader: LoaderFunction = async ({ request }) => {
  const resTokens = await twitchService.getToken();
  const tokens = (await resTokens.json()) as GetTokenType;
  const streamersFromDB = await getStreamers();
  const logins = streamersFromDB.map((streamer) => streamer.twitch_name);
  const resUsers = await twitchService.getUsers(
    { logins },
    { Authorization: `Bearer ${tokens.access_token}` }
  );
  const { data: users } = (await resUsers.json()) as GetUsersType;
  return streamersFromDB.map((streamer) => {
    const foundUser = users.find((user) => user.login === streamer.twitch_name);
    return { ...foundUser, ...streamer };
  });
};

export type StreamersType = Awaited<ReturnType<typeof getStreamers>>;

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <HomeHeader />
      <StreamerSection />
    </div>
  );
}
