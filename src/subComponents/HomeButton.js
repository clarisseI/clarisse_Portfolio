import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HomeBtn } from "../Assets/Svg/AllSvgs";

const Home = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);

  background-color: #fcf6f4;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 3;

  &:hover {
    background-color: rgba(214, 190, 154, 5);
    box-shadow: 0 0 8px 6px rgba(37, 43, 39, 0.2);
  }

  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }
`;
const HomeButton = () => {
  return (
    <Home>
      <NavLink to="/">
        <HomeBtn width={30} height={30} fill="currentColor" />
      </NavLink>
    </Home>
  );
};
export default HomeButton;
