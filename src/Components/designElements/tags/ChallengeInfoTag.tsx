import React from "react";
import styled from "styled-components/native";

type ChallengeInfoTagProps = {
  tag: string;
}

const ChallengeInfoTag: React.FC<ChallengeInfoTagProps> = ({ tag }) => {
  return (
    <Tag>{tag}</Tag>
  )
}

const Tag = styled.Text`
  padding: 2px;

  font-size: 12px;

  align-self: center;

  background-color: gray;
`

export default ChallengeInfoTag;