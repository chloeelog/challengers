import React from "react";
import styled from "styled-components/native";

import { theme } from "../../../utils/theme/theme";

const { colorScheme, fontScheme } = theme;

type ChallengeInfoTagProps = {
  tag: string;
}

const ChallengeInfoTag: React.FC<ChallengeInfoTagProps> = ({ tag }) => {
  return (
    <Tag>
      <TagInfo>{tag}</TagInfo>
    </Tag>
  )
}

const Tag = styled.View`
  margin: 2px;
  padding: 4px;

  align-self: center;

  background-color: ${ colorScheme.lightGray };

  border-radius: 4px;
`

const TagInfo = styled.Text`
  color: ${ colorScheme.black }; 
  font-size: ${ fontScheme.small };
`

export default ChallengeInfoTag;