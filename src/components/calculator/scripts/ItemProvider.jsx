import {categories, items, subcategories} from "../../repository/items.js";
import React, {useState} from "react";

export const ItemContext = React.createContext({});
export const SetItemContext = React.createContext({});
export function ItemProvider({child}) {
    const [itemInfo, setItemInfo] = useState(initialState);

    function changeCategory(category) {
        setItemInfo(prev => {
            return {...prev, category: category, subcategory: resetSubcategory(category), item: resetItem(resetSubcategory(category))}
        })
    }
    function changeSubcategory(subcategory) {
        setItemInfo(prev => {
            return {...prev, subcategory: subcategory, item: resetItem(subcategory)}
        })
    }
    function changeItem(item) {
        setItemInfo(prev => {
            return {...prev, item: item}
        })
    }
    function changeTier(tier) {
        setItemInfo(prev => {
            return {...prev, tier: tier}
        })
    }
    function changeEnchant(enchant) {
        setItemInfo(prev => {
            return {...prev, enchant: enchant}
        })
    }

    return (
        <ItemContext.Provider value={itemInfo}>
            <SetItemContext.Provider value={{
                setCategory: changeCategory, setSubcategory: changeSubcategory,
                setItem: changeItem, setTier: changeTier,
                setEnchant: changeEnchant}}>
                {child}
            </SetItemContext.Provider>
        </ItemContext.Provider>
    )
}

function resetSubcategory(category) {
    return subcategories[category][0]
}

function resetItem(subcategory) {
    return items[subcategory][0]
}

const initialState = {
    category: categories[0],
    subcategory: resetSubcategory(categories[0]),
    item: resetItem(resetSubcategory(categories[0])),
    tier: "T4",
    enchant: "0"
}