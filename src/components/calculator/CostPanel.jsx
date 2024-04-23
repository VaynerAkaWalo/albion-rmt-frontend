import {useContext} from "react";
import {GlobalContext} from "./context/CalculatorContext.jsx";
import {calculateItemValue, calculateResourceReturn, intFormatter} from "./scripts/utils.js";

export function CostPanel() {
    const {isInitialized, selectedItem, settings, detailedItemInfo} = useContext(GlobalContext)
    const {resourceOneAmount, resourceTwoAmount, resourceOnePrice, resourceTwoPrice, artefactPrice} = detailedItemInfo
    const {tax, amountMultiplier} = settings

    const {resourceOneWoF, resourceOneWF, resourceTwoWoF, resourceTwoWF} = calculateResourceReturn(settings, detailedItemInfo)
    const itemValue = calculateItemValue(detailedItemInfo, selectedItem)

    console.log(artefactPrice)

    function resourcePrice() {
        if (!isInitialized) return;
        return (resourceOnePrice * resourceOneAmount + resourceTwoPrice * resourceTwoAmount) * amountMultiplier
    }

    function calcFee() {
        if (!isInitialized) return;
        const nutritionConsumption = itemValue * amountMultiplier * 0.1125 / 2
        return nutritionConsumption * tax / 100
    }

    function returnFromRrWoF() {
        if (!isInitialized) return;
        return resourceOneWoF * resourceOnePrice + resourceTwoWoF * resourceTwoPrice;
    }

    function returnFromRrWF() {
        if (!isInitialized) return;
        return resourceOneWF * resourceOnePrice + resourceTwoWF * resourceTwoPrice;
    }

    function returnFromJournals() {
        return 0;
    }

    function getArtefactPrice() {
        return artefactPrice * 1
    }

    function totalCostWoF() {
        if (!isInitialized) return;
        return resourcePrice() + calcFee() - returnFromRrWoF() - returnFromJournals() + getArtefactPrice()
    }

    function totalCostWF() {
        if (!isInitialized) return;
        return resourcePrice() + calcFee() - returnFromRrWF() - returnFromJournals() + getArtefactPrice()
    }

    return (
        <div className="w-full flex flex-col border-2">
            <div className="grid grid-cols-5 grid-rows-6 my-auto px-2 gap-y-3">
                <>
                    <div className="col-start-3">w focus</div>
                    <div className="col-start-5">w/o focus</div>
                </>
                <>
                    <div className="col-span-2">Total resource cost</div>
                    <div className="col-span-3 text-right border">{intFormatter(resourcePrice())}</div>
                </>
                <>
                    <div className="col-span-2">Tax</div>
                    <div className="col-span-3 text-right border">{intFormatter(calcFee())}</div>
                </>
                <>
                    <div className="col-span-2">Return from RR</div>
                    <div className="border text-right">{intFormatter(returnFromRrWoF())}</div>
                    <div></div>
                    <div className="border text-right">{intFormatter(returnFromRrWF())}</div>
                </>
                <>
                    <div className="col-span-2">Return from journals</div>
                    <div className="col-span-3 border text-right">{intFormatter(returnFromJournals())}</div>
                </>
                <>
                    <div className="col-span-2">Total cost</div>
                    <div className="border text-right">{intFormatter(totalCostWoF())}</div>
                    <div></div>
                    <div className="border text-right">{intFormatter(totalCostWF())}</div>
                </>
            </div>
        </div>

)
}