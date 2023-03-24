import { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";
import styled from 'styled-components/native';

export interface ButtonProps extends TouchableOpacityProps {
  children: ReactNode;
}

export const StyledButton = styled.TouchableOpacity<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #E6790B;
  height: 50px;
  border-radius: 8px;
  width: 100%;
  margin-top: 20px;
`

export const StyledText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`