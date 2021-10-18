import styled from "styled-components";
import { Link } from "react-router-dom";

export const TitleLink = styled(Link)`
text-align: center;
font-size: 100px;
color: #333333;
text-decoration: none;
font-family: fantasy;
transition-duration: 1s;
&:hover{
    text-shadow: 8px 8px 8px #666666;
    transition-duration: 1s;
}
`;