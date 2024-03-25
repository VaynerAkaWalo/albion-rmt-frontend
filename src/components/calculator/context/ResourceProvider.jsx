import React, {useState} from "react";

export const ResourceContext = React.createContext({})
export const SetResourceContext = React.createContext({})

export function ResourceProvider({child}) {
    const [resourceInfo, setResourceInfo] = useState(initialData)


    return (
        <ResourceContext.Provider value={resourceInfo}>
            <SetResourceContext.Provider value={setResourceInfo}>
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