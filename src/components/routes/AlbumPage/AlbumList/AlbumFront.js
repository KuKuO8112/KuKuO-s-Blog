import React from "react";
import AlbumItem from "../AlbumItem/AlbumItem";
import { AlbumList } from "./AlbumList";
import { AlbumTitle } from "./Album/AlbumTitleStyle";

export default function AlbumFront(){
    return(
        <AlbumList>
            <AlbumTitle>Album Page</AlbumTitle>
            <AlbumItem AlbumName="Album4_9">2020-4-9 屋後麻雀</AlbumItem>
            <AlbumItem AlbumName="Album4_2">2020-4-2 鶯歌山水步道</AlbumItem>
        </AlbumList>
    )
}