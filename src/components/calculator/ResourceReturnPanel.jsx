import {useContext} from "react";
import {GlobalContext} from "./context/CalculatorContext.jsx";
import {calculateResourceReturn} from "./scripts/utils.js";

export function ResourceReturnPanel() {
    const {settings, detailedItemInfo} = useContext(GlobalContext)
    const {resourceOneDisplayName, resourceTwoDisplayName} = detailedItemInfo
    const {resourceOneWoF, resourceOneWF, resourceTwoWoF, resourceTwoWF} = calculateResourceReturn(settings, detailedItemInfo)

    return (
        <div className="w-full border-2 flex flex-col justify-between text-center">
            <div className="grid grid-cols-3 grid-rows-4 [&>*]:border">
                <div className="col-span-3">From return rate</div>
                <>
                    <div>Item</div>
                    <div>With Focus</div>
                    <div>Without Focus</div>
                </>
                <>
                    <div>{resourceOneDisplayName}</div>
                    <div>{resourceOneWoF}</div>
                    <div>{resourceOneWF}</div>
                </>
                <>
                    <div>{resourceTwoDisplayName}</div>
                    <div>{resourceTwoWoF}</div>
                    <div>{resourceTwoWF}</div>
                </>
            </div>
            <div className="grid grid-cols-3 grid-rows-4 [&>*]:border">
                <div className="col-span-3">From laborers</div>
                <>
                    <div>Item</div>
                    <div>With Focus</div>
                    <div>Without Focus</div>
                </>
                <>
                    <div>Planks</div>
                    <div>0</div>
                    <div>0</div>
                </>
                <>
                    <div>Cloth</div>
                    <div>0</div>
                    <div>0</div>
                </>
            </div>
        </div>
    )
}