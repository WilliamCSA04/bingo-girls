import { chakra } from '@chakra-ui/react';

const IFrame = chakra.iframe;

export default function Frame(props: typeof IFrame) {
  return <IFrame {...props} />;
}
