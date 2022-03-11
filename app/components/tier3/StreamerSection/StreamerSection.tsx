import { Flex, Heading, VisuallyHidden } from '@chakra-ui/react';
import { useLoaderData } from 'remix';
import { Section } from '../../tier0';
import { StreamerCard } from '../../tier2';
import type { StreamerCardProps } from '../../tier2';
import type { StreamersType } from '~/routes';
import { UserType } from '~/services/twitch/twitch';

type StreamersUsersType = (StreamersType[0] & UserType)[];

export default function StreamerSection() {
  const streamers = useLoaderData<StreamersUsersType>();
  const data =
    streamers?.map((streamer) => ({
      name: streamer.name,
      alt: streamer.alternative_text,
      src: streamer.profile_image_url || streamer.image_endpoint,
      social: streamer.links as { link: string; text: string }[], // TODO: find out correct way to do this
      bg: streamer.background_color,
    })) || [];
  return (
    <Section>
      <VisuallyHidden>
        <Heading as="h2" lang="en">
          Streamers
        </Heading>
      </VisuallyHidden>
      <Flex justify="space-around" wrap="wrap">
        {data.map((streamer, index) => {
          const mt = index ? 4 : 0;
          return <StreamerCard key={streamer.name} mt={[mt, 0]} {...streamer} />;
        })}
      </Flex>
    </Section>
  );
}
