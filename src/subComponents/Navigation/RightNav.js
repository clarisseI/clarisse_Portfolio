import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const UL = styled.ul`
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

    transition: transform 0.3s ease-in-out;
  }
`;

const MenuLink = styled(NavLink)`
color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
text-decoration: none;
cursor:pointer;
padding: 0.5rem;
&:hover{
    color: #003153;

   

`;

const RightNav = ({ open }) => {
  return (
    <UL open={open}>
      <MenuLink to="/about">
        <motion.h3
          style={{ fontFamily: "Supermercado One" }}
          whileHover={{ scale: 0.7 }}
          whileTap={{ scale: 0.5 }}
        >
          About
        </motion.h3>
      </MenuLink>

      <MenuLink to="/work">
        <motion.h3
          style={{ fontFamily: "Supermercado One" }}
          whileHover={{ scale: 0.7 }}
          whileTap={{ scale: 0.5 }}
        >
          Project
        </motion.h3>
      </MenuLink>

      <MenuLink to="/courses">
        <motion.h3
          style={{ fontFamily: "Supermercado One" }}
          whileHover={{ scale: 0.7 }}
          whileTap={{ scale: 0.5 }}
        >
          Courses
        </motion.h3>
      </MenuLink>

      <MenuLink
        target="_blank"
        to={{
          pathname:
            "https://drive.google.com/file/d/1iyhWwk7K4qsgt4vee9mXBPaeM_dhZMPw/view?usp=sharing",
        }}
      >
        <motion.h3
          style={{ fontFamily: "Supermercado One" }}
          whileHover={{ scale: 0.7 }}
          whileTap={{ scale: 0.5 }}
        >
          Resume
        </motion.h3>
      </MenuLink>
    </UL>
  );
};
export default RightNav;
