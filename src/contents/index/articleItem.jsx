import axios from "axios";
import { useState } from "react";
import { Row, Col, Accordion } from "react-bootstrap";

import envConstants from "../../envConstants";


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
                <Col xs={12} md={8}>
                    <p>
                        {props.title}
                    </p>
                </Col>
                <Col xs={12} md={4} className="text-center">
                    <p>
                        {props.released_at.getFullYear().toString() + "/" + (props.released_at.getMonth() + 1).toString() + "/" + props.released_at.getDate().toString()}
                    </p>
                </Col>
            </Accordion.Header>
            <Accordion.Body><Row>
                <Col xs={12} md={4} className="text-center">
                    <iframe
                        width={256}
                        height={144}
                        src={"https://www.youtube.com/embed/" + view.youtube_code}
                        title="YouTube video player"
                    ></iframe>
                </Col>
                <Col xs={12} md={8}>
                    {view.article}
                </Col>
            </Row></Accordion.Body>
        </Accordion.Item>
    </>);
}

export default ArticleItem;
