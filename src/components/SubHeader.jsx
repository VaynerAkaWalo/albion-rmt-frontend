
function SubHeader() {
    const items = [];
    for (let i = 4; i < 9; i++) {
        for (let j = 0; j < 5; j++) {
            items.push(<div>{i + "." + j}</div>)
        }
    }

    return (
        <div className="subHeader w-fit bg-stone-800 border-b-2 text-center sticky top-0 flex flex-row">
            <div>Item</div>
            {items}
        </div>
    )
}

export default SubHeader;