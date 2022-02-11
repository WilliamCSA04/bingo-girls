import type { LoaderFunction } from 'remix';

import { HomeHeader, StreamerSection } from '~/components';
import dbClient from '~/db';
import { firebaseService } from '~/services';

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

export const loader: LoaderFunction = async () => {
  return getStreamers();
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
