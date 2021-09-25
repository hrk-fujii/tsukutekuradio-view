const ArticleSelector = (props) => {
    let comboItems = [];
    for(let i of props.years) {
        comboItems.push(
            <option key={i.toString()} value={i.toString()} onClick={() => {props.setYear(i)}}>
                {i.toString() + "年"}
            </option>
        );
    }
    
    return (<>
        <select defaultValue={props.years[0].toString()}>
            {comboItems}
        </select>
    </>);
}

export default ArticleSelector;
