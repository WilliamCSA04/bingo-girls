import { Flex, Heading, useColorModeValue } from '@chakra-ui/react';

import { Section } from '../../tier0';

type PropsType = {
  children?: React.ReactNode;
  title: string;
  isColored?: boolean;
};

export default function HomeSection({ children, title, isColored }: PropsType) {
  const bg = useColorModeValue('pink.500', 'gray.700');
  return (
    <Section color="white" bg={isColored ? bg : 'transparent'} mt="16" p="12">
      <Heading mb="8">{title}</Heading>
      <Flex justify="space-between" wrap="wrap">
        {children}
      </Flex>
    </Section>
  );
}
