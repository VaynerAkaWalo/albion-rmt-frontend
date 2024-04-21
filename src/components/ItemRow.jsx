import {transmutationCost} from "../utils/TransmutationUtil.js";
import {intFormatter} from "./calculator/scripts/utils.js";

function ItemRow({item, itemDetails}) {
    const {name, displayName} = item
    const itemDetail = itemDetails.filter(itemDetail => itemDetail['name'] === name)[0]
    const {resourceOne, resourceTwo} = itemDetail


    const getResourceAmount = (resource) => {
        if (resource === undefined) {
            return 0
        }
        return resource['amount']
    }
    const prices = () => {
        let array = []
        for (let i = 4; i < 9; i++) {
            for (let j = 0; j < 4; j++) {
                array.push(transmutationCost[i - 4][j] * (getResourceAmount(resourceOne) + getResourceAmount(resourceTwo)))
            }
        }
        return array;
    }

    function image() {
        return `https://render.albiononline.com/v1/item/T${4}_${name.toUpperCase()}.png`
    }

    return (
        <div className="itemRow border-b-2 flex flex-row [&>*]:my-3">
            <img src={image()} alt="itemIcon"/>
            {prices().map(price =>
                <div className="flex justify-center items-center rounded-2xl bg-gray-500">{intFormatter(price)}</div>)}
        </div>
    )

    function roll() {
        return Math.floor(Math.random() * 2) % 2 === 0;
    }
}

export default ItemRow;

