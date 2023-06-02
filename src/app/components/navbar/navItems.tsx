import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { screens } from "../responsive";
import menuStyles from "./menuStyle";

const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
  `};
`; 

 
const NavigationItem = styled.li<{ menu?: any }>`
 
  ${tw`
    text-sm
    md:text-base
    text-black
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
  `};

    ${({ menu }) => menu && tw`
    text-white
    text-xl
    mb-3
    focus:text-white
    `};

  a {
    ${tw`
      no-underline
      text-black
    `};

    color: ${({ menu }) => (menu ? "white" : "black")};
    &:hover ${(menu) => (menu ? "white" : "black")};

    &:hover {
      ${tw`
        text-gray-500
      `};
    };
  }
`;

 export function NavItems () {
    const isMobile = useMediaQuery({ maxWidth:screens.sm  });


    if (isMobile)
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          <NavigationItem menu>
            <a href="#1">Home</a>
          </NavigationItem>
          <NavigationItem menu>
            <a href="#6">Cars</a>
          </NavigationItem>
          <NavigationItem menu>
            <a href="#5">Services</a>
          </NavigationItem>
          <NavigationItem menu>
            <a href="#4">Contact Us</a>
          </NavigationItem>
        </ListContainer>
      </Menu>
    );
    else  return (
        <ListContainer>
          <NavigationItem >
            <a href="#1">Home</a>
          </NavigationItem>
          <NavigationItem >
            <a href="#2">Cars</a>
          </NavigationItem>
          <NavigationItem >
            <a href="#3">Services</a>
          </NavigationItem>
          <NavigationItem >
            <a href="#4">Contact Us</a>
          </NavigationItem>
        </ListContainer>);
}