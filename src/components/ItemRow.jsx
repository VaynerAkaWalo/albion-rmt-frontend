import {transmutationCost} from "../utils/TransmutationUtil.js";
import {intFormatter} from "./calculator/scripts/utils.js";

function ItemRow({item, itemDetails, marketData}) {
    const {name, displayName} = item
    const itemDetail = itemDetails.filter(itemDetail => itemDetail['name'] === name)[0]
    const offers = marketData.filter(offer => offer['name'] === name)
        .filter(offer => offer['quality'] !== 5 && offer['quality'] !== 4)
    const {resourceOne, resourceTwo} = itemDetail

    const getResourceAmount = (resource) => {
        if (resource === undefined) {
            return 0
        }
        return resource['amount']
    }

    function tierIdentifier() {
        let array = []
        for (let i = 4; i < 9; i++) {
            for (let j = 0; j < 5; j++) {
                array.push({tier: i, enchant: j})
            }
        }
        return array
    }

    function transmutationPrice(tier, enchant) {
        return transmutationCost[tier - 4][enchant] * (getResourceAmount(resourceOne) + getResourceAmount(resourceTwo)) / 2
    }

    function image() {
        return `https://render.albiononline.com/v1/item/T${4}_${name.toUpperCase()}.png`
    }

    function priceWindow(transmutationPrice, bmPrice) {
        const diff = bmPrice - transmutationPrice
        transmutationPrice = intFormatter(transmutationPrice)
        let bgColor
        if (bmPrice === 0) {
            bmPrice = ""
            bgColor = "bg-gray-500"
        }
        else {
            bmPrice = intFormatter(bmPrice)
            bgColor = diff >= 0 ? "bg-green-700" : "bg-red-700"
        }

        return (
            <div className={`flex justify-center flex-col items-center rounded-2xl ${bgColor}`}>
                <div className={bgColor}>{transmutationPrice}</div>
                <div className={bgColor}>{bmPrice}</div>
            </div>
        )
    }

    function getBMPrice(tier, enchant) {
        const offer = offers.find(offer => offer['tier'] === tier && offer['enchant'] === enchant)
        if (offer === undefined) {
            return 0;
        }

        return offer['unitPrice'] / 10000
    }

    return (
        <div className="itemRow border-b-2 flex flex-row [&>*]:my-3">
        <img src={image()} alt="itemIcon"/>
            {tierIdentifier().map(identifier => priceWindow(
                transmutationPrice(identifier['tier'], identifier['enchant']),
                getBMPrice(identifier['tier'], identifier['enchant'])))}
        </div>
    )

}

export default ItemRow;

