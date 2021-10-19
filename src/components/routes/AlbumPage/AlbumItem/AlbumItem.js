import React from "react";
import { AlbumItemStyle } from "./AlbumItemStyle";
import { AlbumLink } from "../AlbumList/AlbumLink";
import { DateDiv } from "./DateDiv";

export default function AlbumItem({children, date}){
    return(
        <AlbumItemStyle>
            <AlbumLink to={"/AlbumPage/" + children}>{children}</AlbumLink>
            <DateDiv>{date}</DateDiv>
        </AlbumItemStyle>
    )
}