import {ResourceContext, SetResourceContext} from "./context/ResourceProvider.jsx";
import React, {useContext} from "react";
import {SettingsContext} from "./context/SettingsContext.jsx";
import {GlobalContext} from "./context/CalculatorContext.jsx";
import trash from "/T1_TRASH.png";

export function ResourcesPanel() {
    const {selectedItem, isInitialized} = useContext(GlobalContext)
    const {resource1, resource2, resource1Ratio, resource2Ratio, resource1Price, resource2Price} = React.useContext(ResourceContext)
    const {changeRes1Price, changeRes2Price} = useContext(SetResourceContext)
    const {amount} = React.useContext(SettingsContext)

    function image(item) {
        if (!isInitialized) return trash;
        return `https://render.albiononline.com/v1/item/T${selectedItem['tier']}_${item.toUpperCase()}${enchantPostfix()}.png`
    }

    function enchantPostfix() {
        if (!isInitialized || selectedItem['enchant'] === 0) return "";
        return `_LEVEL${selectedItem['enchant']}`
    }

    return (
        <div className="w-full border-2 grid grid-cols-5 grid-rows-5">
            <>
                <div className="col-span-2 row-span-3 flex justify-center items-center">
                    <img className="w-4/5" src={image(resource1)} alt={resource1}/>
                </div>
                <div className="row-span-3 flex flex-col justify-center items-center">
                    <span>Ratio</span>
                    <span>{`${resource1Ratio}:${resource2Ratio}`}</span>
                </div>
                <div className="col-span-2 row-span-3 flex justify-center items-center">
                    <img className="w-4/5" src={image(resource2)} alt={resource2}/>
                </div>
            </>
            <>
                <div className="col-span-2 text-center my-auto">{resource1Ratio * amount}</div>
                <div className="text-center my-auto">Quantity</div>
                <div className="col-span-2 text-center my-auto">{resource2Ratio * amount}</div>
            </>
            <>
                <input className="col-span-2 my-2 mx-5 text-right" type="text" value={resource1Price} onChange={e => changeRes1Price(e.target.value)}/>
                <span className="text-center my-auto">Price</span>
                <input className="col-span-2 col-start-4 my-2 mx-5 text-right" type="text" value={resource2Price} onChange={e => changeRes2Price(e.target.value)}/>
            </>
        </div>
    )
}