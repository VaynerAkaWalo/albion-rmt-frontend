import {useContext} from "react";
import {GlobalContext} from "./context/CalculatorContext.jsx";
import {intFormatter} from "./scripts/utils.js";

export function TemporaryPanel() {
    const {settings, setSettings} = useContext(GlobalContext)
    const {amountMultiplier} = settings

    function changeAmountMultiplier(e) {
        const value = e.target.value.replace(/ /g,'')

        if (!isNaN(value))
        setSettings(prev => ({...prev, amountMultiplier: value}))
    }

    return (
        <div className="w-full h-full border-2 flex flex-col justify-center items-center">
            <label htmlFor="amount">Item amount:</label>
            <input className="text-right" name="amount" type="text" value={intFormatter(amountMultiplier)} onChange={changeAmountMultiplier}/>
        </div>
    )
}