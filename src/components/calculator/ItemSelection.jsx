import {useContext, useEffect, useState} from "react";
import {GlobalContext} from "./context/CalculatorContext.jsx";
import Select from "react-select";

export function ItemSelection() {
    const {isInitialized ,setInitialized, itemData, setSelectedItem} = useContext(GlobalContext)
    const [categoryOptions, setCategoryOptions] = useState([])
    const [subcategoryOptions, setSubcategoryOptions] = useState([])
    const [itemOptions, setItemOptions] = useState([])
    const [category, setCategory] = useState()
    const [subcategory, setSubcategory] = useState()
    const [item, setItem] = useState()
    const [tier, setTier] = useState(tiers()[3])
    const [enchant, setEnchant] = useState(enchants()[0])

    useEffect(() => {
        if (!itemData['categories']) return;

        if (!categoryOptions.length) {
            setCategoryOptions(createCategoryOptions(itemData))
            setSubcategoryOptions(createSubcategoryOptions(itemData,0))
            setItemOptions(createItemsOptions(itemData,0,0))
        }
        if (categoryOptions.length) {
            setCategory(categoryOptions[0])

        }
    }, [itemData, categoryOptions]);

    useEffect(() => {
        if (!itemData['categories'] || !category) return;

        setSubcategoryOptions(createSubcategoryOptions(itemData, category['value']))
    }, [category]);

    useEffect(() => {
        if (!itemData['categories'] || !category) return;

        if (subcategoryOptions.length) {
            setSubcategory(subcategoryOptions[0])
        }
    }, [subcategoryOptions]);

    useEffect(() => {
        if (!itemData['categories'] || !category || !subcategory) return;

        setItemOptions(createItemsOptions(itemData, category['value'], subcategory['value']))
    }, [subcategory]);

    useEffect(() => {
        if (!itemData['categories'] || !category || !subcategory) return;

        if (itemOptions.length) {
            setItem(itemOptions[0])
        }
    }, [itemOptions]);

    useEffect(() => {
        if (!itemData['categories'] || !category || !subcategory || !item) return;

        const itemInfo = itemData['categories'][category['value']]['subcategories'][subcategory['value']]['items'][item['value']]
        setInitialized(true)
        setSelectedItem(prev => ({
            ...prev,
            ...itemInfo,
            tier: tier['value'],
            enchant: enchant['value']
        }))
    }, [item, tier, enchant]);

    return (
        <div className="w-full grid grid-cols-2 grid-rows-2 border-2 [&>*]:items-center [&>*]:justify-center">
            {
                isInitialized &&
                <>
                    <ItemSelectionSelect name="category" options={categoryOptions} value={category} onChange={setCategory}/>
                    <ItemSelectionSelect name="sub category" options={subcategoryOptions} value={subcategory} onChange={setSubcategory}/>
                    <ItemSelectionSelect name="item" options={itemOptions} value={item} onChange={setItem}/>
                    <div className="grid grid-cols-2 text-center">
                        <ItemSelectionSelect name="tier" options={tiers()} value={tier} onChange={setTier}/>
                        <ItemSelectionSelect name="enchant" options={enchants()} value={enchant} onChange={setEnchant}/>
                    </div>
                </>
            }

        </div>
    )
}

function createCategoryOptions(itemData) {
    return createOptions(itemData['categories'])
}

function createSubcategoryOptions(itemData, categoryIndex) {
    return createOptions(itemData['categories'][categoryIndex]['subcategories'])
}

function createItemsOptions(itemData, categoryIndex, subcategoryIndex) {
    return createOptions(itemData['categories'][categoryIndex]['subcategories'][subcategoryIndex]['items'])
}

function createOptions(dataArray) {
    let array = []
    for (let i = 0; i < dataArray.length; i++) {
        let entry = dataArray[i]
        let displayName = entry['displayName'] ? entry['displayName'] : entry['name']
        array.push({label: displayName, value: i})
    }
    return array;
}

function ItemSelectionSelect({name, options, value, onChange}) {

    return (
        <div className="flex flex-col px-2">
            <span>{name}</span>
            <Select isSearchable={false} styles={customStyles} className="w-full" options={options} value={value} onChange={onChange}/>
        </div>
    )
}

function tiers() {
    const array = [];
    for (let i = 1; i < 9; i++) {
        array.push({label: `T${i}`, value:i})
    }

    return array;
}

function enchants() {
    const array = [];
    for (let i = 0; i < 5; i++) {
        array.push({label: i, value:i})
    }

    return array;
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