import React from "react";
import AlbumItem from "../AlbumPage/AlbumItem/AlbumItem";
import { AlbumList } from "../AlbumPage/AlbumList/AlbumList";
import { NewestTitleDiv } from "./NewestTitleDiv";

export default function NewestAlbum(){
    return(
        <AlbumList>
            <NewestTitleDiv>Newest Album</NewestTitleDiv>
            <AlbumItem AlbumName="Album4_9">2020-4-9 屋後麻雀</AlbumItem>
        </AlbumList>
    )
}