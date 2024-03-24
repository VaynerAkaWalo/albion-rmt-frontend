import {SelectComponent} from "../utils/SelectComponent.jsx";

export function ItemSelection() {
    return (
        <div className="w-full h-full grid grid-cols-2 grid-rows-2 border-2 [&>*]:p-4 [&>*]:items-center [&>*]:justify-center">
            <SelectComponent {...categories}></SelectComponent>
            <SelectComponent {...subCategories}></SelectComponent>
            <SelectComponent {...items}></SelectComponent>
            <div className="tierSelection columns-2 flex justify-between">
                <SelectComponent {...tier}/>
                <SelectComponent {...enchantment}/>
            </div>
        </div>
    )
}

const categories = {
    name: "Category",
    label: true,
    items: [
        "weapons",
        "helmets",
        "armours",
        "boots",
        "mounts"
    ]
}

const subCategories = {
    name: "Sub category",
    label: true,
    items: [
        "nature staff",
        "bow",
        "sword",
        "hammer",
        "claws"
    ]
}

const items = {
    name: "Item",
    label: true,
    items: [
        "Nature staff",
        "Druidic staff",
        "Great Nature Staff",
        "Rampart Staff",
    ]
}

const tier = {
    name: "Tier",
    label: true,
    items: [
        "T1",
        "T2",
        "T3",
        "T4",
        "T5",
        "T6",
        "T7",
        "T8",
    ]
}

const enchantment = {
    name: "Enchant",
    label: true,
    items: [
        "0",
        "1",
        "2",
        "3",
        "4",
    ]
}