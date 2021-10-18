import React from "react";
import AlbumItem from "../AlbumItem/AlbumItem";
import { AlbumList } from "./AlbumList";
import { AlbumTitle } from "./AlbumTitleStyle";

export default function AlbumFront(){
    return(
        <AlbumList>
            <AlbumTitle>Album</AlbumTitle>
            <AlbumItem>Album4_2</AlbumItem>
            <AlbumItem>Album4_9</AlbumItem>
        </AlbumList>
    )
}