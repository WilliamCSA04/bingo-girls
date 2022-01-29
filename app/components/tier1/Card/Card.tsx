import { Box, BoxProps } from "@chakra-ui/react";

export default function Card(props: BoxProps) {
    return <Box rounded="sm" boxShadow="md" {...props} />
}