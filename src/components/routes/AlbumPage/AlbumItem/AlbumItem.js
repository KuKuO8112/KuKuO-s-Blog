import React from "react";
import { AlbumItemStyle } from "./AlbumItemStyle";
import { AlbumLink } from "../Album/AlbumLink";

export default function AlbumItem({children}){
    return(
        <AlbumItemStyle>
            <AlbumLink to={"/AlbumPage/" + children}>{children}</AlbumLink>
        </AlbumItemStyle>
    )
}