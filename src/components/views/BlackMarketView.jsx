import {FilterHeader} from "../headers/FilterHeader.jsx";
import {BlackMarketContent} from "../blackmarket/BlackMarketContent.jsx";
import {useState} from "react";
import {BlackMarketFilterHeader} from "../blackmarket/BlackMarketFilterHeader.jsx";

export function BlackMarketView() {
    const [filters, setFilters] = useState(defaultFilter)

    return (
        <>
            <div className="sticky top-0 z-50">
                <BlackMarketFilterHeader filters={filters} setFilters={setFilters}/>
                <ul className="w-full h-10 px-10 py-2 border-b-2 flex flex-row justify-between [&>*]:flex-1 text-center">
                    <li>Item</li>
                    <li>Amount</li>
                    <li>Price</li>
                    <li>Transmutation Cost</li>
                    <li>Last seen</li>
                    <li>Delete</li>
                </ul>
            </div>
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