import React from "react";

import {
  StyledContentContainer,
  H1,
  Columns,
  Column,
  Box,
  CTAContainer,
} from "../StyledContent";
import Button from "../../ui/Button";

const MediumClap = () => (
  <StyledContentContainer>
    <H1>The Medium Clap</H1>

    <Columns>
      <Column>
        <Box isPrimary />
        <CTAContainer alignRight>
          <Button text="Why medium clap?" primary />
        </CTAContainer>
      </Column>
      <Column leftGap>
        <Box />
        <CTAContainer>
          <Button text="Code Implementation" />
        </CTAContainer>
      </Column>
    </Columns>
  </StyledContentContainer>
);

export default MediumClap;
