import {SelectComponent} from "../utils/SelectComponent.jsx";
import {categories, subcategories, items} from "../repository/items.js";
import React from "react";
import {ItemContext, SetItemContext} from "./context/ItemProvider.jsx";

export function ItemSelection() {
    const item = React.useContext(ItemContext)
    const {setCategory, setSubcategory, setItem, setTier, setEnchant} = React.useContext(SetItemContext)

    return (
        <div className="w-full h-full grid grid-cols-2 grid-rows-2 border-2 [&>*]:p-4 [&>*]:items-center [&>*]:justify-center">
            <SelectComponent name="category" label="true" items={categories} current={item['category']} changeCurrent={setCategory}></SelectComponent>
            <SelectComponent name="sub category" label="true" items={subcategories[item['category']]} current={item['subcategory']} changeCurrent={setSubcategory}></SelectComponent>
            <SelectComponent name="item" label="true" items={items[item['subcategory']]} current={item['item']} changeCurrent={setItem}></SelectComponent>
            <div className="tierSelection columns-2 flex justify-between">
                <SelectComponent name="Tier" label="true" items={tiers} current={item['tier']} changeCurrent={setTier}/>
                <SelectComponent name="Tier" label="true" items={enchantments} current={item['enchant']} changeCurrent={setEnchant}/>
            </div>
        </div>
    )
}

const tiers = Array.from({length: 8}, (v, i) => "T"+ (i + 1))
const enchantments = Array.from({length: 5}, (v, i) => i)