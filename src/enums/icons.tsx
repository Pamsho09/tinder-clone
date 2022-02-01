import {SvgProps} from 'react-native-svg';
import Like from '../assets/icons/like.svg';
import Profile from '../assets/icons/profile.svg';
import Shape from '../assets/icons/shape.svg';
import Message from '../assets/icons/message.svg';
import React from 'react';
interface IIcons {
  [key: string]: (props?: SvgProps) => React.ReactNode;
}

export const icons: IIcons = {
  LIKE: props => <Like {...props} />,
  PROFILE: props => <Profile {...props} />,
  SHAPE: props => {
    return <Shape {...props} />;
  },
  MESSAGE: props => <Message {...props} />,
};
