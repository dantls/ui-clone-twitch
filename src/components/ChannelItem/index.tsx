import React from 'react';

import { 
ChannelContainer,
LeftSide,
Avatar,
Column,
Username,
Info,
RightSide,
WhiteCircle,
} from './styles';

const ChannelItem: React.FC = () => {
  return (
    <ChannelContainer>
      <LeftSide>
        <Avatar />
        <Column>
          <Username>Danilo Oficial</Username>
          <Info>36 news videos</Info>
        </Column>
      </LeftSide>
      <RightSide>
        <WhiteCircle />
      </RightSide>
    </ChannelContainer>
  );
};

export default ChannelItem;
