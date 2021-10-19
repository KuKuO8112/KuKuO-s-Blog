import React from "react";
import { FrontPageDiv } from "./FrontPageDiv";
import NewestAlbum from "./NewestAlbum";
import NewestArticle from "./NewestArticle";

export default function FrontPage () {
    return(
        <FrontPageDiv>
            <NewestAlbum/>
            <NewestArticle/>
        </FrontPageDiv>
    )
}