import React from "react";
import img_1 from "../../../../IMG/2020-4-9/4_9_1.jpg";
import img_2 from "../../../../IMG/2020-4-9/4_9_4.jpg";
import img_3 from "../../../../IMG/2020-4-9/4_9_5.jpg";
import { Photo } from "./PhotoLink";
import { PhotoList } from "./PhotoList";
import { AlbumLink } from "./AlbumLink";
import { AlbumTitle } from "./AlbumTitleStyle";
import { AlbumList } from "./AlbumList";
import { PhotoItem } from "./PhotoItem";

export default function Album4_9(){
    return(
        <AlbumList>
            <AlbumTitle>Album4_9</AlbumTitle>
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
                </PhotoList>
            <AlbumLink to="/AlbumPage">back</AlbumLink>
        </AlbumList>
    )
}