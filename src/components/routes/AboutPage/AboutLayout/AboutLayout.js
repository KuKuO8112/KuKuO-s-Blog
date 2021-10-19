import React from "react";
import { AboutContent } from "./AboutContent";
import { AboutFooter } from "./AboutFooter";
import { AboutPageTitle } from "./AboutPageTitle";
import { ContentLayout } from "./ContentLayout";

export default function AboutLayout(){
    return(
        <ContentLayout>
            <AboutPageTitle>關於</AboutPageTitle>
            <AboutContent>&emsp;&emsp;這個個人網頁，主要是為了作為面試作品而生。雖然這之中或許還有很多不足的地方,比如檔案結構的混亂、各個component命名的方式不統一、設計上的過於簡陋及美感上的不足等等，不過也確實讓我練習了REACT的基礎。</AboutContent>
            <AboutContent>&emsp;&emsp;未來不論面試之後是甚麼情況，這個個人網站應該都會繼續更新下去，不論是功能上的增加，或是外觀上的改變。也希望可以好好地把各種技術統整在這裡，作為複習及自我檢視相信也是非常有幫助的。</AboutContent>
            <AboutFooter>2021-10-19</AboutFooter>
        </ContentLayout>
    )
}