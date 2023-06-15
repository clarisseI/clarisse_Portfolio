import React, { useEffect, useState } from "react";
import styled from "styled-components";
import img from "../Assets/Image/background.webp";

import HomeButton from "../subComponents/HomeButton";
import LogoComponent from "../subComponents/LogoComponent";
import Social from "../subComponents/Social";
import SoundBar from "../subComponents/SoundBar";

import { Works } from "../data/workData";
import WorkComponent from "./workComponent";
import AnchorComponent from "../subComponents/Anchor";
import BigTitle from "../subComponents/BigTitle";
import { motion } from "framer-motion";

const MainContainer = styled(motion.div)`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;
const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
  width: 100%;
  height: auto;

  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};
const WorkPage = () => {
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumbers(parseInt(num));
  }, []);

  return (
    <MainContainer
      variants={container}
      initial="hidden"
      animate="show"
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}
    >
      <Container>
        <LogoComponent />
        <SoundBar />
        <HomeButton />
        <Social />
        <AnchorComponent number={numbers} />
        <Center>
          <Grid>
            {Works.map((work) => {
              return <WorkComponent key={work.id} work={work} />;
            })}
          </Grid>
        </Center>
        <BigTitle text="PROJECT" top="5rem" left="15rem" />
      </Container>
    </MainContainer>
  );
};
export default WorkPage;
