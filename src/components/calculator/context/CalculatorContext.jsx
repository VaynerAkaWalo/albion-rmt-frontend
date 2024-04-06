import {ResourceProvider} from "./ResourceProvider.jsx";
import {SettingsProvider} from "./SettingsContext.jsx";
import {createContext, useEffect, useState} from "react";

export const GlobalContext = createContext({});
export const SetGlobalContext = createContext({});

export function CalculatorContext({child}) {
    const [initialized, setInitialized] = useState(true)
    const [itemData, setItemData] = useState({});
    const [selectedItem, setSelectedItem] = useState({})

    useEffect(() => {
        fetch("http://195.201.239.195:8050/albion-rmt-backend/api/v1/categories")
            .then(data => data.json())
            .then(json => {
                setItemData(json)
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <GlobalContext.Provider value={{
            isInitialized: initialized,
            setInitialized: setInitialized,
            itemData: itemData,
            selectedItem: selectedItem,
            setSelectedItem: setSelectedItem
        }}>
            <ResourceProvider child={
                <SettingsProvider child={
                    child
                }/>
            }/>
        </GlobalContext.Provider>

    )
}