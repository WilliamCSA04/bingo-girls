import type { BoxProps } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

export default function Card(props: BoxProps) {
  return <Box rounded="sm" boxShadow="md" {...props} />;
}
