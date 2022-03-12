import { Frame } from '~/components/tier0';

type FrameType = Parameters<typeof Frame>[0];

export default function Clip(props: FrameType) {
  return <Frame height="100%" width="100%" allowFullScreen {...props} />;
}
