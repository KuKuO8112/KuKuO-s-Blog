import React from "react";
import { HashRouter, Route, Switch} from "react-router-dom";
import { AboutPageDiv } from "./AboutPageDiv";
import AboutLayout from "./AboutLayout/AboutLayout";

export default function AboutPage(){
    return(
        <AboutPageDiv>
            <HashRouter>
                <Switch>
                    <Route exact path="/AboutPage" component={AboutLayout}/>
                </Switch>
            </HashRouter>
        </AboutPageDiv>
    )
}