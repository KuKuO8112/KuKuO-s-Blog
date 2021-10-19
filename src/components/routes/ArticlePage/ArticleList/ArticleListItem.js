import React from "react";
import { ArticleLink } from "./ArticleLink";
import { ArticleListItemLi } from "./ArticleListItemStyle";
import { ArticleListTitleDiv } from "./ArticleListTitleDiv";

export default function ArticleListItem({children, pageName}){
    return(
        <ArticleListItemLi>
            <ArticleListTitleDiv>{children}</ArticleListTitleDiv>
            <ArticleLink to={"/ArticlePage/" + pageName}>(閱讀)</ArticleLink>
        </ArticleListItemLi>
    )
}