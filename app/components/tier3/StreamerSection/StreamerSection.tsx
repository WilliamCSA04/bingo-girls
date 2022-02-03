import { Flex, Heading, VisuallyHidden } from '@chakra-ui/react';
import type { LoaderFunction } from 'remix';
import { useLoaderData } from 'remix';

import { Section } from '../../tier0';
import { StreamerCard } from '../../tier2';
import type { StreamerCardProps } from '../../tier2';
import dbClient from '~/db';
import type { StreamersType } from '~/routes';

export type Props = {
  data: StreamerCardProps[];
};

const getStreamers = async () => {
  await dbClient.$connect();
  const streamers = await dbClient.streamers.findMany();
  await dbClient.$disconnect();
  return streamers;
};

export const loader: LoaderFunction = async () => {
  return getStreamers();
};

export default function StreamerSection() {
  const streamers = useLoaderData<StreamersType>();

  const data =
    streamers?.map((streamer) => ({
      name: streamer.name,
      alt: streamer.alternative_text,
      src: streamer.image_endpoint,
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
          return <StreamerCard key={streamer.name} mt={mt} {...streamer} />;
        })}
      </Flex>
    </Section>
  );
}
