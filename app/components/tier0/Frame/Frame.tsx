import { chakra } from '@chakra-ui/react';

const IFrame = chakra.iframe;

type FrameType = {
  allowFullScreen?: boolean;
  height?: string;
  src: string;
  width?: string;
  parent?: string;
};

export default function Frame(props: FrameType) {
  return <IFrame {...props} />;
}
