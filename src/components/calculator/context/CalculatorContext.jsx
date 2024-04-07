import {ResourceProvider} from "./ResourceProvider.jsx";
import {SettingsProvider} from "./SettingsContext.jsx";
import {createContext, useEffect, useState} from "react";

export const GlobalContext = createContext({});
export const SetGlobalContext = createContext({});

export function CalculatorContext({child}) {
    const [initialized, setInitialized] = useState(true)
    const [itemData, setItemData] = useState({});
    const [selectedItem, setSelectedItem] = useState({})
    const [detailedItemInfo, setDetailedItemInfo] = useState(placeholder)
    const [settings, setSettings] = useState(settingsPh)

    useEffect(() => {
        fetch("https://blamedevs.com:8443/albion-rmt-backend/api/v1/categories")
            .then(data => data.json())
            .then(json => {
                setItemData(json)
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <GlobalContext.Provider value={{
            isInitialized: initialized,
            setInitialized,
            itemData,
            selectedItem: selectedItem,
            setSelectedItem: setSelectedItem,
            detailedItemInfo,
            setDetailedItemInfo,
            settings,
            setSettings
        }}>
            <ResourceProvider child={
                <SettingsProvider child={
                    child
                }/>
            }/>
        </GlobalContext.Provider>

    )
}

const placeholder = {
    resourceOne: "PLANKS",
    resourceOneDisplayName: "Planks",
    resourceTwo: "CLOTH",
    resourceTwoDisplayName: "Cloth",
    resourceOneAmount: "16",
    resourceTwoAmount: "8",
    resourceOnePrice: 1000,
    resourceTwoPrice: 1000,
}

const settingsPh = {
    returnRateWoF: 20,
    returnRateWF: 30,
    tax: 15,
    amountMultiplier: 1,
}