import {BMItemRow} from "./BMItemRow.jsx";
import {useEffect, useState} from "react";


export function BlackMarketContent({filters}) {
    const [items, setItems] = useState([])
    const {search, tier, enchant, quality} = filters

    useEffect(() => {
        const getMarketData = () => {
            fetch("https://blamedevs.com:8443/albion-rmt-backend/api/v1/marketdata")
                .then(data => data.json())
                .then(json => {
                    setItems(json)
                })
                .catch(err => console.log(err))
        }
        getMarketData()
        const interval = setInterval(() => {
            getMarketData()
        },5*1000);
        return () => clearInterval(interval)
    }, []);

    const searchPredicate = item => search === "" || item['item']['id'].toUpperCase().includes(search.toUpperCase())
    const tierPredicate = item => tier['value'] === "all" || item['tier'] === tier['value']
    const enchantPredicate = item => enchant['value'] === "all" || item['enchant'] === enchant['value']
    const qualityPredicate = item => quality['value'] === "all" || item['quality'] === quality['value']
    function predicate(item) {
        return searchPredicate(item) && tierPredicate(item) && enchantPredicate(item) && qualityPredicate(item)
    }

    return (
        <div className="w-screen h-full">
            {items.filter(predicate).sort((x, y) => y['unitPrice'] - x['unitPrice']).map(x => {
                const {item, amount, unitPrice, tier, enchant, quality} = x
                return <BMItemRow systemName={item['id']}
                                  amount={amount}
                                  enchant={enchant}
                                  quality={quality}
                                  tier={tier}
                                  unitPrice={unitPrice}/>
            })}
        </div>
    )
}