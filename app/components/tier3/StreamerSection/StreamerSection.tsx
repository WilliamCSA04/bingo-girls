import { Flex, Heading, VisuallyHidden } from '@chakra-ui/react';

import { Section } from '../../tier0';
import { StreamerCard } from '../../tier2';
import type { StreamerCardProps } from '../../tier2';

export type Props = {
  data: StreamerCardProps[];
};

export default function StreamerSection({ data }: Props) {
  return (
    <Section>
      <VisuallyHidden>
        <Heading as="h2" lang="en">
          Streamers
        </Heading>
      </VisuallyHidden>
      <Flex>
        {data.map((streamer) => (
          <StreamerCard key={streamer.name} {...streamer} />
        ))}
      </Flex>
    </Section>
  );
}
