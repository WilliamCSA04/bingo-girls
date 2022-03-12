import { Flex, Heading } from '@chakra-ui/react';
import { useLoaderData } from 'remix';

import { Section } from '~/components/tier0';
import { TwitchClip } from '~/components/tier2';
import type { StreamersType } from '~/routes';

const PLAYER_URL = 'https://player.twitch.tv/';

export default function ClipsSection() {
  const streamers = useLoaderData<StreamersType>();
  return (
    <Section>
      <Heading>Clipes mais vistos</Heading>
      <Flex justify="space-around" wrap="wrap">
        {streamers.map((streamer) => (
          <TwitchClip key={streamer.name} src={`${PLAYER_URL}?clip=${streamer.clips[0].id}`} />
        ))}
      </Flex>
    </Section>
  );
}
