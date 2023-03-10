import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import device from "../../Assets/Responsive/Breakpoint";

const Stage = styled.div`
position: relative;
z-index: 1;
width:100%;
`

const moveUp = init => keyframes`
0%{
    transform: translateY(${init}px);
}
100%{
    transform: translateY(0px);
}
`

const hideWhiteBlocks = () => keyframes`
0%{
    opacity: 1;
    height: 35vh;
}
100%{
    opacity: 0;
    height: 0vh;
}
`

const TextToReveal = styled.div`
  font-family: ${props => props.fontFam};
  text-align:center;
  @media ${device.tablet} {
    font-size: 40px;
    animation: ${props => (props.reveal ? moveUp(100) : 'none')} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
    transform: translateY(${100 * 1.4}px);
  }
  @media ${device.laptop} {
    font-size: 70px;
    animation: ${props => (props.reveal ? moveUp(140) : 'none')} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
    transform: translateY(${140 * 1.4}px);
  }
  @media ${device.laptopL} {
    font-size: 80px;
    animation: ${props => (props.reveal ? moveUp(150) : 'none')} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
    transform: translateY(${150 * 1.4}px);
  }
  @media ${device.desktop} {
    font-size: 90px;
    animation: ${props => (props.reveal ? moveUp(200) : 'none')} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
    transform: translateY(${200 * 1.4}px);
  }
`

const WhiteBlock = styled.div`
position: absolute;
background-color: white;
margin-right:100%;
width: 120%;
height: 35vh;
animation: ${hideWhiteBlocks} 0.5s linear forwards;
animation-delay: 2s;

`


class NameReveal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reveal: false,
    };
    this.revealText = this.revealText.bind(this);
  }

  componentDidMount() {
    const { timeDelay } = this.props;
    this.revealText(timeDelay);
  }

  revealText(timeout) {
    setTimeout(() => {
      this.setState({ reveal: true });
    }, timeout);
  }

  render() {
    const { text, fontFam } = this.props;
    const { reveal } = this.state;
    return (
      <Stage>
        <TextToReveal
          fontFam={fontFam}
          reveal={reveal}
        >
          {text}
        </TextToReveal>
        <WhiteBlock />
      </Stage>
    );
  }
}

NameReveal.propTypes = {
  text: PropTypes.string.isRequired,
  fontFam: PropTypes.string,
  timeDelay: PropTypes.number.isRequired,
};

NameReveal.defaultProps = {
  fontFam: 'Courgette  cursive',
};
export default NameReveal;