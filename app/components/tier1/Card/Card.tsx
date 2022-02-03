import type { BoxProps } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

export type CardProps = BoxProps;

export default function Card(props: CardProps) {
  return <Box rounded="sm" boxShadow="md" {...props} />;
}
