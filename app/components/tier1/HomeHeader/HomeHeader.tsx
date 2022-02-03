import {
  Box,
  Flex,
  Heading,
  Image,
  Switch,
  useColorMode,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';

import { Header } from '../../tier0';

export default function HomeHeader() {
  const { toggleColorMode } = useColorMode();
  const headerBg = useColorModeValue('pink.300', 'gray.900');
  return (
    <Header mb="4" p={4} bg={headerBg}>
      <VisuallyHidden>
        <Heading as="h1">Bingo Girls</Heading>
      </VisuallyHidden>
      <Flex justify="space-between" alignItems="center">
        <Box>
          <Image src="" fallbackSrc="https://via.placeholder.com/100/" alt="" boxSize="100px" />
        </Box>
        <Box>
          <Switch onChange={toggleColorMode} />
        </Box>
      </Flex>
    </Header>
  );
}
