import React from "react";
import styled from "styled-components/native";

import { theme } from "../../../utils/theme/theme";

const { colorScheme, fontScheme } = theme

type ScreenHeaderProps = {
  title: string;
}

const ScreenHeader: React.FC<ScreenHeaderProps> = ({ title }) => {
  return (
    <Header>
      <Title>{title}</Title>
    </Header>
  )
}

const Header = styled.View`
  display: flex;
  flex-direction: row;
`

const Title = styled.Text`
  color: ${ colorScheme.black };
  font-size: ${ fontScheme.mediumLarge };
  font-weight: 700;

  margin-left: 4px;
`

export default ScreenHeader;