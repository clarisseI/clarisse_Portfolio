import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Design, Develope } from "./AllSvgs";

import LogoComponent from "../subComponents/LogoComponent";

import ParticleComponent from "../subComponents/ParticleComponent";

import Social from "../subComponents/Social";
import HomeButton from "../subComponents/Navigation/HomeButton";
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
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 1.5rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
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
  font-size: calc(0.6em + 0.5vw);
  padding: 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <Social theme="light" />
        <HomeButton />
        <ParticleComponent theme="light" />
        <Main>
          <Title>
            <Design width={40} height={40} /> Backend Developer
          </Title>
          <Description>
            I am passionate about bringing new ideas to the business or brand I
            am working onlife.
          </Description>
          <Description>
            <strong> Skills</strong>
            <ul>
              <li>
                <strong>Programing Languages</strong>: Java, Javascript{" "}
              </li>
              <li>
                <strong>Web (Backend) Tech </strong>: Nodejs, Spring Boot{" "}
              </li>
              <li>
                <strong>Cloud Providers </strong>: AWS
              </li>
              <li>
                <strong>Database </strong>: Mysql, MongoDB
              </li>
              <li>
                <strong> Web Servers </strong>: Tomcat 8.0{" "}
              </li>

              <li>
                {" "}
                <strong>Operating Systems </strong>: Linux, windows.{" "}
              </li>
              <li>
                {" "}
                <strong> Dev Methodologies </strong>: Agile(Jira){" "}
              </li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40} />
            Front Developer
          </Title>
          <Description>
            As a designer, I love to create designs that speak of simplicity,
            neatness, and minimalism.
          </Description>
          <Description>
            <strong>Skills</strong>
            <ul>
              <li>
                <strong>Programing Languages </strong> :Javascript{" "}
              </li>
              <li>
                <strong>Web (Frontend) Tech </strong>:Javascript ES6, Html5,
                Css3, Boostrap 4, React, Redux, Tailwind,{" "}
              </li>
              <li>
                <strong>IDE(s) </strong>:Eclipse, Spring Tool Suite(STS), Visual
                Studio Code{" "}
              </li>
              <li>
                <strong>Tools</strong>Figma
              </li>
              <li>
                <strong>Version Controls</strong>Github
              </li>
            </ul>
            <p>etc.</p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VScode, Github, Codepen etc.</p>
          </Description>
        </Main>

        <BigTitle text="SKILLS" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
