import React from "react";
import ArticleListItem from "./ArticleListItem";
import { ArticleListUl } from "./ArticleListStyle";
import { ArticlePageTitle } from "./ArticlePageTitle";

export default function ArticleList(){
    return(
        <ArticleListUl>
            <ArticlePageTitle>Article Page</ArticlePageTitle>
            <ArticleListItem pageName="ArticleBooks">學習時閱讀的書籍</ArticleListItem>
            <ArticleListItem pageName="ArticleGitPage">將網頁發布至Github Pages</ArticleListItem>
        </ArticleListUl>
    )
}