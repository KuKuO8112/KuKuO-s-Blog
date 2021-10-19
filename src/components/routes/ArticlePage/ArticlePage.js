import React from "react";
import ArticleList from "./ArticleList/ArticleList";
import { HashRouter, Route, Switch} from "react-router-dom";
import { ArticleDiv } from "./ArticleDiv";
import ArticleGitPage from "./ArticleList/Article/ArticleGitPage/ArticleGitPage";
import ArticleBooks from "./ArticleList/Article/ArticleBooks/ArticleBooks";

export default function ArticlePage(){
    return(
        <ArticleDiv>
            <HashRouter>
                <Switch>
                    <Route exact path="/ArticlePage" component={ArticleList}/>
                    <Route path="/ArticlePage/ArticleGitPage" component={ArticleGitPage}/>
                    <Route path="/ArticlePage/ArticleBooks" component={ArticleBooks}/>
                </Switch>
            </HashRouter>
        </ArticleDiv>
    )
}