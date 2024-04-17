import {SelectComponent} from "../utils/SelectComponent.jsx";
import {SearchBar} from "../utils/SearchBar.jsx";

export function FilterHeader({searchBarActive = false, filterPattern, setFilterPattern}) {
    return (
        <div className="flex flex-row columns-4 min-h-12 border-b-2 text-center items-center justify-center [&>*]:mx-20">
            {searchBarActive && <SearchBar text={filterPattern} setText={setFilterPattern}/>}
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