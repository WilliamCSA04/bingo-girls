import { Heading, Stack, useColorModeValue } from '@chakra-ui/react';

import { Section } from '../../tier0';

type PropsType = {
  children?: React.ReactNode;
  title: string;
  isColored?: boolean;
};

export default function HomeSection({ children, title, isColored }: PropsType) {
  const bg = useColorModeValue('pink.500', 'gray.700');
  return (
    <Section color="white" bg={isColored ? bg : 'transparent'} mt="16" px={[0, '12']} py="12">
      <Heading mb="8">{title}</Heading>
      <Stack
        direction={{ base: 'column', xl: 'row' }}
        align="center"
        justify={{ xl: 'space-between' }}
        wrap="wrap"
      >
        {children}
      </Stack>
    </Section>
  );
}
