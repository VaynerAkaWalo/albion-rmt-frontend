import {useContext} from "react";
import {GlobalContext} from "./context/CalculatorContext.jsx";

export function TemporaryPanel() {
    const {settings, setSettings} = useContext(GlobalContext)
    const {amountMultiplier} = settings

    function changeAmountMultiplier(e) {
        setSettings(prev => ({...prev, amountMultiplier: e.target.value}))
    }

    return (
        <div className="w-full h-full border-2 flex flex-col justify-center items-center">
            <label htmlFor="amount">Item amount:</label>
            <input className="text-right" name="amount" type="text" value={amountMultiplier} onChange={changeAmountMultiplier}/>
        </div>
    )
}