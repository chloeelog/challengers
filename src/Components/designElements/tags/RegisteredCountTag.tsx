import React from "react";
import { StyleProp, ViewStyle } from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import styled from "styled-components/native";

import { theme } from "../../../utils/theme/theme";

const { colorScheme, fontScheme } = theme;

type RegisteredCountTagProps = {
  tag: number;
  style?: StyleProp<ViewStyle>;
}

const RegisteredCountTag: React.FC<RegisteredCountTagProps> = ({ tag, style }) => {
  return (
    <Tag style={style}>
      <Icon name="human-greeting-variant" color={colorScheme.white} />
      <TagInfo>{tag}</TagInfo>
    </Tag>
  )
}

const Tag = styled.View`
  margin: 2px;
  padding: 4px;

  display: flex;
  flex-direction: row;
  align-self: center;

  background-color: ${ colorScheme.blackTransparent };

  border-radius: 4px;
`

const TagInfo = styled.Text`
  margin-left: 2px;

  color: ${ colorScheme.white }; 
  font-size: ${ fontScheme.small };
`

export default RegisteredCountTag;