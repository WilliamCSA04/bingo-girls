import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Switch,
  useColorMode,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { BsSun, BsMoon } from 'react-icons/bs';

import { Header } from '../../tier0';

export default function HomeHeader() {
  const { toggleColorMode, colorMode } = useColorMode();
  const headerBg = useColorModeValue('pink.300', 'gray.900');
  const isLightMode = colorMode === 'light';
  return (
    <Header mb="16" p={4} bg={headerBg}>
      <VisuallyHidden>
        <Heading as="h1">Bingo Girls</Heading>
      </VisuallyHidden>
      <Flex justify="space-between" alignItems="center">
        <Box>
          <Image src="" fallbackSrc="https://via.placeholder.com/100/" alt="" boxSize="100px" />
        </Box>
        <Flex alignItems="center">
          <Icon as={BsSun} boxSize={5} />
          <Switch
            onChange={toggleColorMode}
            mx={2}
            defaultChecked={!isLightMode}
            aria-label={`Alterar para modo ${isLightMode ? 'escuro' : 'luz'}`}
          />
          <Icon as={BsMoon} boxSize={5} />
        </Flex>
      </Flex>
    </Header>
  );
}
