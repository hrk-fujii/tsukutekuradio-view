import { useState } from "react";
import axios from "axios";
import { Row, Col, Accordion } from "react-bootstrap";

import envConstants from "../../envConstants";
import ArticleItem from "./articleItem";


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

export default ArticleAria;
