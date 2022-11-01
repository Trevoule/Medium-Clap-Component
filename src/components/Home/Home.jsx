import React from "react";
import styled from "styled-components";

import { SIDEBAR_LEFT_PADDING, HEADER_ALLOWANCE } from "../../utils/constants";
import Button from "../../ui/Button";

const StyledContainer = styled.section`
  padding: ${() =>
    `0 ${SIDEBAR_LEFT_PADDING}vw 0 ${SIDEBAR_LEFT_PADDING * 3}vw`};
`;
const CTAContainer = styled.div`
  margin-top: ${() => `${HEADER_ALLOWANCE}vh`};
  > button:nth-child(1) {
    margin-right: 20px;
  }
`;

const Home = () => (
  <StyledContainer>
    <CTAContainer>
      <Button text="Get started" primary />
      <Button text="Star on Github" />
    </CTAContainer>
  </StyledContainer>
);

export default Home;
