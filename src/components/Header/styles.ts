import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 14px 14px 0 0;
`;

export const Avatar = styled.TouchableOpacity`
  background: ${({theme}) => theme.colors.tag};
  margin-left: 10px;
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;
export const OnlineStatus = styled.View`
  background: ${({theme}) => theme.colors.green};
  width: 10px;
  height: 10px;
  border-radius: 10px;

  border: 2px solid ${({theme}) => theme.colors.primary};
  position: absolute;
  bottom: 0;
  right: 0;
`;
export const Button = styled.TouchableOpacity`
  margin-right: 20px;
`;
export const RightSide = styled.View`
  flex-direction: row;
  align-items: center;

`;
