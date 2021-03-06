import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.TouchableOpacity`
  margin-right: 10px;
`;
export const CategoryImage = styled.Image`
  width: 98px;
  height:130px;
  border-radius: 5px;
`;
export const CategoryName = styled.Text`
  margin-top: 5px;
  max-width: 98px;
  color: ${({theme}) => theme.colors.black};
  font-family: roboto_700;
  font-size: 13.5px;
`;
export const RedCircle = styled.View`
  background: ${({theme}) => theme.colors.red};
  width: 9px;
  height: 9px;
  border-radius: 4.5px;
`;
export const Info = styled.Text`
  margin-left: 4px;
  padding-bottom: 1px;
  color: ${({theme}) => theme.colors.gray};
  font-family: roboto_500;


`;
export const CategoryStatus = styled.View`
  flex-direction: row;
  align-items: center;
`;