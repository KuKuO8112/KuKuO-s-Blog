import React from "react";
import { HashRouter, Route, Switch} from "react-router-dom";
import { AlbumDiv } from "./AlbumList/AlbumDiv";
import Album4_2 from "./AlbumList/Album/Album4_2";
import Album4_9 from "./AlbumList/Album/Album4_9";
import AlbumFront from "./AlbumList/AlbumFront";

export default function AlbumPage(){
    return(
        <AlbumDiv>
            <HashRouter>
                <Switch>
                    <Route exact path="/AlbumPage" component={AlbumFront}/>
                    <Route path="/AlbumPage/Album4_2" component={Album4_2} />
                    <Route path="/AlbumPage/Album4_9" component={Album4_9} />
                </Switch>
            </HashRouter>
        </AlbumDiv>
    )
}