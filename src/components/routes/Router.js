import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import TitleItem from "../Layout/Title/TitleItem";
import Nav from "../Layout/Nav/Nav";
import FrontPage from "./FrontPage/FrontPage";
import ArticlePage from "./ArticlePage/ArticlePage";
import AlbumPage from "./AlbumPage/AlbumPage";
import AboutPage from "./AboutPage/AboutPage";
import { BodyStyle } from "./BodyStyle";

export default function Router (){
    return(
        <BodyStyle>
            <HashRouter>
                <TitleItem/>
                <Nav/>
                <Switch>
                    <Route exact path="/" component={FrontPage}/>
                    <Route path="/ArticlePage" component={ArticlePage}/>
                    <Route path="/AlbumPage" component={AlbumPage}/>
                    <Route path="/AboutPage" component={AboutPage} />
                </Switch>
            </HashRouter>
        </BodyStyle>
    )
}