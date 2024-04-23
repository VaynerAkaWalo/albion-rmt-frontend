import {useContext} from "react";
import {GlobalContext} from "./context/CalculatorContext.jsx";
import {calculateResourceReturn, calculateResourceUse, floatFormatter} from "./scripts/utils.js";

export function ResourceReturnPanel() {
    const {settings, detailedItemInfo} = useContext(GlobalContext)
    const {resourceOneDisplayName, resourceTwoDisplayName} = detailedItemInfo
    const {resourceOneWoF, resourceOneWF, resourceTwoWoF, resourceTwoWF} = calculateResourceReturn(settings, detailedItemInfo)
    const {resourceOneUseWoF, resourceOneUseWF, resourceTwoUseWoF, resourceTwoUseWF} = calculateResourceUse(settings, detailedItemInfo)

    return (
        <div className="w-full border-2">
            <div className="grid grid-cols-3 [&>*]:border text-center">
                <>
                    <strong>Item</strong>
                    <strong>Without Focus</strong>
                    <strong>With Focus</strong>
                </>
            </div>
            <div className="w-full h-max text-center">
                <div className="grid grid-cols-3 grid-rows-3 [&>*]:border">
                    <span className="col-span-3">Resources used</span>
                    <>
                        <div>{resourceOneDisplayName}</div>
                        <div className="text-right">{floatFormatter(resourceOneUseWoF)}</div>
                        <div className="text-right">{floatFormatter(resourceOneUseWF)}</div>
                    </>
                    <>
                        <div>{resourceTwoDisplayName}</div>
                        <div className="text-right">{floatFormatter(resourceTwoUseWoF)}</div>
                        <div className="text-right">{floatFormatter(resourceTwoUseWF)}</div>
                    </>
                </div>
                <div className="grid grid-cols-3 grid-rows-3 [&>*]:border">
                    <span className="col-span-3">From return rate</span>
                    <>
                        <div>{resourceOneDisplayName}</div>
                        <div className="text-right">{floatFormatter(resourceOneWoF)}</div>
                        <div className="text-right">{floatFormatter(resourceOneWF)}</div>
                    </>
                    <>
                        <div>{resourceTwoDisplayName}</div>
                        <div className="text-right">{floatFormatter(resourceTwoWoF)}</div>
                        <div className="text-right">{floatFormatter(resourceTwoWF)}</div>
                    </>
                </div>
                <div className="grid grid-cols-3 grid-rows-3 [&>*]:border">
                    <span className="col-span-3">From laborers</span>
                    <>
                        <div>Planks</div>
                        <div className="text-right">0</div>
                        <div className="text-right">0</div>
                    </>
                    <>
                        <div>Cloth</div>
                        <div className="text-right">0</div>
                        <div className="text-right">0</div>
                    </>
                </div>
            </div>
        </div>
    )
}