import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import CompoundComponents from "./components/CompoundComponents";
import ControlProps from "./components/ControlProps";
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
import Home from "./components/Home";
import MediumClap from "./components/MediumClap";
import CustomHooks from "./components/CustomHooks";
import PropsCollection from "./components/PropsCollection";
import PropGetters from "./components/PropGetters";
import StateInitializers from "./components/StateInitializers";
import StateReducers from "./components/StateReducers";

const StyledAppBody = styled.div`
  padding-top: ${() => `${HEADER_ALLOWANCE}vh`};
  background: #191921;
`;

const Body = () => {
  return (
    <StyledAppBody>
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={MEDIUM_CLAP} element={<MediumClap />} />
        <Route path={COMPOUND_COMPONENTS} element={<CompoundComponents />} />
        <Route path={CONTROL_PROPS} element={<ControlProps />} />
        <Route path={CUSTOM_HOOKS} element={<CustomHooks />} />
        <Route path={PROPS_COLLECTION} element={<PropsCollection />} />
        <Route path={PROP_GETTERS} element={<PropGetters />} />
        <Route path={STATE_INITIALIZERS} element={<StateInitializers />} />
        <Route path={STATE_REDUCERS} element={<StateReducers />} />
      </Routes>
    </StyledAppBody>
  );
};

export default Body;
