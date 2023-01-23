import React from "react";
import styled from "styled-components";
import NameReveal from "./NameReveal";
import TitleReveal from "./TitleReveal";

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const NameAndTitle = () => {
  return (
    <Container>
      <NameReveal
        text="Clarisse Ilibagiza Umulisa"
        fontFam="Courgette"
        timeDelay={500}
      />
      <br />
      <TitleReveal text=" Portfolio" fontFam="Nunito Sans" timeDelay={1300} />
      <br />
    </Container>
  );
};

export default NameAndTitle;
