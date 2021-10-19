import { Link } from "react-router-dom";
import styled from "styled-components";

export const BackLink = styled(Link)`
text-decoration: none;
font-size: 20px;
color: #444444;
padding-left: 10px;
padding-right: 10px;
margin: auto;
transition-duration: 1s;
font-family: cursive;
font-weight: 900;
&:visited{
    color: #444444;
}
`;