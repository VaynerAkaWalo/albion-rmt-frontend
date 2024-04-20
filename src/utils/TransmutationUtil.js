const TIER_OFFSET = 4;
const MATERIALS_AT_TIER = [2, 3, 4, 5, 5]
const ENCHANT_COST = [
    [0, 1_500, 3_000, 6_000],
    [781, 2_000, 4_000, 8_000],
    [1_250, 3_000, 6_000, 19_800],
    [2_500, 4_800, 15_120, 49_896],
    [5_000, 14_400, 45_360, 149_688],
];

export const transmutationCost = [
    [0, 3000, 9000, 21000],
    [2343, 11343, 29343, 65343],
    [7343, 28343, 70343, 185543],
    [19843, 64843, 182443, 547123],
    [44843, 161843, 506243, 1619363]
]


export function calcTransmutationCost(tier, enchant) {
    const totalCostAtTier =
        () => MATERIALS_AT_TIER[tier - TIER_OFFSET] * costAtTier(tier, enchant)

    if (tier === 4) {
        return totalCostAtTier();
    }
    return calcTransmutationCost(tier - 1, enchant) + totalCostAtTier();
}

function costAtTier(tier, enchant) {
    const currentCost
        = () => ENCHANT_COST[tier - TIER_OFFSET][enchant];

    if (enchant === 0) {
        return currentCost()
    }
    return costAtTier(tier, enchant - 1) + currentCost()
}