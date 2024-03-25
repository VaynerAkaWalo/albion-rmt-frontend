import React from "react";
import {SetSettingsContext, SettingsContext} from "./context/SettingsContext.jsx";

export function TemporaryPanel() {
    const {amount} = React.useContext(SettingsContext)
    const {changeAmount} = React.useContext(SetSettingsContext)

    function setNewAmount(event) {
        changeAmount(event.target.value)
    }

    return (
        <div className="w-full h-full border-2 flex flex-col justify-center items-center">
            <label htmlFor="amount">Item amount:</label>
            <input className="text-right" name="amount" type="text" value={amount} onChange={setNewAmount}/>
        </div>
    )
}