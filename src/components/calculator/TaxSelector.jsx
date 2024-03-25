import {TextBoxWithLabel} from "../utils/textbox/TextBoxWithLabel.jsx";
import React from "react";
import {SetSettingsContext, SettingsContext} from "./context/SettingsContext.jsx";

export function TaxSelector() {
    const {fee, rrWoF, rrWF} = React.useContext(SettingsContext)
    const {changeFee, changeRrWoF, changeRrWF} = React.useContext(SetSettingsContext)

    return (
        <div className="border-2 columns-3 flex justify-around">
            <TextBoxWithLabel name="Fee" value={fee} changeValue={changeFee}/>
            <TextBoxWithLabel name="RR w/o focus" value={rrWoF} changeValue={changeRrWoF}/>
            <TextBoxWithLabel name="RR w focus" value={rrWF} changeValue={changeRrWF}/>
        </div>
    )
}