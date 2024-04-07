import {TextBoxWithLabel} from "../utils/textbox/TextBoxWithLabel.jsx";
import React, {useContext} from "react";
import {SetSettingsContext, SettingsContext} from "./context/SettingsContext.jsx";
import {GlobalContext} from "./context/CalculatorContext.jsx";

export function TaxSelector() {
    const {settings, setSettings} = useContext(GlobalContext)

    function changeTax(e) {
        setSettings(prev => ({...prev, tax: e}))
    }

    function changeRRWoF(e) {
        setSettings(prev => ({...prev, returnRateWoF: e}))
    }

    function changeRRWF(e) {
        setSettings(prev => ({...prev, returnRateWF: e}))
    }

    return (
        <div className="border-y columns-3 flex justify-around">
            <TextBoxWithLabel name="Fee" value={settings['tax']} changeValue={changeTax}/>
            <TextBoxWithLabel name="RR w/o focus" value={settings['returnRateWoF']} changeValue={changeRRWoF}/>
            <TextBoxWithLabel name="RR w focus" value={settings['returnRateWF']} changeValue={changeRRWF}/>
        </div>
    )
}