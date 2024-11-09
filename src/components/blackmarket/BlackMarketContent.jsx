import {BMItemRow} from "./BMItemRow.jsx";
import {useEffect, useState} from "react";


export function BlackMarketContent({filters}) {
    const [items, setItems] = useState([])
    const [itemInfo, setItemInfo] = useState([])
    const {search, tier, enchant, quality} = filters

    const getItemData = () => {
        fetch("https://blamedevs.com/albion-rmt-backend/api/v1/item")
            .then(data => data.json())
            .then(json => setItemInfo(json))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        const getMarketData = () => {
            fetch("https://blamedevs.com/albion-rmt-backend/api/v1/marketdata")
                .then(data => data.json())
                .then(json => {setItems(json)})
                .catch(err => console.log(err))
        }
        getItemData()
        getMarketData()
        const interval = setInterval(() => {
            getMarketData()
        },5*1000);
        return () => clearInterval(interval)
    }, []);

    const searchPredicate = item => search === "" || item['displayName'].toUpperCase().includes(search.toUpperCase())
    const tierPredicate = item => tier['value'] === "all" || item['tier'] === tier['value']
    const enchantPredicate = item => enchant['value'] === "all" || item['enchant'] === enchant['value'] || (enchant['value'] === "not 4" && item['enchant'] !== 4)
    const qualityPredicate = item => quality['value'] === "all" || item['quality'] === quality['value']
    function predicate(item) {
        return searchPredicate(item) && tierPredicate(item) && enchantPredicate(item) && qualityPredicate(item)
    }

    return (
        <div className="w-screen h-full">
            {items.length !== 0 && itemInfo.length !== 0 && items.filter(predicate).slice(0, 500).sort((x, y) => y['unitPrice'] - x['unitPrice']).map(x => {
                const {name, orderId, amount, unitPrice, tier, enchant, quality, lastUpdate} = x
                return <BMItemRow systemName={name}
                                  amount={amount}
                                  orderId={orderId}
                                  enchant={enchant}
                                  quality={quality}
                                  tier={tier}
                                  unitPrice={unitPrice}
                                  lastUpdate={lastUpdate}
                                  itemInfo={itemInfo}/>
            })}
        </div>
    )
}
