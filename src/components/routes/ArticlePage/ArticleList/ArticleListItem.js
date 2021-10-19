import React from "react";
import { ArticleLink } from "./ArticleLink";
import { ArticleListItemLi } from "./ArticleListItemStyle";
import { ArticleListTitleDiv } from "./ArticleListTitleDiv";

export default function ArticleListItem({children}){
    return(
        <ArticleListItemLi>
            <ArticleListTitleDiv>{children}</ArticleListTitleDiv>
            <ArticleLink to={"/ArticlePage/" + children}>(閱讀)</ArticleLink>
        </ArticleListItemLi>
    )
}