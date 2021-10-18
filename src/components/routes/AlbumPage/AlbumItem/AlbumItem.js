import React from "react";
import { AlbumItemStyle } from "./AlbumItemStyle";
import { PageLink } from "../../../Layout/Nav/NavLink/PageLink";
import { AlbumLink } from "../Album/AlbumLink";

export default function AlbumItem({children}){
    return(
        <AlbumItemStyle>
            <AlbumLink to={"/AlbumPage/" + children}>{children}</AlbumLink>
        </AlbumItemStyle>
    )
}