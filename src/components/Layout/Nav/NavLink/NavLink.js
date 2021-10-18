import React from "react";
import { NavLinkStyle } from "./NavLinkStyle";
import { PageLink } from "./PageLink";

export default function NavLink () {
    return(
        <NavLinkStyle>
            <PageLink to="/">首頁</PageLink>
            <PageLink to="/ArticlePage">文章</PageLink>
            <PageLink to="/AlbumPage">相簿</PageLink>
            <PageLink to="/AboutPage">關於</PageLink>
        </NavLinkStyle>
    )
}