import React from "react";
import styled from "styled-components";

interface Props {
  direction: string;
  margin: string | number;
}

const HorizontalMargin = styled.span`
  display: flex;
  width: ${({ margin }: Props) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;

const VerticalMargin = styled.span`
  display: flex;
  height: ${({ margin }: Props) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;

function Marginer(props: Props) {
  const { direction } = props;

  if (direction === "horizontal") return <HorizontalMargin {...props} />;
  else {
    return <VerticalMargin {...props} />;
  }
}

Marginer.defaultProps = {
  direction: "horizontal",
};

export { Marginer };