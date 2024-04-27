import {intFormatter} from "../calculator/scripts/utils.js";
import {transmutationCost} from "../../utils/TransmutationUtil.js"

export function BMItemRow({systemName, amount, orderId, unitPrice, tier, enchant, quality, lastUpdate, itemInfo}) {
    const {resourceOne, resourceTwo} = itemInfo.find(item => item['name'] === systemName)
    let duration = Date.now() - lastUpdate

    let minutes = Math.round(duration / 1000 / 60) % 60
    let hours = Math.round(duration / 1000 / 3600) % 24
    let days = Math.round(duration / 1000 / 3600 / 24)

    function image() {
        return `https://render.albiononline.com/v1/item/T${tier}_${systemName.toUpperCase()}${enchantPostfix()}.png?quality=${quality}`
    }

    function enchantPostfix() {
        if (enchant === 0) return "";
        return `@${enchant}`
    }

    function prettyTime() {
        if (days > 0) {
            return `${days}d ${hours}h`
        }
        else if (hours > 0) {
            return `${hours}h ${minutes}min`
        }
        else {
            return `${minutes}min`
        }
    }

    function deleteItem(e) {
        fetch(`https://blamedevs.com:8443/albion-rmt-backend/api/v1/marketdata/${orderId}`, {
            method: "DELETE"
        })
    }

    function resolveColor() {
        if (days > 0 || hours >= 3) {
            return "text-red-600"
        }
        else if(hours > 0 || minutes > 30) {
            return "text-yellow-400"
        }
        else {
            return "text-green-600"
        }
    }

    function getResourceAmount(res) {
        if (res === undefined) {
            return 0;
        }
        return parseInt(res['amount'])
    }

    function getTransmutationCost() {
        if (tier < 4) {
            return "Unavailable"
        }
        return intFormatter(transmutationCost[tier - 4][enchant] * (getResourceAmount(resourceOne) + getResourceAmount(resourceTwo)) * (1.0 - 0.4326) * 0.7)

    }

    return (
        <div className="w-full px-10 py-2 h-30 flex justify-between border-2 [&>*]:flex-1 items-center text-center">
            <div className="flex justify-center">
                <img className="h-30" src={image()} alt="xd"/>
            </div>
            <div>{intFormatter(amount)}</div>
            <div>{intFormatter(unitPrice / 10000)}</div>
            <div>{getTransmutationCost()}</div>
            <div className={resolveColor()}>{prettyTime()}</div>
            <button className="font-bold border-2 py-3 rounded bg-red-700 border-red-700 text-white" onClick={deleteItem}>Delete Order</button>
        </div>
    )
}

