import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const ChannelContainer = styled.TouchableOpacity`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
  padding-right: 14px;
  flex: 1;
  margin-bottom: 25px;
`;

export const LeftSide = styled.View`
  flex-direction: row;
  align-items: center;

`;
export const Avatar = styled.View`
  background: ${({theme}) => theme.colors.tag};
  width: 48px;
  height: 48px;
  border-radius: 24px;

`;
export const Column = styled.View`
  padding-left: 10px;
`;
export const Username = styled.Text`
  font-family: roboto_500;
  color: ${({theme}) => theme.colors.black};
  font-size: 16px;
`;
export const Info = styled.Text`
  margin-top: 1px;
  color: ${({theme}) => theme.colors.gray};
  font-size: 13px;
`;
export const RightSide = styled.View``;

export const WhiteCircle = styled.View`
  background: ${({theme}) => theme.colors.black};
  width: 9px;
  height: 9px;
  border-radius: 4.5px;
  opacity: 0.85;
`;

