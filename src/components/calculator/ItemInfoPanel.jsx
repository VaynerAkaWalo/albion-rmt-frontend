import React, {useEffect} from "react";
import {ItemContext} from "./scripts/ItemProvider.jsx";
import trash from "/T1_TRASH.png";

export function ItemInfoPanel() {
    const {item} = React.useContext(ItemContext)

    useEffect(() => {
    //     TODO IMAGE LOADING
    }, [item]);

    return (
        <div className="h-full w-full flex justify-center items-center border-2 p-4">
            <>
                <div className="flex flex-col w-2/5 row-span-4 justify-center text-center">
                    <img src={trash} alt="item"/>
                    <label htmlFor="image">{item}</label>
                </div>
            </>
        </div>
    )
}