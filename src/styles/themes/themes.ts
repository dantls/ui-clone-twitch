import { DefaultTheme } from "styled-components/native";

declare module "styled-components" {
  export interface DefaultTheme {
  title: string;
    colors: {
      primary: string;
      black: string;
      gray: string;
      tag: string;
      green: string;
      red: string;
      purple: string;
      light: string;  
    }
  }
}
export const light: DefaultTheme = { 
  title: "light",
  colors: {
    primary: '#f7f7f8',
    black: '#000014',
    gray: '#3a3a44',
    tag: '#323235',
    green: '#14b866',
    red: '#ec1414',
    purple: '#bf94ff',
    light: '#fff',
  }
};

export const dark: DefaultTheme = {
  title: "dark",
  colors: {
    primary: '#000014',
    black: '#efeff1',
    gray: '#7f7f8b',
    tag: '#323235',
    green: '#14b866',
    red: '#ec1414',
    purple: '#bf94ff',
    light: '#fff',
  }
}