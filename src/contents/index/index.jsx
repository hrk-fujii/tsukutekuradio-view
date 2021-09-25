import axios from "axios";
import { useState } from "react";

import envConstants from "../../envConstants";
import ArticleSelector from "./articleSelector";
import ArticleAria from "./articles";


const getArticleIds = (setter) => {
    axios.get(envConstants.apiUrl + "articleids").then((res) => {
        let data = res.data;
        if (data.success === true){
            setter(res.data.articles);
        } else{
            setter({error: true});
        }
    }, (err) => {
        setter({error: true});
    })
}

const makeArticleYears = (articleIds, setter) => {
    let articleYears = {};
    for(let i of articleIds) {
        if ("released_at" in i) {
            i.released_at = new Date(i.released_at);
            let year = i.released_at.getFullYear();
            if (!(year in articleYears)) {
                articleYears[year] = [];
            }
            articleYears[year].push(i);
        }
    }
    setter(articleYears);
}

const PageTop = () => {
    const [articleIds, setArticleIds] = useState(null);
    const [articleYears, setArticleYears] = useState({});
    const [viewYear, setViewYear] = useState((new Date()).getFullYear());

    if (articleIds === null) {
        getArticleIds(setArticleIds);
        return (<>)
            <p>
                読み込み中...
            </p>
        </>);
    }

    if ((articleIds != null) && (Object.keys(articleYears).length === 0)) {
        makeArticleYears(articleIds, setArticleYears);
    }

    if (articleIds.error) {
        return (<>
            <p>
                記事取得に失敗しました。
            </p>
        </>);
    }
    
    let view = {};
    view.selector = <ArticleSelector years={articleYears.keys} selected={viewYear} setYear={setViewYear} />;
    if (viewYear in articleYears) {
        view.articles = <ArticleAria articles={articleYears[viewYear]} />;
    } else{
        view.articles = <ArticleAria articles={{}} />;
    }
    return (<>
        {view.selector}
        {view.articles}
    </>);
}

export default PageTop;
