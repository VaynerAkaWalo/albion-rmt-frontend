import React, {useState} from "react";

export const SettingsContext = React.createContext({})
export const SetSettingsContext = React.createContext({})

export function SettingsProvider({child}) {
    const [settings, setSettings] = useState(initialData);

    function setAmount(value) {
        setSettings(prevState => ({...prevState, amount: value}))
    }

    function setFee(value) {
        setSettings(prevState => ({...prevState, fee: value}))
    }

    function setRrWoF(value) {
        setSettings(prevState => ({...prevState, rrWoF: value}))
    }

    function setRrWF(value) {
        setSettings(prevState => ({...prevState, rrWF: value}))
    }

    return (
        <SettingsContext.Provider value={settings}>
            <SetSettingsContext.Provider value={{
                changeAmount: setAmount,
                changeFee: setFee,
                changeRrWoF: setRrWoF,
                changeRrWF: setRrWF
            }}>
                {child}
            </SetSettingsContext.Provider>
        </SettingsContext.Provider>
    )
}

const initialData = {
    amount: 1,
    fee: 10,
    rrWoF: 15,
    rrWF: 30
}