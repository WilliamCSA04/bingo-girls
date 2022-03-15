import { Flex, Heading } from '@chakra-ui/react';

import { Section } from '../../tier0';

type PropsType = {
  children?: React.ReactNode;
  title: string;
  isColored?: boolean;
};

export default function HomeSection({ children, title, isColored }: PropsType) {
  return (
    <Section bg={isColored ? 'pink.500' : 'transparent'}>
      <Heading>{title}</Heading>
      <Flex justify="space-around" wrap="wrap">
        {children}
      </Flex>
    </Section>
  );
}
