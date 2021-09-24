import { Accordion } from "react-bootstrap";

const ArticleAria = (props) => {
    let articleItemList = [];
    for(let i in props.articles) {
        articleItemList.push(
            <ArticleItem
                id={i.id}
                title={i.title}
                article={i.article}
            />
        );
    }
    return (
        <Accordion>
            {articleItemList}
        </Accordion>
    );
}

const ArticleItem = (props) => {
    return (
        <Accordion.Item eventKey={props.id}>
            <Accordion.Header>
                {props.title}
            </Accordion.Header>
            <Accordion.Body>
                {props.article}
            </Accordion.Body>
        </Accordion.Item>
    );
}

export default ArticleAria;
