import {TextBoxWithLabelH} from "../utils/textbox/TextBoxWithLabelH.jsx";
import {TextBoxDualWithLabelH} from "../utils/textbox/TextBoxDualWithLabelH.jsx";
import {useContext, useEffect, useState} from "react";
import {SettingsContext} from "./context/SettingsContext.jsx";
import {ResourceContext} from "./context/ResourceProvider.jsx";
import {GlobalContext} from "./context/CalculatorContext.jsx";

export function CostPanel() {
    const {isInitialized, selectedItem} = useContext(GlobalContext)
    const {amount, fee, rrWoF, rrWF} = useContext(SettingsContext)
    const {resource1Ratio, resource2Ratio, resource1Price, resource2Price} = useContext(ResourceContext)
    const [itemValue, setItemValue] = useState(0)
    const [returnRate, setReturnRate] = useState({resource1: [0,0], resource2: [0,0]});

    useEffect(() => {
        if (!isInitialized) return;

        setItemValue(selectedItem['tier'] * resource1Ratio * resource2Ratio * (1 + selectedItem['enchant']))

    }, [selectedItem, resource1Ratio, resource2Ratio]);

    useEffect(() => {
        if (!isInitialized) return;
        const calcRR = (ratio) => {return [resource1Ratio * amount * rrWoF / 100, resource1Ratio * amount * rrWF / 100]}

        setReturnRate({
            resource1: calcRR(resource1Ratio),
            resource2: calcRR(resource2Ratio)
        })
    }, [resource1Ratio, resource2Ratio, amount, rrWoF, rrWF]);

    function resourcePrice() {
        if (!isInitialized) return;
        return (resource1Price * resource1Ratio + resource2Price * resource2Ratio) * amount
    }

    function tax() {
        if (!isInitialized) return;
        return itemValue / 20 * fee * amount
    }

    function returnFromRrWoF() {
        if (!isInitialized) return;
        return returnRate['resource1'][0] * resource1Price + returnRate['resource2'][0] * resource2Price;
    }

    function returnFromRrWF() {
        if (!isInitialized) return;
        return returnRate['resource1'][1] * resource1Price + returnRate['resource2'][1] * resource2Price;
    }

    function returnFromJournals() {
        return 0;
    }

    function totalCostWoF() {
        if (!isInitialized) return;
        return resourcePrice() + tax() - returnFromRrWoF() - returnFromJournals()
    }

    function totalCostWF() {
        if (!isInitialized) return;
        return resourcePrice() + tax() - returnFromRrWF() - returnFromJournals()
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
                    <div className="col-span-3 text-right border">{resourcePrice()}</div>
                </>
                <>
                    <div className="col-span-2">Tax</div>
                    <div className="col-span-3 text-right border">{tax()}</div>
                </>
                <>
                    <div className="col-span-2">Return from RR</div>
                    <div className="border text-right">{returnFromRrWoF()}</div>
                    <div></div>
                    <div className="border text-right">{returnFromRrWF()}</div>
                </>
                <>
                    <div className="col-span-2">Return from journals</div>
                    <div className="col-span-3 border text-right">{returnFromJournals()}</div>
                </>
                <>
                    <div className="col-span-2">Total cost</div>
                    <div className="border text-right">{totalCostWoF()}</div>
                    <div></div>
                    <div className="border text-right">{totalCostWF()}</div>
                </>
            </div>
        </div>

)
}