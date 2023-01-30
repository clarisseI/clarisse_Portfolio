import styled from "styled-components";
import configDark from "../config/particlesjs-config.json";
import configLight from "../config/particlesjs-config-light.json";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;
const ParticleComponent = (props) => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <Box>
      <Particles
        id="tsparticles"
        style={{ position: "absolute", top: 0 }}
        params={props.theme === "light" ? configLight : configDark}
        init={particlesInit}
      />
    </Box>
  );
};
export default ParticleComponent;
