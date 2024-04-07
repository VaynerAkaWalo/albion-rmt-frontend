
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

export function calculateItemValue(detailedItemInfo, selectedItem) {
    const {resourceOneAmount, resourceTwoAmount} = detailedItemInfo
    const {tier, enchant} = selectedItem

    return tier * resourceOneAmount * resourceTwoAmount * (1 + enchant)
}


