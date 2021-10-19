import React from "react";
import AlbumItem from "../AlbumItem/AlbumItem";
import { AlbumList } from "./AlbumList";
import { AlbumTitle } from "./Album/AlbumTitleStyle";

export default function AlbumFront(){
    return(
        <AlbumList>
            <AlbumTitle>Album List</AlbumTitle>
            <AlbumItem date={"2020-4-9"}>Album4_9</AlbumItem>
            <AlbumItem date={"2020-4-2"}>Album4_2</AlbumItem>
        </AlbumList>
    )
}