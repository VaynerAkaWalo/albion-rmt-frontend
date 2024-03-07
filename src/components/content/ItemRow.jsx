
function ItemRow(props) {
    const prices = [];

    for (let i = 0; i < 15; i++) {
        prices.push(itemPrice())
    }

    return (
        <div className="itemRow border-b-2 flex flex-row [&>*]:my-3">
            <img src="/T1_TRASH.png" alt="itemIcon"/>
            {prices}
        </div>
    )

    

    function itemPrice() {
        return (
            <div className="flex justify-center items-center border-2 rounded-2xl">{price()}</div>
        )
    }

    function price() {
        return Math.floor(Math.random() * 100);
    }
}

export default ItemRow;

