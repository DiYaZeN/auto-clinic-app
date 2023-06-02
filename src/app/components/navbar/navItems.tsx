import React from "react";
import styled from "styled-components";
import tw from "twin.macro";


const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
  `};
`;


const NavigationItem = styled.li`
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

  a {
    ${tw`
      no-underline
      text-black
    `};

    &:hover {
      ${tw`
        text-gray-500
      `};
    }
  }
`;

 export function NavItems () {
    return (
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