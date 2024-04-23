
export function calculateResourceReturn(settings, detailedItemInfo) {
    const {returnRateWoF, returnRateWF, amountMultiplier} = settings
    const {resourceOneAmount, resourceTwoAmount} = detailedItemInfo;

    function calcRR(ratio) {
        return [
            ratio * amountMultiplier * returnRateWoF / 100,
            ratio * amountMultiplier * returnRateWF / 100
        ]
    }

    const rrOne = calcRR(resourceOneAmount)
    const rrTwo = calcRR(resourceTwoAmount)

    return {
        resourceOneWoF: rrOne[0],
        resourceOneWF: rrOne[1],
        resourceTwoWoF: rrTwo[0],
        resourceTwoWF: rrTwo[1],
    }
}

export function calculateResourceUse(settings, detailedItemInfo) {
    const {amountMultiplier} = settings
    const {resourceOneAmount, resourceTwoAmount} = detailedItemInfo;
    const {resourceOneWoF, resourceOneWF, resourceTwoWoF, resourceTwoWF} = calculateResourceReturn(settings, detailedItemInfo)

    const resourceAmount = (resource) => amountMultiplier * resource


    return {
        resourceOneUseWoF: resourceAmount(resourceOneAmount) - resourceOneWoF,
        resourceOneUseWF: resourceAmount(resourceOneAmount) - resourceOneWF,
        resourceTwoUseWoF: resourceAmount(resourceTwoAmount) - resourceTwoWoF,
        resourceTwoUseWF: resourceAmount(resourceTwoAmount) - resourceTwoWF
    }
}

export function calculateItemValue(detailedItemInfo, selectedItem) {
    const {resourceOneAmount, resourceTwoAmount} = detailedItemInfo
    const {tier, enchant} = selectedItem

    const multi = tier + (tier > 3 ? enchant : 0)

    return (resourceOneAmount + resourceTwoAmount) * Math.pow(2, multi);
}

export function intFormatter(number) {
    return Math.round(number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}

export function floatFormatter(number) {
    return naiveRound(number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}

function naiveRound(num, decimalPlaces = 2) {
    var p = Math.pow(10, decimalPlaces);
    return Math.round(num * p) / p;
}


