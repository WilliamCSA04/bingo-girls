import type { ReactText } from 'react';

import { Clip } from '~/components/tier1';

type ClipType = Parameters<typeof Clip>[0];

type TwitchClipType = ClipType & {
  parent: string;
  autoplay?: boolean;
  muted?: boolean;
  time?: string;
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
  const { autoplay, muted, time, ...rest } = props;
  rest.src +=
    appendParameter({ key: 'parent', value: window.location.hostname }) +
    appendParameter({ key: 'autoplay', value: autoplay }) +
    appendParameter({ key: 'muted', value: muted }) +
    appendParameter({ key: 'time', value: time });
  return <Clip {...rest} />;
}
