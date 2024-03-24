import {TextBoxWithLabelH} from "../utils/textbox/TextBoxWithLabelH.jsx";
import {TextBoxDualWithLabelH} from "../utils/textbox/TextBoxDualWithLabelH.jsx";

export function CostPanel() {
    return (
        <div className="w-full h-full flex flex-col border-2">
            <div className="flex flex-row px-2 pt-2">
                <div className="w-3/5 ml-auto flex justify-between px-2">
                    <span>With focus</span>
                    <span>Without focus</span>
                </div>
            </div>
            <TextBoxWithLabelH name="Total resource cost"/>
            <TextBoxWithLabelH name="Tax"/>
            <TextBoxDualWithLabelH name="Return from RR"/>
            <TextBoxWithLabelH name="Return from journals"/>
            <TextBoxDualWithLabelH name="Total cost"/>
        </div>
    )
}