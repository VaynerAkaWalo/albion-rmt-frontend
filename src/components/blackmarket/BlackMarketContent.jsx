import {BMItemRow} from "./BMItemRow.jsx";
import {useEffect, useState} from "react";


export function BlackMarketContent() {
    const [items, setItems] = useState(data)


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

    return (
        <div className="w-screen overflow-x-scroll">
            {items.sort((x, y) => y['unitPrice'] - x['unitPrice']).map(x => {
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

const data = [
    {
        "id": "375",
        "item": {
            "id": "2H_HAMMER_UNDEAD"
        },
        "amount": 1,
        "unitPrice": 395795550000,
        "tier": 8,
        "enchant": 4,
        "quality": 1,
        "expire": 33241363200000
    },
    {
        "id": "376",
        "item": {
            "id": "2H_QUARTERSTAFF"
        },
        "amount": 1,
        "unitPrice": 356059740000,
        "tier": 8,
        "enchant": 4,
        "quality": 2,
        "expire": 33244214400000
    },
    {
        "id": "377",
        "item": {
            "id": "2H_ARCANESTAFF_HELL"
        },
        "amount": 1,
        "unitPrice": 353184350000,
        "tier": 8,
        "enchant": 4,
        "quality": 1,
        "expire": 33223219200000
    },
    {
        "id": "378",
        "item": {
            "id": "2H_DOUBLEBLADEDSTAFF"
        },
        "amount": 1,
        "unitPrice": 342041640000,
        "tier": 8,
        "enchant": 4,
        "quality": 1,
        "expire": 33247324800000
    },
    {
        "id": "379",
        "item": {
            "id": "2H_SKULLORB_HELL"
        },
        "amount": 1,
        "unitPrice": 331660650000,
        "tier": 8,
        "enchant": 4,
        "quality": 1,
        "expire": 33222700800000
    },
    {
        "id": "380",
        "item": {
            "id": "2H_CROSSBOWLARGE"
        },
        "amount": 1,
        "unitPrice": 328958080000,
        "tier": 8,
        "enchant": 4,
        "quality": 2,
        "expire": 33244041600000
    },
    {
        "id": "381",
        "item": {
            "id": "2H_KNUCKLES_HELL"
        },
        "amount": 1,
        "unitPrice": 322855500000,
        "tier": 8,
        "enchant": 4,
        "quality": 1,
        "expire": 33222355200000
    },
    {
        "id": "382",
        "item": {
            "id": "2H_LONGBOW"
        },
        "amount": 1,
        "unitPrice": 314005440000,
        "tier": 8,
        "enchant": 4,
        "quality": 2,
        "expire": 33244819200000
    },
    {
        "id": "383",
        "item": {
            "id": "2H_FROSTSTAFF"
        },
        "amount": 1,
        "unitPrice": 309332740000,
        "tier": 8,
        "enchant": 4,
        "quality": 1,
        "expire": 33247497600000
    },
    {
        "id": "384",
        "item": {
            "id": "MAIN_HOLYSTAFF_MORGANA"
        },
        "amount": 1,
        "unitPrice": 311082820000,
        "tier": 8,
        "enchant": 4,
        "quality": 1,
        "expire": 33240844800000
    },
    {
        "id": "385",
        "item": {
            "id": "2H_HOLYSTAFF_HELL"
        },
        "amount": 1,
        "unitPrice": 301331800000,
        "tier": 8,
        "enchant": 4,
        "quality": 1,
        "expire": 33224774400000
    },
    {
        "id": "386",
        "item": {
            "id": "2H_BOW"
        },
        "amount": 1,
        "unitPrice": 277558380000,
        "tier": 8,
        "enchant": 4,
        "quality": 1,
        "expire": 33247670400000
    },
    {
        "id": "387",
        "item": {
            "id": "2H_DOUBLEBLADEDSTAFF"
        },
        "amount": 1,
        "unitPrice": 271951140000,
        "tier": 8,
        "enchant": 4,
        "quality": 3,
        "expire": 33230736000000
    },
    {
        "id": "388",
        "item": {
            "id": "2H_ENIGMATICSTAFF"
        },
        "amount": 1,
        "unitPrice": 266343900000,
        "tier": 8,
        "enchant": 4,
        "quality": 2,
        "expire": 33244905600000
    },
    {
        "id": "389",
        "item": {
            "id": "2H_KNUCKLES_SET2"
        },
        "amount": 1,
        "unitPrice": 264474820000,
        "tier": 8,
        "enchant": 4,
        "quality": 1,
        "expire": 33247756800000
    },
    {
        "id": "390",
        "item": {
            "id": "2H_CROSSBOWLARGE"
        },
        "amount": 1,
        "unitPrice": 259802120000,
        "tier": 8,
        "enchant": 4,
        "quality": 1,
        "expire": 33247756800000
    },
    {
        "id": "391",
        "item": {
            "id": "2H_FLAIL"
        },
        "amount": 1,
        "unitPrice": 254194880000,
        "tier": 8,
        "enchant": 4,
        "quality": 3,
        "expire": 33229440000000
    },
    {
        "id": "392",
        "item": {
            "id": "MAIN_NATURESTAFF_KEEPER"
        },
        "amount": 1,
        "unitPrice": 240608680000,
        "tier": 8,
        "enchant": 4,
        "quality": 2,
        "expire": 33230217600000
    },
    {
        "id": "393",
        "item": {
            "id": "ARMOR_LEATHER_SET3"
        },
        "amount": 1,
        "unitPrice": 223822330000,
        "tier": 8,
        "enchant": 4,
        "quality": 1,
        "expire": 33248707200000
    },
    {
        "id": "394",
        "item": {
            "id": "2H_DUALCROSSBOW_HELL"
        },
        "amount": 1,
        "unitPrice": 216215350000,
        "tier": 8,
        "enchant": 4,
        "quality": 1,
        "expire": 33230044800000
    },
    {
        "id": "395",
        "item": {
            "id": "2H_WARBOW"
        },
        "amount": 1,
        "unitPrice": 215878740000,
        "tier": 8,
        "enchant": 4,
        "quality": 3,
        "expire": 33231945600000
    },
    {
        "id": "396",
        "item": {
            "id": "2H_GLAIVE"
        },
        "amount": 1,
        "unitPrice": 206533340000,
        "tier": 8,
        "enchant": 4,
        "quality": 2,
        "expire": 33245856000000
    },
    {
        "id": "397",
        "item": {
            "id": "2H_BOW_HELL"
        },
        "amount": 1,
        "unitPrice": 205453500000,
        "tier": 8,
        "enchant": 4,
        "quality": 2,
        "expire": 33205248000000
    }
]