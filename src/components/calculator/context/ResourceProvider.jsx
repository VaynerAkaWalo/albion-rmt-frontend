import React, {useState} from "react";

export const ResourceContext = React.createContext({})
export const SetResourceContext = React.createContext({})

export function ResourceProvider({child}) {
    const [resourceInfo, setResourceInfo] = useState(initialData)

    function changeRes1Price(value) {
        setResourceInfo(prevState => ({...prevState, resource1Price: value}))
    }

    function changeRes2Price(value) {
        setResourceInfo(prevState => ({...prevState, resource2Price: value}))
    }

    return (
        <ResourceContext.Provider value={resourceInfo}>
            <SetResourceContext.Provider value={{changeRes1Price, changeRes2Price}}>
                {child}
            </SetResourceContext.Provider>
        </ResourceContext.Provider>
    )
}

const initialData = {
    resource1: "planks",
    resource1Ratio: 16,
    resource1Price: 2000,

    resource2: "cloth",
    resource2Ratio: 8,
    resource2Price: 1600,

    artifact: null,
}