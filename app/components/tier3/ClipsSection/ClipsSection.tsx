import { useBreakpointValue } from '@chakra-ui/react';
import { useLoaderData } from 'remix';

import { HomeSection } from '~/components/tier1';
import { TwitchClip } from '~/components/tier2';
import type { StreamersType } from '~/routes';

const PLAYER_URL = 'https://player.twitch.tv/';

export default function ClipsSection() {
  const streamers = useLoaderData<StreamersType>();
  const height = useBreakpointValue({ base: '200px', md: '300px' });
  const width = useBreakpointValue({ base: '300px', md: '400px' });
  return (
    <HomeSection title="Clipes mais vistos" isColored>
      {streamers.map((streamer) => (
        <TwitchClip
          key={streamer.name}
          src={`${PLAYER_URL}?clip=${streamer.clips[0].id}`}
          width={width}
          height={height}
        />
      ))}
    </HomeSection>
  );
}
