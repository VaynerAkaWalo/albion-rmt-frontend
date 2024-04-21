import {SearchBar} from "../utils/SearchBar.jsx";
import Select from "react-select";
import {useEffect, useState} from "react";

const ALL_FILTER = {label: "All", value: "all"}

export function FilterHeader({categoriesInfo, changeSelectedCategory, changeSelectedSubcategory, textFilter, setTextFilter}) {
    const [selectedCategory, setSelectedCategory] = useState(ALL_FILTER)
    const [selectedSubcategory, setSelectedSubcategory] = useState(ALL_FILTER)
    const {categories} = categoriesInfo

    useEffect(() => {
        changeSelectedCategory(selectedCategory['value'])
        changeSelectedSubcategory(selectedSubcategory['value'])
    }, [selectedCategory, selectedSubcategory]);

    useEffect(() => {
        setSelectedSubcategory(ALL_FILTER)
    }, [selectedCategory]);

    const categoryOptions = () => {
        if(!categories) return []
        return categories.map(category => ({label: category['displayName'], value: category['name']}))
    }

    const subcategoryOptions = () => {
        if (!categories) return []
        return categories.filter(category => selectedCategory['value'] === "all" || category['name'] === selectedCategory['value'])
            .flatMap(category => category['subcategories'])
            .map(subcategory => ({label: subcategory['displayName'], value: subcategory['name']}))
    }

    const defaultOptions = (options) => {
        let array = [{label: "All", value: "all"}]
        for (const option of options) {
            array.push(option)
        }
        return array;
    }

    const setText = (e) => {
        setTextFilter(e.target.value)
    }

    return (
        <div className="flex flex-row columns-4 min-h-12 border-b-2 text-center items-center justify-center [&>*]:mx-20">
            <SearchBar text={textFilter} setText={setText}/>
            <Select isSearchable={false} styles={customStyles} className="w-1/6" options={defaultOptions(categoryOptions())} value={selectedCategory} onChange={setSelectedCategory}></Select>
            <Select isSearchable={false} styles={customStyles} className="w-1/6" options={defaultOptions(subcategoryOptions())} value={selectedSubcategory} onChange={setSelectedSubcategory}></Select>
        </div>
    )
}

const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: "none"// your font declaration
    }),
    singleValue: (provided) => ({
        ...provided,
        color: "white"
    })
};
