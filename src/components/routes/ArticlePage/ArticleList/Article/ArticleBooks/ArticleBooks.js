import React from "react";
import { ArticleDate } from "../ArticleDate";
import { ArticleLayout } from "../ArticleLayout";
import { BackLink } from "../BackLink";
import { ContentP } from "../ContentP";
import { ContentTitle } from "../ContentTitle";

export default function ArticleBooks(){
    return(
        <ArticleLayout>
            <ContentTitle>學習時閱讀的書籍</ContentTitle>
            <ArticleDate>2021-10-19</ArticleDate>
            <ContentP>Git相關：</ContentP>
            <ContentP style={{paddingLeft: "30px"}}>"為你自己學Git" 五倍紅寶石‧高見龍 著</ContentP>
            <ContentP>HTML及CSS相關：</ContentP>
            <ContentP style={{paddingLeft: "30px"}}>"跨平台網頁設計-王者歸來" 洪錦魁 著</ContentP>
            <ContentP style={{paddingLeft: "30px"}}>"HTML5 CSS3 最強圖解實戰講座" 草野あけみ 著/林子君‧陳禹豪 譯/施威銘研究室 監修</ContentP>
            <ContentP>React相關：</ContentP>
            <ContentP style={{paddingLeft: "30px"}}>"React思考模式-從hook入門到開發實戰" 張家銨 著</ContentP>
            <ContentP>當然，還有很多資訊是從GOOGLE大神那邊找到的。</ContentP>
            <br/>
            <BackLink to="/ArticlePage">back to article page</BackLink>
        </ArticleLayout>
    )
}