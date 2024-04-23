import {ItemRecord} from "./ItemRecord.jsx";

function ItemRow({item, itemDetails, marketData}) {
    const {name, displayName} = item
    const itemDetail = itemDetails.filter(itemDetail => itemDetail['name'] === name)[0]
    const offers = marketData.filter(offer => offer['name'] === name)
        .filter(offer => offer['quality'] !== 5 && offer['quality'] !== 4)
    const {resourceOne, resourceTwo} = itemDetail

    const getResourceAmount = () => {
        const resourceAmount = (resource) => {
            if (resource === undefined) {
                return 0
            }
            return parseInt(resource['amount'])
        }

        return resourceAmount(resourceOne) + resourceAmount(resourceTwo)
    }

    function tierIdentifier() {
        let array = []
        for (let i = 4; i < 9; i++) {
            for (let j = 0; j < 5; j++) {
                array.push({tier: i, enchant: j})
            }
        }
        return array
    }

    function image() {
        return `https://render.albiononline.com/v1/item/T${4}_${name.toUpperCase()}.png`
    }

    return (
        <div className="itemRow border-b-2 flex flex-row [&>*]:my-3">
        <img src={image()} alt={displayName}/>
            {tierIdentifier().map(({tier, enchant}) => <ItemRecord tier={tier}
                                                                   enchant={enchant}
                                                                   resourceAmount={getResourceAmount()}
                                                                   bmOffers={offers}/>)}
        </div>
    )

}

export default ItemRow;

