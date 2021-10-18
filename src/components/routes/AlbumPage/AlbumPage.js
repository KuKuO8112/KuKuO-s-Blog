import React from "react";
import { HashRouter, Route, Switch} from "react-router-dom";
import { Album } from "./Album/Album";
import Album4_2 from "./Album/Album4_2";
import Album4_9 from "./Album/Album4_9";
import AlbumFront from "./Album/AlbumFront";

export default function AlbumPage(){
    return(
        <Album>
            <HashRouter>
                <Switch>
                    <Route exact path="/AlbumPage" component={AlbumFront}/>
                    <Route path="/AlbumPage/Album4_2" component={Album4_2} />
                    <Route path="/AlbumPage/Album4_9" component={Album4_9} />
                </Switch>
            </HashRouter>
        </Album>
    )
}