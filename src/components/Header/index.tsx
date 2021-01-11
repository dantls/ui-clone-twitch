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
        <Switch
          trackColor={{ false : theme.colors.gray, true: theme.colors.tag }}
          thumbColor={ false ? "#f4f3f4" : "#f4f3f4"}
          ios_backgroundColor="#f4f3f4"
          onValueChange={toggleTheme}
          value={theme.title === 'dark'? false : true}
        />
      </RightSide>
     
    </Container>
  );
};

export default Header;
