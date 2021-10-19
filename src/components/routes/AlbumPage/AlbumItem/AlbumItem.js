import React from "react";
import { AlbumItemStyle } from "./AlbumItemStyle";
import { AlbumLink } from "../AlbumList/AlbumLink";

export default function AlbumItem({children, AlbumName}){
    return(
        <AlbumItemStyle>
            <AlbumLink to={"/AlbumPage/" + AlbumName}>{children}</AlbumLink>
        </AlbumItemStyle>
    )
}