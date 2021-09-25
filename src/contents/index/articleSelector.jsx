const ArticleSelector = (props) => {
    let comboItems = [];
    for(let i in props.years) {
        if (i === props.selected) {
            comboItems.push(
                <option selected key={i.toString()} onClick={props.setYear(i)}>
                    {i.toString() + "年"}
                </option>
            );
        } else{
            comboItems.push(
                <option key={i.toString()} onClick={props.setYear(i)}>
                    {i.toString() + "年"}
                </option>
            );
        }
    }
    
    return (<>
        <select>
            {comboItems}
        </select>
    </>);
}

export default ArticleSelector;
