import {BMItemRow} from "./BMItemRow.jsx";
import {useEffect, useState} from "react";


export function BlackMarketContent({filters}) {
    const [items, setItems] = useState([])
    const [itemInfo, setItemInfo] = useState({})
    const {search, tier, enchant, quality} = filters

    const getItemData = () => {
        fetch("https://blamedevs.com:8443/albion-rmt-backend/api/v1/item")
            .then(data => data.json())
            .then(json => setItemInfo(json))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        const getMarketData = () => {
            fetch("https://blamedevs.com:8443/albion-rmt-backend/api/v1/marketdata")
                .then(data => data.json())
                .then(json => {
                    setItems(json)
                })
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
    const enchantPredicate = item => enchant['value'] === "all" || item['enchant'] === enchant['value']
    const qualityPredicate = item => quality['value'] === "all" || item['quality'] === quality['value']
    function predicate(item) {
        return searchPredicate(item) && tierPredicate(item) && enchantPredicate(item) && qualityPredicate(item)
    }

    return (
        <div className="w-screen h-full">
            <div className="w-full h-10 px-10 py-2 flex flex-row justify-between [&>*]:flex-1 text-center">
                <div>Item</div>
                <div>Amount</div>
                <div>Price</div>
                <div>Transmutation Cost</div>
                <div>Last seen</div>
                <div>Delete</div>
            </div>
            {items.filter(predicate).sort((x, y) => y['unitPrice'] - x['unitPrice']).map(x => {
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