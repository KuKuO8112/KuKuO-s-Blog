import styled from "styled-components";
import { Link } from "react-router-dom";

export const ArticleLink = styled(Link)`
text-decoration: none;
font-size: 18px;
font-family: cursive;
font-weight: 900;
color: #444444;
margin-left: 20px;
margin-right: 10px;
&:visited{
    color: #444444;
}
`;