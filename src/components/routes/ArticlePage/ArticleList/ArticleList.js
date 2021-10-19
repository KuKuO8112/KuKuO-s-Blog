import React from "react";
import ArticleListItem from "./ArticleListItem";
import { ArticleListUl } from "./ArticleListStyle";
import { ArticleListTitleDiv } from "./ArticleListTitleDiv";

export default function ArticleList(){
    return(
        <ArticleListUl>
            <ArticleListTitleDiv>Article Page</ArticleListTitleDiv>
            <ArticleListItem>ArticleGitPage</ArticleListItem>
        </ArticleListUl>
    )
}