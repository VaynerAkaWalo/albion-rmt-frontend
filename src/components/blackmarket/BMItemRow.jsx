import {intFormatter} from "../calculator/scripts/utils.js";

export function BMItemRow({systemName, amount, unitPrice, tier, enchant, quality}) {

    function image() {
        return `https://render.albiononline.com/v1/item/T${tier}_${systemName.toUpperCase()}${enchantPostfix()}.png?quality=${quality}`
    }

    function enchantPostfix() {
        if (enchant === 0) return "";
        return `@${enchant}`
    }

    return (
        <div className="w-full px-10 py-2 h-30 flex justify-between border-2 [&>*]: items-center">
            <img src={image()} alt="xd"/>
            <div>amount: {intFormatter(amount)}</div>
            <div>price: {intFormatter(unitPrice)}</div>
        </div>
    )
}

