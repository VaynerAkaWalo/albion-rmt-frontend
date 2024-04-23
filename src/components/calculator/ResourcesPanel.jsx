import React, {useContext, useEffect} from "react";
import {GlobalContext} from "./context/CalculatorContext.jsx";
import trash from "/T1_TRASH.png";
import {intFormatter} from "./scripts/utils.js";
import {transmutationCost} from "../../utils/TransmutationUtil.js";

const TIER_OFFSET = 4

export function ResourcesPanel() {
    const {selectedItem, isInitialized, detailedItemInfo, setDetailedItemInfo, settings} = useContext(GlobalContext)
    const {resourceOnePrice, resourceTwoPrice, resourceOneAmount, resourceTwoAmount, resourceTwo} = detailedItemInfo
    const {amountMultiplier} = settings
    const {tier, enchant} = selectedItem

    useEffect(() => {
        if (!tier) return
        setDetailedItemInfo(prev => ({...prev, resourceOnePrice: transmutationCost[tier - 4][enchant] / 2}))
        setDetailedItemInfo(prev => ({...prev, resourceTwoPrice: transmutationCost[tier - 4][enchant] / 2}))
    }, [selectedItem]);

    function image(resource) {
        if (!isInitialized) return trash;
        return `https://render.albiononline.com/v1/item/T${selectedItem['tier']}_${resource.toUpperCase()}${enchantPostfix()}.png`
    }

    function enchantPostfix() {
        if (!isInitialized || selectedItem['enchant'] === 0 || resourceTwo === "TRASH") return "";
        return `_LEVEL${selectedItem['enchant']}`
    }

    function changeResourceOnePrice(e) {
        const value = e.target.value.replace(/ /g, '');

        if (!isNaN(value)) {
            setDetailedItemInfo(prev => ({...prev, resourceOnePrice: value}))
        }
    }

    function changeResourceTwoPrice(e) {
        const value = e.target.value.replace(/\s/g, '');

        if (!isNaN(value)) {
            setDetailedItemInfo(prev => ({...prev, resourceTwoPrice: value}))
        }
    }

    return (
        <div className="w-full border-2 grid grid-cols-5 grid-rows-5">
            <>
                <div className="col-span-2 row-span-3 flex justify-center items-center">
                    <img src={image(detailedItemInfo['resourceOne'])} alt={detailedItemInfo['resourceOne']}/>
                </div>
                <div className="row-span-3 flex flex-col justify-center items-center">
                    <span>Ratio</span>
                    <span>{`${detailedItemInfo['resourceOneAmount']}:${detailedItemInfo['resourceTwoAmount']}`}</span>
                </div>
                <div className="col-span-2 row-span-3 flex justify-center items-center">
                    <img src={image(detailedItemInfo['resourceTwo'])} alt={detailedItemInfo['resourceTwo']}/>
                </div>
            </>
            <>
                <div className="col-span-2 text-center my-auto">{resourceOneAmount * amountMultiplier}</div>
                <div className="text-center my-auto">Quantity</div>
                <div className="col-span-2 text-center my-auto">{resourceTwoAmount * amountMultiplier}</div>
            </>
            <>
                <input className="col-span-2 my-2 mx-5 text-right" type="text" value={intFormatter(resourceOnePrice)} onChange={changeResourceOnePrice}/>
                <span className="text-center my-auto">Price</span>
                <input className="col-span-2 col-start-4 my-2 mx-5 text-right" type="text" value={intFormatter(resourceTwoPrice)} onChange={changeResourceTwoPrice}/>
            </>
        </div>
    )
}