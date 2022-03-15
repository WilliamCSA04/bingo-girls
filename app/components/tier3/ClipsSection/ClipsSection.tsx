import { useLoaderData } from 'remix';

import { HomeSection } from '~/components/tier1';
import { TwitchClip } from '~/components/tier2';
import type { StreamersType } from '~/routes';

const PLAYER_URL = 'https://player.twitch.tv/';

export default function ClipsSection() {
  const streamers = useLoaderData<StreamersType>();
  return (
    <HomeSection title="Clipes mais vistos" isColored>
      {streamers.map((streamer) => (
        <TwitchClip key={streamer.name} src={`${PLAYER_URL}?clip=${streamer.clips[0].id}`} />
      ))}
    </HomeSection>
  );
}
