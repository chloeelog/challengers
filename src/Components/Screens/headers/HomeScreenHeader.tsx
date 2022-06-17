import React from "react";
import styled from "styled-components/native";

import { theme } from "../../../utils/theme/theme";
import { Logo } from "../../designElements/icons/logo";

const { colorScheme, fontScheme, iconScheme } = theme

const HomeScreenHeader: React.FC = () => {
  return (
    <Header>
      <Logo size={iconScheme.tabHeaderIconSize} color={colorScheme.primary} />
      <Title>챌린저스</Title>
    </Header>
  )
}

const Header = styled.View`
  display: flex;
  flex-direction: row;
`

const Title = styled.Text`
  color: ${ colorScheme.black };
  font-size: ${ fontScheme.medium };
  font-weight: 700;

  margin-left: 4px;
`

export default HomeScreenHeader;