import {TextBoxWithLabelH} from "../utils/textbox/TextBoxWithLabelH.jsx";
import {TextBoxDualWithLabelH} from "../utils/textbox/TextBoxDualWithLabelH.jsx";
import {getItemValue} from "./scripts/utils.jsx";
import {useContext} from "react";
import {SettingsContext} from "./context/SettingsContext.jsx";
import {ResourceContext} from "./context/ResourceProvider.jsx";

export function CostPanel() {
    const {amount, fee} = useContext(SettingsContext)
    const {resource1Ratio, resource2Ratio, resource1Price, resource2Price} = useContext(ResourceContext)
    const itemValue = getItemValue()

    function resourcePrice() {
        return (resource1Price * resource1Ratio + resource2Price * resource2Ratio) * amount
    }

    function tax() {
        return itemValue / 20 * fee * amount
    }

    function returnFromRrWoF() {
        return 0;
    }

    function returnFromRrWF() {
        return 0;
    }

    function returnFromJournals() {
        return 0;
    }

    function totalCostWoF() {
        return resourcePrice() + tax() - returnFromRrWoF() - returnFromJournals()
    }

    function totalCostWF() {
        return resourcePrice() + tax() - returnFromRrWF() - returnFromJournals()
    }



    return (
        <div className="w-full h-full flex flex-col border-2">
            <div className="flex flex-row px-2 pt-2">
                <div className="w-3/5 ml-auto flex justify-between px-2">
                    <span>With focus</span>
                    <span>Without focus</span>
                </div>
            </div>
            <TextBoxWithLabelH name="Total resource cost" value={resourcePrice()}/>
            <TextBoxWithLabelH name="Tax" value={tax()}/>
            <TextBoxDualWithLabelH name="Return from RR" value1={returnFromRrWoF()} value2={returnFromRrWF()}/>
            <TextBoxWithLabelH name="Return from journals" value={returnFromJournals()}/>
            <TextBoxDualWithLabelH name="Total cost" value1={totalCostWoF()} value2={totalCostWF()}/>
        </div>
    )
}