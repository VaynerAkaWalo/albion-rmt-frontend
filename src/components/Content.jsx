import ItemRow from "./ItemRow.jsx";
import SubHeader from "./SubHeader.jsx";
import {useEffect, useState} from "react";

function Content() {
    const [itemData, setItemData] = useState([])
    const [itemDetails, setItemDetails] = useState([])
    const {categories} = itemData

    const getCategories = () => {
        fetch("https://blamedevs.com:8443/albion-rmt-backend/api/v1/categories")
            .then(data => data.json())
            .then(json => {
                setItemData(json)
            })
            .catch(err => console.log(err))
    }

    const getItemData = () => {
        fetch("https://blamedevs.com:8443/albion-rmt-backend/api/v1/item")
            .then(data => data.json())
            .then(json => setItemDetails(json))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getCategories()
        getItemData()
    }, []);

    const extractItems = categories && itemDetails.length !== 0 &&
        categories
            .flatMap(category => category['subcategories'])
            .filter(subcategory => subcategory['name'] !== 'SPECIAL_CAPE')
            .flatMap(subcategory => subcategory['items'])

    return (
        <div className="w-screen overflow-x-scroll">
            <SubHeader></SubHeader>
            <div className="Content flex-grow w-fit">
                <ul>
                    {extractItems && extractItems.map(item =>
                        <ItemRow item={item} itemDetails={itemDetails}></ItemRow>)
                    }
                </ul>
            </div>
        </div>
    )
}

const data = [
    {
        name: "sword"
    },
    {
        name: "bow"
    },
    {
        name: "mace"
    },
    {
        name: "hammer"
    },
    {
        name: "hammer"
    },
    {
        name: "hammer"
    },
    {
        name: "hammer"
    },
    {
        name: "hammer"
    },
    {
        name: "hammer"
    },
    {
        name: "hammer"
    },

]

export default Content;