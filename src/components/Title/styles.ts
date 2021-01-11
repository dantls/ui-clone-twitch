import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.Text`
  color: ${({theme}) => theme.colors.gray};
  background: ${({theme}) => theme.colors.primary};

  font-family: roboto_700;
  font-size: 14px;
  text-transform: uppercase;

  padding: 9px 0;

`;
