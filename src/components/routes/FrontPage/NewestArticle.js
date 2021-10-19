import React from "react";
import ArticleListItem from "../ArticlePage/ArticleList/ArticleListItem";
import { ArticleListUl } from "../ArticlePage/ArticleList/ArticleListStyle";
import { NewestTitleDiv } from "./NewestTitleDiv";

export default function NewestArticle(){
    return(
        <ArticleListUl>
            <NewestTitleDiv>Newest Article</NewestTitleDiv>
            <ArticleListItem>ArticleGitPage</ArticleListItem>
        </ArticleListUl>
    )
}