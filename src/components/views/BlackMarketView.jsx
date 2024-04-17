import {FilterHeader} from "../headers/FilterHeader.jsx";
import {BlackMarketContent} from "../blackmarket/BlackMarketContent.jsx";
import {useState} from "react";
import {BlackMarketFilterHeader} from "../blackmarket/BlackMarketFilterHeader.jsx";

export function BlackMarketView() {
    const [filters, setFilters] = useState(defaultFilter)

    return (
        <>
            <BlackMarketFilterHeader filters={filters} setFilters={setFilters}/>
            <BlackMarketContent filters={filters}/>
        </>
    )
}

const defaultFilter = {
    search: "",
    tier: "all",
    enchant: "all",
    quality: "all"
}