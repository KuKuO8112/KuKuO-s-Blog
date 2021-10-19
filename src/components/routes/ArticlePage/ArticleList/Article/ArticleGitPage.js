import React from "react";
import { ArticleLayout } from "./ArticleLayout";
import { BackLink } from "./BackLink";
import { ContentTitle } from "./ContentTitle";
import { ArticleDate } from "./ArticleDate";
import { ContentDiv } from "./ContentDiv";

export default function ArticleGitPage(){
    return(
        <ArticleLayout>
            <ContentTitle>將網頁發布上 Github Pages</ContentTitle>
            <ArticleDate>2021-10-19</ArticleDate>
            <br/>
            <br/>
            <ContentDiv>首次將檔案發布上Github</ContentDiv>
            <br/>
            <ContentDiv>1.使用命令提示字元或Git Bash等終端機</ContentDiv>
            <br/>
            <ContentDiv>2.使用指令cd至目標資料夾("cd D:"和"cd XXX"等等)</ContentDiv>
            <br/>
            <ContentDiv>3.使用指令"git init"使git開始監控此資料夾</ContentDiv>
            <br/>
            <ContentDiv>4.使用指令"git add ."使git將所有檔案或是變更過的檔案加入暫存區(staging area)</ContentDiv>
            <br/>
            <ContentDiv>5.使用指令"git commit -m "版本資訊" "將暫存區的檔案移至儲存庫(repository)</ContentDiv>
            <br/>
            <ContentDiv>6.使用指令"git remote add "short name"(後面url的代稱) "repo url" "新增遠端repository URL</ContentDiv>
            <br/>
            <ContentDiv>7.使用指令"git push -u "short name" "分支名稱" "將儲存庫的檔案推送至"short name"</ContentDiv>
            <br/>
            <ContentDiv>8.接著在package.json中設定Github Page的網址,新增"homepage":"https://"github帳號".github.io/"專案名稱" "</ContentDiv>
            <br/>
            <ContentDiv>9.透過指令"npm install --save gh-pages"安裝部署用的工具"gh-pages"</ContentDiv>
            <br/>
            <ContentDiv>10.接著再到"package.json"檔案中的"scripts"欄位添加以下指令：</ContentDiv>
            <ContentDiv style={{paddingLeft: "30px"}}>"predeploy": "npm run build"</ContentDiv>
            <ContentDiv style={{paddingLeft: "30px"}}>"deploy": "gh-pages -d build"</ContentDiv>
            <br/>
            <ContentDiv>11.接著在終端機使用"npm run deploy"指令</ContentDiv>
            <br/>
            <ContentDiv>12.部屬成功之後,專案會多一個名為"gh-pages"的分支</ContentDiv>
            <br/>
            <ContentDiv>13.至Github設定頁下面的"GitHub Pages",確認"GitHub Pages"已被開啟</ContentDiv>
            <br/>
            <ContentDiv>14.在"Source"的地方選擇來源是"gh-pages branch"這個分支</ContentDiv>
            <br/>
            <ContentDiv>15.點擊上方"Github Pages"提供的網址,確認是否成功</ContentDiv>
            <br/>
            <ContentDiv></ContentDiv>
            <br/>
            <BackLink to="/ArticlePage">back to article page</BackLink>
        </ArticleLayout>
    )
}