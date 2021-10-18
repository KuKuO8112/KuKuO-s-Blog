import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageLink = styled(Link)`
text-decoration: none;
font-size: 40px;
margin-left: 30px;
margin-right: 30px;
transition-duration: 1s;
color: #444444;
&:visited{
    color: #444444;
}
&:hover{
    text-shadow: 5px 5px 5px #555555;
    transition-duration: 1s;
}
`;