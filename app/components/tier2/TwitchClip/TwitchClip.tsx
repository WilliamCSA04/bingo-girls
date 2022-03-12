import type { ReactText } from 'react';
import { useEffect, useState } from 'react';

import { Clip } from '~/components/tier1';

type ClipType = Parameters<typeof Clip>[0];

type TwitchClipType = ClipType & {
  autoplay?: boolean;
  muted?: boolean;
  preload?: '' | 'metadata' | 'auto';
};

type AppendParameterParamsType = {
  key: string;
  value?: ReactText | boolean;
};

function appendParameter({ key, value }: AppendParameterParamsType) {
  if (value) {
    return `&${key}=${value}`;
  }
  return '';
}

export default function TwitchClip(props: TwitchClipType) {
  const { autoplay, muted, ...rest } = props;
  const [hostname, setHostname] = useState('');
  useEffect(() => {
    const hostname = window?.location?.hostname;
    setHostname(hostname);
  }, []);
  if (!hostname) {
    return null;
  }
  rest.src +=
    appendParameter({ key: 'parent', value: hostname }) +
    appendParameter({ key: 'autoplay', value: autoplay }) +
    appendParameter({ key: 'muted', value: muted });
  return <Clip preload="metadata" width="400px" height="300px" {...rest} />;
}
