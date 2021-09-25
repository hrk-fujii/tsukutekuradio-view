import { useState } from "react";
import axios from "axios";
import { Accordion } from "react-bootstrap";

import envConstants from "../../envConstants";


const ArticleAria = (props) => {
    let articleItemList = [];
    for(let i of props.articles) {
        articleItemList.push(
            <ArticleItem
                key={i.id.toString() + "article"}
                id={i.id}
                title={i.title}
                released_at={i.released_at}
            />
        );
    }
    
    return (
        <Accordion>
            {articleItemList}
        </Accordion>
    );
}


const getArticle = (articleId, setter) => {
    axios.get(envConstants.apiUrl + "article?id=" + articleId.toString()).then((res) => {
        if (res.data.success) {
            setter(res.data.article);
        } else {
            setter({youtube_code: "", article: "記事の取得に失敗しました。"});
        }
    }, (err) => {
        setter({youtube_code: "", article: "記事の取得に失敗しました。"});
    })
}

const ArticleItem = (props) => {
    const [content, setContent] = useState(null);
    if (content === null) {
        getArticle(props.id, setContent);
    }

    let view = {};
    if (content === null) {
        view = {youtube_code: "", article: ""};
    } else {
        view = content;
    }
    
    return (<>
        <Accordion.Item eventKey={props.id.toString()}>
            <Accordion.Header>
                {props.title}
            </Accordion.Header>
            <Accordion.Body>
                {view.article}
            </Accordion.Body>
        </Accordion.Item>
    </>);
}

export default ArticleAria;
