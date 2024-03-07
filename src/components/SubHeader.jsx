
function SubHeader(prop) {
    const items = [];
    let tier = 4;
    for (let i = 0; i < prop.num; i++) {
        let mod = i % 4;
        if (mod + 1 === 0) {
            tier++;
        }
        items.push(<div>{tier + "." + mod}</div>)
    }

    return (
        <div className="subHeader w-fit bg-stone-800 border-b-2 text-center sticky top-0 flex flex-row">
            <div>Item</div>
            {items}
        </div>
    )
}

export default SubHeader;