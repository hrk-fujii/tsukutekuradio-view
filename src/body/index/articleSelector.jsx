const ArticleSelector = (props) => {
    let comboItems = [];
    for(let i in props.years) {
        if (i === selected) {
            comboItems.push(
                <option selected value={i.toString()} onClick={props.setViewYear(i)}>
                    {i.toString() + "年"}
                </option>
            );
        } else{
            comboItems.push(
                <option value={i.toString()} onClick={props.setViewYear(i)}>
                    {i.toString() + "年"}
                </option>
            );
        }
    }
    
    return (
        <select>
            {comboItems}
        </select>
    );
}
