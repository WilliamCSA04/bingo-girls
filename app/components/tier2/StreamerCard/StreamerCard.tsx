import { Box, Heading, HStack, Icon, Image, Link, SimpleGrid, Text, VStack } from '@chakra-ui/react';

import { Card } from '../../tier1';
import SocialIcon from '../SocialIcon';

export type Props = {
  src: string;
  alt: string;
  name: string;
  bg: string;
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
    <HStack wrap="nowrap">
      <Link href={link} w="100%">
        <SocialIcon socialNetwork={icon} />
        <Text>{text}</Text>
      </Link>
    </HStack>
  );
}

export default function StreamerCard({ src, alt, name, social, bg }: Props) {
  return (
    <Card w="300px" bg={bg} color="white">
      <VStack>
        <Image boxSize="300px" src={src} fallbackSrc="https://via.placeholder.com/300/" alt={alt} />
        <VStack w="100%" p={5}>
          <Heading as="h3">{name}</Heading>
          <SimpleGrid columns={2} spacing={4} w="100%">
            {social.map(({ link, text }) => (
              <StreamerLink key={link} link={link} text={text} />
            ))}
          </SimpleGrid>
        </VStack>
      </VStack>
    </Card>
  );
}
