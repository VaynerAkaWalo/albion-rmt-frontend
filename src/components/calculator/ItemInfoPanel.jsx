import React, {useEffect, useState} from "react";
import trash from "/T1_TRASH.png";
import {GlobalContext} from "./context/CalculatorContext.jsx";

export function ItemInfoPanel() {
    const {selectedItem, isInitialized} = React.useContext(GlobalContext)
    const [image, setImage] = useState(trash)

    useEffect(() => {
        if (!isInitialized) return;
        setImage(`https://render.albiononline.com/v1/item/T${selectedItem['tier']}_${selectedItem['name']}${enchantPostFix()}.png`)
    }, [selectedItem]);

    function enchantPostFix() {
        console.log(selectedItem['enchant'])
        if (isInitialized && selectedItem['enchant'] === 0) return ""
        return '@' + selectedItem['enchant']
    }

    return (
        <div className="w-full flex justify-center items-center border-2">
            <>
                <div className="flex flex-col justify-center text-center">
                    <img src={image} alt="item"/>
                    <label htmlFor="image">{selectedItem['displayName'] ? selectedItem['displayName'] : selectedItem['name']}</label>
                </div>
            </>
        </div>
    )
}