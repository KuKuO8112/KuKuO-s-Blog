import styled from "styled-components";
import { Link } from "react-router-dom";

export const AlbumLink = styled(Link)`
text-decoration: none;
font-size: 30px;
color: #444444;
margin-left: 10px;
margin-right: 10px;
transition-duration: 1s;
font-family: cursive;
font-weight: 900;
&:visited{
    color: #444444;
}
`;