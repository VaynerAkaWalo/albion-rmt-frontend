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
        fetch("https://blamedevs.com/albion-rmt-backend/api/v1/categories")
            .then(data => data.json())
            .then(json => {
                setItemData(json)
            })
            .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        if (selectedItem['name']){
            fetch(`https://blamedevs.com/albion-rmt-backend/api/v1/item/${selectedItem['name']}`)
                .then(data => {
                    if (data.status === 500) {
                        throw new Error("could not load item data")
                    }
                    return data.json()
                })
                .then(json => {
                    const {resourceOne} = json
                    const resourceTwo = typeof json['resourceTwo'] !== 'undefined' ? json['resourceTwo'] : {name: "TRASH", displayName: "Trash", amount: 0}
                    setDetailedItemInfo(prev => ({
                        ...prev,
                        resourceOne: resourceOne['name'], resourceOneDisplayName: resourceOne['displayName'], resourceOneAmount: resourceOne['amount'],
                        resourceTwo: resourceTwo['name'], resourceTwoDisplayName: resourceTwo['displayName'], resourceTwoAmount: resourceTwo['amount'],
                    }))
                })
                .catch(err => console.log(err))
        }
    }, [selectedItem]);

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
    artefactPrice: 0
}

const settingsPh = {
    returnRateWoF: 0,
    returnRateWF: 37.1,
    tax: 0,
    amountMultiplier: 1,
}
