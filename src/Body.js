import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import {
  COMPOUND_COMPONENTS,
  CONTROL_PROPS,
  CUSTOM_HOOKS,
  HEADER_ALLOWANCE,
  HOME,
  MEDIUM_CLAP,
  PROPS_COLLECTION,
  PROP_GETTERS,
  STATE_INITIALIZERS,
  STATE_REDUCERS,
} from "./utils/constants";

import {
  media,
  StyledFloatingBtn,
  StyledContentContainer,
  StyledInfoContainer,
  Header as StyledHeader,
  H1,
  Columns,
  Column,
  Box,
  CTAContainer,
} from "./components/StyledContent";
import Button from "./ui/Button";
import { NOTES } from "./constants/displayBoxNotes";
import { INFO } from "./constants/patternInfo";

import Home from "./components/Home";
import MediumClap from "./components/MediumClap";
import CustomHooks from "./components/CustomHooks";
import PropsCollection from "./components/PropsCollection";
import PropGetters from "./components/PropGetters";
import StateInitializers from "./components/StateInitializers";
import StateReducers from "./components/StateReducers";

// import InfoIllustration from "./assets/light_bulb.svg";
import { useAnimatedBulb } from "./components/useAnimatedBulb";
import { useAnimatedInfo } from "./components/useAnimatedInfo";

const StyledAppBody = styled.div`
  background: #191921;
  padding: ${() => `${HEADER_ALLOWANCE / 6}vh 10px`};

  ${media.md`
    padding: ${() => `${HEADER_ALLOWANCE}vh 0`};
  `}
`;

const patterns = [
  "medium-clap",
  "compound-components",
  "reusable-styles",
  "control-props",
  "custom-hooks",
  "props-collection",
  "prop-getters",
  "state-initializers",
  "state-reducers",
];

const Header = ({ title, patternNumber }) => {
  // animated el
  const [{ lightBulbEl, infoEl, infoTextEl }, setRefState] = useState({});

  const setRef = useCallback((node) => {
    if (node !== null) {
      setRefState((prevRefState) => ({
        ...prevRefState,
        [node.dataset.refkey]: node,
      }));
    }
  }, []);

  const animatedBulbTimeline = useAnimatedBulb({
    el: lightBulbEl,
  });
  const animatedInfoTimeline = useAnimatedInfo({
    bgEl: infoEl,
    textEl: infoTextEl,
  });

  // toggle info display
  const [isInfoShown, setInfoShown] = useState(false);

  const toggleInfo = () => {
    setInfoShown((isInfoShown) => !isInfoShown);
    animatedBulbTimeline.replay();
  };

  useEffect(() => {
    if (!isInfoShown) {
      return;
    }

    const timer = setTimeout(() => {
      animatedInfoTimeline.replay();
    }, 100);

    return () => clearTimeout(timer);
  }, [isInfoShown]);

  return (
    <StyledHeader>
      {isInfoShown && (
        <StyledInfoContainer ref={setRef} data-refkey="infoEl">
          <p ref={setRef} data-refkey="infoTextEl">
            {INFO[patternNumber]}
          </p>
        </StyledInfoContainer>
      )}
      <H1>{title}</H1>
      <div ref={setRef} data-refkey="lightBulbEl">
        {/* <InfoIllustration
          style={{ width: "30px", marginLeft: "5px", cursor: "pointer" }}
          onClick={toggleInfo}
        /> */}
      </div>
    </StyledHeader>
  );
};

const RouteComponent = ({ pattern, patternNumber, isMediumOrLarger }) => {
  const firstLetterCap = (str) => str.slice(0, 1).toUpperCase() + str.slice(1);
  const title = pattern.split("-").map(firstLetterCap).join(" ");

  const indexToTwoDigits = (i) => (i < 10 ? `0${i}` : i);
  const beforeAndAfterPatternNumbers = [patternNumber, patternNumber + 1].map(
    indexToTwoDigits
  );

  // Demo to be shown in Display Boxes
  let Demo1, Demo2;
  try {
    Demo1 = require(`./patterns/${beforeAndAfterPatternNumbers[0]}`).default;
  } catch (error) {
    Demo1 = () => null;
  }
  try {
    Demo2 = require(`./patterns/${beforeAndAfterPatternNumbers[1]}`).default;
  } catch (error) {
    Demo2 = () => null;
  }

  return (
    <StyledContentContainer>
      <Header title={title} patternNumber={patternNumber} />
      <Columns>
        <Column>
          <Box isPrimary note={NOTES[patternNumber]}>
            <Demo1 />
          </Box>
          {isMediumOrLarger && (
            <CTAContainer alignRight>
              <Button text={`Why ${title}?`} primary />
            </CTAContainer>
          )}
        </Column>
        <Column leftGap>
          <Box
            note={NOTES[patternNumber + 1]}
            m={!isMediumOrLarger && "15px 0 0 0"}
          >
            <Demo2 />
          </Box>
          {!isMediumOrLarger && (
            <CTAContainer>
              <Button text={`Why ${title}?`} primary />
            </CTAContainer>
          )}
        </Column>
      </Columns>
    </StyledContentContainer>
  );
};

const Body = ({ setShowSidebar, isMediumOrLarger }) => {
  const toggleSidebar = () => setShowSidebar((val) => !val);

  return (
    <StyledAppBody>
      <Routes>
        <Route path={HOME} element={<Home />} />
        {patterns.map((pattern, index) => (
          <Route
            key={pattern}
            path={pattern}
            element={
              <RouteComponent
                key={pattern}
                pattern={pattern}
                patternNumber={index + 1}
                isMediumOrLarger={isMediumOrLarger}
              />
            }
          />
        ))}
      </Routes>
      {!isMediumOrLarger && (
        <StyledFloatingBtn onClick={toggleSidebar}>+</StyledFloatingBtn>
      )}
    </StyledAppBody>
  );
};

export default Body;
