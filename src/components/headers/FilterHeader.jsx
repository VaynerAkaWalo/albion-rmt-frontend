import {SelectWithLabel} from "../basic/SelectWithLabel.jsx";

export function FilterHeader() {
    return (
        <div className="flex flex-row min-h-24 border-b-2 text-center items-center justify-center [&>*]:ml-6 [&>*]:min-w-48">
            <SelectWithLabel {...categories}></SelectWithLabel>
            <SelectWithLabel {...subCategories}></SelectWithLabel>
            <SelectWithLabel {...items}></SelectWithLabel>
        </div>
    )
}

const categories = {
    name: "category",
    items: [
        "weapons",
        "helmets",
        "armours",
        "boots",
        "mounts"
    ]
}

const subCategories = {
    name: "sub category",
    items: [
        "nature staff",
        "bow",
        "sword",
        "hammer",
        "claws"
    ]
}

const items = {
    name: "item",
    items: [
        "Nature staff",
        "Druidic staff",
        "Great Nature Staff",
        "Rampart Staff",
    ]
}