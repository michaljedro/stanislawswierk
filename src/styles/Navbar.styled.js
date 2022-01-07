import styled from "styled-components";
import { device } from "./Breakpoints.styled";

export const Btn = styled.button`
@media ${device.mobileS} {
    background-color:pink;
}
`
export const Header = styled.div`
`

export const Nav = styled.div`  
    background-color: yellow;
`
export const List = styled.ul`
    background-color:blue;
`

export const ItemList = styled.li`
    background-color:green;
`