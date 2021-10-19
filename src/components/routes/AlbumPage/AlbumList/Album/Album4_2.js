import React from "react";
import img_1 from "../../../../../IMG/2020-4-2/4_2_1.jpg";
import img_2 from "../../../../../IMG/2020-4-2/4_2_2.jpg";
import img_3 from "../../../../../IMG/2020-4-2/4_2_3.jpg";
import img_4 from "../../../../../IMG/2020-4-2/4_2_4.jpg";
import img_5 from "../../../../../IMG/2020-4-2/4_2_5.jpg";
import img_6 from "../../../../../IMG/2020-4-2/4_2_6.jpg";
import img_7 from "../../../../../IMG/2020-4-2/4_2_7.jpg";
import img_8 from "../../../../../IMG/2020-4-2/4_2_8.jpg";
import img_9 from "../../../../../IMG/2020-4-2/4_2_9.jpg";
import { Photo } from "./PhotoLink";
import { PhotoList } from "./PhotoList";
import { AlbumLink } from "../AlbumLink";
import { AlbumTitle } from "./AlbumTitleStyle";
import { AlbumList } from "../AlbumList";
import { PhotoItem } from "./PhotoItem";

export default function Album4_2(){
    return(
        <AlbumList>
            <AlbumTitle>Album4_2</AlbumTitle>
            <PhotoList>
                <PhotoItem>
                    <a href={img_1} ><Photo src={img_1}/></a>
                </PhotoItem>
                <PhotoItem>
                    <a href={img_2} ><Photo src={img_2}/></a>
                </PhotoItem>
                <PhotoItem>
                    <a href={img_3} ><Photo src={img_3}/></a>
                </PhotoItem>
                <PhotoItem>
                    <a href={img_4} ><Photo src={img_4}/></a>
                </PhotoItem>
                <PhotoItem>
                    <a href={img_5} ><Photo src={img_5}/></a>
                </PhotoItem>
                <PhotoItem>
                    <a href={img_6} ><Photo src={img_6}/></a>
                </PhotoItem>
                <PhotoItem>
                    <a href={img_7} ><Photo src={img_7}/></a>
                </PhotoItem>
                <PhotoItem>
                    <a href={img_8} ><Photo src={img_8}/></a>
                </PhotoItem>
                <PhotoItem>
                    <a href={img_9} ><Photo src={img_9}/></a>
                </PhotoItem>
            </PhotoList>
            <AlbumLink to="/AlbumPage">back to album page</AlbumLink>
        </AlbumList>
    )
}