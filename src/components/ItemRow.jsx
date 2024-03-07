
function ItemRow(props) {
    const prices = [];

    for (let i = 0; i < props.num; i++) {
        prices.push(itemPrice(i + 1))
    }

    return (
        <div className="itemRow border-b-2 flex flex-row [&>*]:my-3">
            <img src="/T1_TRASH.png" alt="itemIcon"/>
            {prices}
        </div>
    )

    

    function itemPrice(num) {
        return (
            <div className={`flex justify-center items-center rounded-2xl ${roll() ? "bg-red-900" : "bg-green-800"}`}>{price(num)}</div>
        )
    }

    function price(num) {
        return Math.floor(Math.random() * 100 * Math.pow(num, 4));
    }

    function roll() {
        return Math.floor(Math.random() * 2) % 2 === 0;
    }
}

export default ItemRow;

