import {FilterHeader} from "../headers/FilterHeader.jsx";
import {BlackMarketContent} from "../blackmarket/BlackMarketContent.jsx";

export function BlackMarketView() {
    return (
        <>
            <FilterHeader searchBarActive={true}/>
            <BlackMarketContent/>
        </>
    )
}