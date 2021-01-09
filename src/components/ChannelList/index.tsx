import React from 'react';
import ChannelItem from '../ChannelItem';

import { List } from './styles';

const ChannelList: React.FC = () => {
  return (
      <List>
        <ChannelItem />
        <ChannelItem />
        <ChannelItem />
        <ChannelItem />
      </List>
  );
};

export default ChannelList;
