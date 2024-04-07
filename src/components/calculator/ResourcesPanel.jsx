import React, {useContext} from "react";
import {SettingsContext} from "./context/SettingsContext.jsx";
import {GlobalContext} from "./context/CalculatorContext.jsx";
import trash from "/T1_TRASH.png";

export function ResourcesPanel() {
    const {selectedItem, isInitialized, detailedItemInfo, setDetailedItemInfo} = useContext(GlobalContext)
    const {amount} = React.useContext(SettingsContext)
    const {resourceOnePrice, resourceTwoPrice} = detailedItemInfo

    function image(resource) {
        if (!isInitialized) return trash;
        return `https://render.albiononline.com/v1/item/T${selectedItem['tier']}_${resource.toUpperCase()}${enchantPostfix()}.png`
    }

    function enchantPostfix() {
        if (!isInitialized || selectedItem['enchant'] === 0) return "";
        return `_LEVEL${selectedItem['enchant']}`
    }

    function changeResourceOnePrice(e) {
        setDetailedItemInfo(prev => ({...prev, resourceOnePrice: e.target.value}))
    }

    function changeResourceTwoPrice(e) {
        setDetailedItemInfo(prev => ({...prev, resourceTwoPrice: e.target.value}))
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
                <div className="col-span-2 text-center my-auto">{detailedItemInfo['resourceOneAmount'] * amount}</div>
                <div className="text-center my-auto">Quantity</div>
                <div className="col-span-2 text-center my-auto">{detailedItemInfo['resourceTwoAmount'] * amount}</div>
            </>
            <>
                <input className="col-span-2 my-2 mx-5 text-right" type="text" value={resourceOnePrice} onChange={changeResourceOnePrice}/>
                <span className="text-center my-auto">Price</span>
                <input className="col-span-2 col-start-4 my-2 mx-5 text-right" type="text" value={resourceTwoPrice} onChange={changeResourceTwoPrice}/>
            </>
        </div>
    )
}