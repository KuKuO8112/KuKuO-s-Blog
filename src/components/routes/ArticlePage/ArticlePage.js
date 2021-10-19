import React from "react";
import ArticleList from "./ArticleList/ArticleList";
import { HashRouter, Route, Switch} from "react-router-dom";
import { ArticleDiv } from "./ArticleDiv";
import ArticleGitPage from "./ArticleList/Article/ArticleGitPage";

export default function ArticlePage(){
    return(
        <ArticleDiv>
            <HashRouter>
                <Switch>
                    <Route exact path="/ArticlePage" component={ArticleList}/>
                    <Route path="/ArticlePage/ArticleGitPage" component={ArticleGitPage}/>
                </Switch>
            </HashRouter>
        </ArticleDiv>
    )
}