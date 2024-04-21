import ItemRow from "./ItemRow.jsx";
import SubHeader from "./SubHeader.jsx";
import {useEffect, useState} from "react";

function Content({categoriesInfo, selectedCategory, selectedSubcategory, textFilter}) {
    const [itemDetails, setItemDetails] = useState([])
    const [marketData, setMarketData] = useState([])
    const {categories} = categoriesInfo

    const getItemData = () => {
        fetch("https://blamedevs.com:8443/albion-rmt-backend/api/v1/item")
            .then(data => data.json())
            .then(json => setItemDetails(json))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        const getMarketData = () => {
            fetch("https://blamedevs.com:8443/albion-rmt-backend/api/v1/marketdata")
                .then(data => data.json())
                .then(json => {setMarketData(json.sort((x, y) => y['unitPrice'] - x['unitPrice']))})
                .catch(err => console.log(err))
        }
        getItemData()
        getMarketData()
        const interval = setInterval(() => {
            getMarketData()
        },5*1000);
        return () => clearInterval(interval)
    }, []);

    useEffect(() => {
        getItemData()
    }, []);

    const extractItems = categories && itemDetails.length !== 0 &&
        categories
            .filter(category => selectedCategory === 'all' || selectedCategory === category['name'])
            .flatMap(category => category['subcategories'])
            .filter(subcategory => selectedSubcategory === 'all' || selectedSubcategory === subcategory['name'])
            .filter(subcategory => subcategory['name'] !== 'SPECIAL_CAPE')
            .flatMap(subcategory => subcategory['items'])
            .filter(item => textFilter === '' || item['displayName'].toUpperCase().includes(textFilter.toUpperCase()))

    return (
        <div className="w-screen overflow-x-scroll">
            <SubHeader></SubHeader>
            <div className="Content flex-grow w-fit">
                <ul>
                    {extractItems && marketData && extractItems.map(item =>
                        <ItemRow item={item} itemDetails={itemDetails} marketData={marketData}></ItemRow>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Content;