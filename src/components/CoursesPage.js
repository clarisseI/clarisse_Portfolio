import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Design, Develope } from "./AllSvgs";
import SoundBar from "../subComponents/Navigation/SoundBar";

import LogoComponent from "../subComponents/LogoComponent";
import HomeButton from "../subComponents/Navigation/HomeButton";
import Social from "../subComponents/Social";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: #a6e4c7;
  background-color: ${(props) => props.theme.body};
  padding: 1rem;
  width: 30vw;
  height: 60vh;
  z-index: 2;
  line-height: 1;
  cursor: pointer;

  font-family: "Ubuntu Mono";
  display: flex;
  flex-direction: column;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;
const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }
  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 0.6vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }
  ul {
    margin-left: 1rem;
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <SoundBar />
        <LogoComponent theme="light" />
        <Social theme="light" />
        <HomeButton />
        <ParticleComponent theme="light" />
        <Main>
          <Title>
            <Develope width={40} height={40} /> CS Courses
          </Title>
          <Description>
            <ul style={{ listStyleType: "none" }}>
              <li> COSC 160 - Scientific Program:Java</li>
              <li> COSC 215 - Java With Data Structures</li>
              <li> COSC 220 -Computer Org And Assem Lang</li>
              <li> COSC 300 -Advanced Data Structures</li>
              <li> COSC 305 -Digital Logic</li>
              <li> COSC 308 - Numerical Analysis</li>
              <li> COSC 325W - Operating Systems And Computer Archicture</li>
              <li> COSC 401 - Database Management System</li>
              <li> COSC 425 -Computer Graphics</li>
              <li> COSC 430 - Web-Based Systems</li>
              <li> COSC 435 - Theory of Program Languages</li>
              <li> COSC 450 - Computer Networks</li>
              <li> COSC 460 - Computer Security</li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
            <Design width={40} height={40} /> MATH Courses
          </Title>
          <Description>
            <ul style={{ listStyleType: "none" }}>
              <li> MATH 115 - Calculus I</li>
              <li> MATH 116 -Calculus II</li>
              <li> MATH 135 - Discrete Mathematics</li>
              <li> MATH 215 - Calculus III</li>
              <li> MATH 301 - Intro Probability And Statistics I</li>
              <li> MATH 302W - Intro Probability And Statistics II</li>
              <li> MATH 310 - Linear Algebra</li>
              <li> DTSC 110 - Introduction to Data Science</li>
              <li> PHYS 211 -General Analytical Physics I</li>
              <li> PHYS 212 - General Analytical Physics II</li>
            </ul>
          </Description>
        </Main>
        <BigTitle text="COURSES" top="76%" left="30%" />
      </Box>
    </ThemeProvider>
  );
};
export default MySkillsPage;
