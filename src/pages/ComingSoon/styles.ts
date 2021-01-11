import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Constants from 'expo-constants';
const statusBarHeight = Platform.OS === 'android' ? Constants.statusBarHeight : 0;


export const Wrapper = styled.View`
  background: ${({theme}) => theme.colors.primary};
  flex: 1;
  padding-top: ${statusBarHeight + 'px'};

  justify-content:center;
  align-items:center;

`;
export const Heading = styled.Text`
  color: ${({theme}) => theme.colors.purple};;
  font-family: roboto_500;
  font-size: 30px;
`;
