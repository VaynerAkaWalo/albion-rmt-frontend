import {useContext, useEffect, useState} from "react";
import {ItemContext} from "../context/ItemProvider.jsx";
import {ResourceContext} from "../context/ResourceProvider.jsx";

export function getItemValue() {
    const [itemValue, setItemValue] = useState(0)
    const {tier, enchant} = useContext(ItemContext)
    const {resource1Ratio, resource2Ratio} = useContext(ResourceContext)

    useEffect(() => {
        setItemValue(tier[1] * resource1Ratio * resource2Ratio * (1 + enchant))
    }, [tier, enchant, resource1Ratio, resource2Ratio]);

    return itemValue
}