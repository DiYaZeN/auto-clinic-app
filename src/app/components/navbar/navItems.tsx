import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const ListContainer = styled.ul`
    ${tw`
        flex
        list-none
    `}  
`; 

const NavigationItem = styled.li` 
    ${tw`
        text-xs
        md:text-base  
        text-black
        font-medium
        mr-1
        md:mr-5
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover:text-gray-700
    `}
`;



 
 export function NavItems () {
    return <div>NavItems</div>
}