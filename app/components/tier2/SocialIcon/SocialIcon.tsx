import type { IconProps } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { AiOutlineLink } from 'react-icons/ai';
import { FaInstagram, FaTiktok, FaYoutube, FaTwitch, FaTwitter, FaFacebook } from 'react-icons/fa';
import { SiLinktree } from 'react-icons/si';

type Props = {
  socialNetwork: string;
} & IconProps;

enum SocialNetwork {
  INSTAGRAM = 'INSTAGRAM',
  TIKTOK = 'TIKTOK',
  FACEBOOK = 'FACEBOOK',
  YOUTUBE = 'YOUTUBE',
  TWITCH = 'TWITCH',
  TWITTER = 'TWITTER',
  LINKTREE = 'LINKTREE',
}

export default function SocialIcon({ socialNetwork, ...props }: Props) {
  const social = socialNetwork.toUpperCase();

  switch (social) {
    case SocialNetwork.FACEBOOK:
      return <Icon as={FaFacebook} {...props} />;
    case SocialNetwork.INSTAGRAM:
      return <Icon as={FaInstagram} {...props} />;
    case SocialNetwork.TIKTOK:
      return <Icon as={FaTiktok} {...props} />;
    case SocialNetwork.YOUTUBE:
      return <Icon as={FaYoutube} {...props} />;
    case SocialNetwork.TWITCH:
      return <Icon as={FaTwitch} {...props} />;
    case SocialNetwork.TWITTER:
      return <Icon as={FaTwitter} {...props} />;
    case SocialNetwork.LINKTREE:
      return <Icon as={SiLinktree} {...props} />;
    default:
      return <Icon as={AiOutlineLink} {...props} />;
  }
}
