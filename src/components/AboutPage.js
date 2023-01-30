import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";

import HomeButton from "../subComponents/HomeButton";
import Social from "../subComponents/Social";
import ParticleComponent from "../subComponents/ParticleComponent";
import LogoComponent from "../subComponents/LogoComponent";
import SoundBar from "../subComponents/SoundBar";
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
  border: 1px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 1.5rem;
  width: 30vw;
  height: 50vh;
  z-index: 2;
  line-height: 1;
  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
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
  align-items:center;
  font-style: bold'

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
  font-size: calc(0.5em + 0.6vw);
  padding: 0.3rem;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }
  ul,
  p {
    margin-left: 3rem;
  }
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <Social theme="dark" />
        <HomeButton />

        <ParticleComponent theme="dark" />

        <Main>
          <Title>Background</Title>
          <Description>
            In May 2022, I graduated from Duquesne University with a Bachelor's
            Degree in Computer Science and a Minor in Mathematics. Before I
            became fascinated by code, I tried many things! Initially, I was a
            math major, but after some time I realized I enjoyed the excitement
            of designing something from scratch and watching it blossom. Then I
            turned to digital media design, creating designs with Canva and
            99Designs. However, I realized they all had limitations, so I turned
            to coding, where I could design and build anything that I
            wanted.Ultimately, I hope to create a space where young girls can
            voice their opinions, learn about what opportunities the world has
            to offer, and believe in themselves, no matter what.
          </Description>
        </Main>
        <Main>
          <Title>What am I doing now?</Title>
          <Description>
            I am currently working as a junior freelance software engineer for
            T-Hauler, which offers simple moving and delivery services based in
            Pittsburgh, Pennsylvania. I recently finished a team project where I
            was supporting young entrepreneurs on how to create their first
            online websites using tools like Wix and Shopify. Additionally, I
            tutor immigrant children in Pittsburgh in leadership and public
            speaking, helping them find their voice in a multicultural
            environment.
          </Description>
        </Main>
        <BigTitle text="ABOUT" top="65%" right="30%" />
      </Box>
      <SoundBar />
    </ThemeProvider>
  );
};
export default AboutPage;
