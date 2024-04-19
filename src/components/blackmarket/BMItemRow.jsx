import {intFormatter} from "../calculator/scripts/utils.js";

export function BMItemRow({systemName, amount, unitPrice, tier, enchant, quality, lastUpdate}) {

    function image() {
        return `https://render.albiononline.com/v1/item/T${tier}_${systemName.toUpperCase()}${enchantPostfix()}.png?quality=${quality}`
    }

    function enchantPostfix() {
        if (enchant === 0) return "";
        return `@${enchant}`
    }

    function convertToHHMMSS( then ) {
        let duration = Date.now() - then

        let minutes = Math.round(duration / 1000 / 60) % 60
        let hours = Math.round(duration / 1000 / 3600) % 24
        let days = Math.round(duration / 1000 / 3600 / 24)

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;

        return days + ":" + hours + ":" + minutes;
    }

    function prettyTime() {
        let duration = Date.now() - lastUpdate

        let minutes = Math.round(duration / 1000 / 60) % 60
        let hours = Math.round(duration / 1000 / 3600) % 24
        let days = Math.round(duration / 1000 / 3600 / 24)

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

    return (
        <div className="w-full px-10 py-2 h-30 flex justify-between border-2 [&>*]: items-center">
            <img src={image()} alt="xd"/>
            <div>amount: {intFormatter(amount)}</div>
            <div>last seen: {prettyTime()}</div>
            <div>price: {intFormatter(unitPrice / 10000)}</div>
        </div>
    )
}

