import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { Switch } from 'react-native';

import useToggleTheme from '../../hooks/useToggleTheme';


import { Container, Avatar, OnlineStatus, Button,RightSide } from './styles';

const Header: React.FC = () => {
  const { toggleTheme, theme } = useToggleTheme();

  return (
    <Container>
      <Avatar>
        <OnlineStatus />
      </Avatar>

      <RightSide>
        <Button>
          <MaterialIcons 
            name="notifications-none"
            size={26}
            color={theme.colors.black}
          />
        </Button>
        <Button>
          <MaterialCommunityIcons 
            name="message-outline"
            size={26}
            color={theme.colors.black}
          />
        </Button>
        <Button>
          <Feather 
            name="search"
            size={26}
            color={theme.colors.black}
          />
        </Button>
        <Button onPress={toggleTheme}>
          {theme.title === 'light' 
          ?
            <Feather 
              name="moon"
              size={26}
              color={theme.colors.black}
            /> 
          :
            <Feather 
              name="sun"
              size={26}
              color={theme.colors.black}
            />
          }
        </Button>
       
      </RightSide>
     
    </Container>
  );
};

export default Header;
