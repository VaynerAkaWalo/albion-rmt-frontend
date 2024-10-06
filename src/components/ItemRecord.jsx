import {transmutationCost} from "../utils/TransmutationUtil.js";
import {intFormatter} from "./calculator/scripts/utils.js";
import {useEffect, useState} from "react";

const TIER_OFFSET = 4

export function ItemRecord({tier, enchant, resourceAmount, bmOffers}) {
    const [bmPrice, setBmPrice] = useState(0)
    const [bgColor, setBgColor] = useState("bg-gray-500")

    useEffect(() => {
        findPrice()
        resolveBgColor()
    }, [bmOffers]);
    function findPrice() {
        const offer = bmOffers.find(offer => offer['tier'] === tier && offer['enchant'] === enchant)
        if (offer === undefined) {
            return setBmPrice(0)
        }

        setBmPrice(offer['unitPrice'])
    }

    function transmutationPrice() {
        if (tier < 4) return 0
        return transmutationCost[tier - TIER_OFFSET][enchant] * resourceAmount * (1.0 - 0.4326) * 0.7
    }


    function resolveBgColor() {
        if (bmPrice === 0) {
            setBgColor("bg-gray-500")
            return
        }
        if (bmPrice > transmutationPrice()) {
            setBgColor("bg-green-700")
        }
        else {
            setBgColor("bg-red-700")
        }
    }

    return (
        <div className={`flex justify-center flex-col items-center rounded-2xl ${bgColor}`}>
            <div className={bgColor}>{intFormatter(bmPrice)}</div>
            <div className={bgColor}>{intFormatter(transmutationPrice())}</div>
        </div>
    )
}
