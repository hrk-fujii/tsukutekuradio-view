import axios from "axios";
import { useState } from "react";

import ArticleAria from "./articles";


const PageTop = () => {
    const [articleIds, setArticleIds] = useState(null);
    const [articleYears, setArticleYears] = useState({});
    const [viewYear, setViewYear] = useState((new Date()).getFullYear());

    if (articleIds === null) {
        getArticleIds();
    }
    if ((articleIds !== null) && (articleYears === {})) {
        makeArticleYears();
    }

    if (articleIds.error) {
        return (
            <p>
                記事取得に失敗しました。
            </p>
        );
    }
    
    let view = [];
    view.push(<ArticleSelector years={articleYears.keys()} selected={viewYear} />);
    if (viewYear in articleYears) {
        view.push(<ArticleAria articles={articleYears[viewYear]} />);
    } else{
        view.push(<ArticleAria articles={{}} />);
    }
    return (
        {view}
    );
}

export default PageTop;
