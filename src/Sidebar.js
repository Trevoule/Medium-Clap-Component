import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import {
  HEADER_ALLOWANCE,
  SIDEBAR_LEFT_PADDING,
  LIGHTER_GREY,
  GREY,
  zIndex,
} from "./utils/constants";

import { media } from "./components/StyledContent";

const StyledSidebar = styled.div`
  background: #0f0f14;
  padding: ${() => `0 ${SIDEBAR_LEFT_PADDING}vw`};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${zIndex.SIDEBAR};
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.4), 0 6px 6px rgba(0, 0, 0, 0.4);
  position: initial;
  box-shadow: none;

  /* ${media.md`
    position: initial;
    box-shadow: none;
  `} */
`;

const StyledLogoArea = styled.div`
  position: relative;
  height: ${() => `${HEADER_ALLOWANCE}vh`};
  > img {
    position: absolute;
    bottom: 0;
  }
`;

const StyledNavigation = styled.nav`
  padding: 0;
  margin: 0;
  margin-top: ${() => `${HEADER_ALLOWANCE}vh`};
  > a {
    display: block;
    padding-left: ${() => `${SIDEBAR_LEFT_PADDING / 2}vw`};
    padding-top: ${() => `${SIDEBAR_LEFT_PADDING / 3}vw`};
    padding-bottom: ${() => `${SIDEBAR_LEFT_PADDING / 3}vw`};
    margin-bottom: 7px;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;
    color: ${() => `${LIGHTER_GREY}`};
  }

  > a:hover {
    outline: ${() => `1px solid ${GREY}`};
  }
`;

const LogoArea = () => (
  <StyledLogoArea>
    <h2>Medium Clap</h2>
  </StyledLogoArea>
);

const NAV_ITEMS = [
  "Home",
  "Medium Clap",
  "Compound Components",
  "Control Props",
  "Custom Hooks",
  "Props Collection",
  "Prop Getters",
  "State Initializers",
  "State Reducers",
];

const linkItem = (item) => {
  return item.toLowerCase().split(" ").join("-");
};

const Sidebar = ({ setShowSidebar }) => {
  const handleClick = () => setShowSidebar((v) => !v);
  return (
    <StyledSidebar>
      <LogoArea />
      <StyledNavigation>
        {NAV_ITEMS.map((item) => (
          <NavLink
            style={({ isActive }) => ({
              background: isActive ? GREY : "",
            })}
            key={item}
            to={item === "Home" ? "/" : linkItem(item)}
          >
            {item}
          </NavLink>
        ))}
      </StyledNavigation>
    </StyledSidebar>
  );
};

export default Sidebar;
