import { Heading, Icon, Image, Link, SimpleGrid, Text, VStack } from '@chakra-ui/react';

import { Card } from '../../tier1';

type Props = {
  src: string;
  alt: string;
  name: string;
  social: SocialType[];
};

type SocialType = {
  text: string;
  link: string;
  icon: string;
};

function StreamerLink({ link, text, icon }: SocialType) {
  return (
    <SimpleGrid columns={2} spacing="2">
      <Link href={link}>
        <Icon />
        <Text>{text}</Text>
      </Link>
    </SimpleGrid>
  );
}

export default function StreamerCard({ src, alt, name, social }: Props) {
  return (
    <Card p="5">
      <VStack>
        <Image boxSize="300px" src={src} alt={alt} />
        <Heading as="h3">{name}</Heading>
        <SimpleGrid columns={2} spacing={4}>
          {social.map(({ link, text, icon }) => (
            <StreamerLink key={link} link={link} text={text} icon={icon} />
          ))}
        </SimpleGrid>
      </VStack>
    </Card>
  );
}
