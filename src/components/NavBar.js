import React from "react";
import Global from "./global";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const StyledButton = styled.button`
  margin-left: 20px;
  background-color: transparent;
  color: ${(props) => (props.isSelected ? "#FFD700" : "#000")};
  cursor: pointer;
  text-decoration: ${(props) => (props.isSelected ? "underline" : "none")};
  border: none;
  outline: none;

  &:hover {
    text-decoration: underline;
    background-color: transparent;
    color: #e2eff2;
  }
`;

const StyledSpan = styled.span`
  display: block;
  position: relative;
`;

const StyledSpanBackground = styled.span`
  background-color: #000;
`;

const TooltipText = styled.span`
  color: #e2eff2;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
    background-color: transparent;
    color: #e2eff2;
  }
`;

const StyledNavBar = styled.div`
  background-color: transparent;
  border-bottom: 2px solid #bdaeff;
  padding: 20px;
  padding-right: 30px;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1000px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const NavBar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <StyledNavBar>
      <Global />
      <NavItem selected={selected === 0} id={0} setSelected={setSelected} to="/">
        <TooltipText>HOME</TooltipText>
      </NavItem>
      <NavItem selected={selected === 1} id={1} setSelected={setSelected} to="/about">
        <TooltipText>ABOUT</TooltipText>
      </NavItem>
      <NavItem selected={selected === 2} id={2} setSelected={setSelected} to="/skills">
        <TooltipText>SKILLS</TooltipText>
      </NavItem>
      <NavItem selected={selected === 3} id={3} setSelected={setSelected} to="/projects">
        <TooltipText>PROJECTS</TooltipText>
      </NavItem>
      <NavItem selected={selected === 4} id={4} setSelected={setSelected} to="/gallery">
        <TooltipText>GALLERY</TooltipText>
      </NavItem>
      <NavItem selected={selected === 5} id={5} setSelected={setSelected} to="/contact">
        <TooltipText>CONTACT</TooltipText>
      </NavItem>
    </StyledNavBar>
  );
};

const NavItem = ({ children, to, selected, id, setSelected }) => {
  const location = useLocation();
  const isSelected = location.pathname === to;

  return (
    <Link to={to}>
      <StyledButton isSelected={isSelected} onClick={() => setSelected(id)}>
        <StyledSpan>
          {children}
          {isSelected && <StyledSpanBackground />}
        </StyledSpan>
      </StyledButton>
    </Link>
  );
}

export default NavBar;
