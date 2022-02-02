import { Box, Heading, Icon, Image, Link, SimpleGrid, Text, VStack } from '@chakra-ui/react';

import { Card } from '../../tier1';
import SocialIcon from '../SocialIcon';

type Props = {
  src: string;
  alt: string;
  name: string;
  social: SocialType[];
};

type SocialType = {
  text: string;
  link: string;
};

const socialRegex = /twitch|tiktok|youtube|facebook|instagram|twitter|linktr.ee/iu;

function StreamerLink({ link, text }: SocialType) {
  const icon = socialRegex.exec(link)?.[0] ?? '';
  return (
    <SimpleGrid columns={2} spacing="2">
      <Link href={link}>
        <SocialIcon socialNetwork={icon} />
        <Text>{text}</Text>
      </Link>
    </SimpleGrid>
  );
}

export default function StreamerCard({ src, alt, name, social }: Props) {
  return (
    <Card w="300px">
      <VStack>
        <Image boxSize="300px" src={src} fallbackSrc="https://via.placeholder.com/300/" alt={alt} />
        <VStack p="5">
          <Heading as="h3">{name}</Heading>
          <SimpleGrid columns={2} spacing={4}>
            {social.map(({ link, text }) => (
              <StreamerLink key={link} link={link} text={text} />
            ))}
          </SimpleGrid>
        </VStack>
      </VStack>
    </Card>
  );
}
