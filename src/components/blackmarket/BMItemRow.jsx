import {intFormatter} from "../calculator/scripts/utils.js";

export function BMItemRow({systemName, amount, orderId, unitPrice, tier, enchant, quality, lastUpdate}) {
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
        if (hours >= 3) {
            return "text-red-600"
        }
        else if(hours > 0 || minutes > 30) {
            return "text-yellow-400"
        }
        else {
            return "text-green-600"
        }
    }

    return (
        <div className="w-full px-10 py-2 h-30 flex justify-between border-2 [&>*]: items-center">
            <img src={image()} alt="xd"/>
            <div>amount: {intFormatter(amount)}</div>
            <div className={resolveColor()}>last seen: {prettyTime()}</div>
            <div>price: {intFormatter(unitPrice / 10000)}</div>
            <button className="font-bold border-2 rounded p-6 bg-red-700 border-red-700 text-white" onClick={deleteItem}>Delete Order</button>
        </div>
    )
}

