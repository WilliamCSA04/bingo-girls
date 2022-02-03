import type { LoaderFunction } from 'remix';

import { StreamerSection } from '~/components';
import dbClient from '~/db';

const getStreamers = async () => {
  await dbClient.$connect();
  const streamers = await dbClient.streamers.findMany();
  await dbClient.$disconnect();
  return streamers;
};

export const loader: LoaderFunction = async () => {
  return getStreamers();
};

export type StreamersType = Awaited<ReturnType<typeof getStreamers>>;

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Welcome to Remix</h1>
      <StreamerSection />
    </div>
  );
}
