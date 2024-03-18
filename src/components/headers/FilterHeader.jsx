import {SelectComponent} from "../filteringComponents/SelectComponent.jsx";
import {SearchBar} from "../filteringComponents/SearchBar.jsx";

export function FilterHeader() {
    return (
        <div className="flex flex-row min-h-12 border-b-2 text-center items-center justify-center [&>*]:ml-6 [&>*]:min-w-48">
            <SearchBar/>
            <SelectComponent {...categories}></SelectComponent>
            <SelectComponent {...subCategories}></SelectComponent>
            <SelectComponent {...items}></SelectComponent>
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