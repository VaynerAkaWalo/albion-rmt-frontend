import {ItemSelection} from "../calculator/ItemSelection.jsx";
import {ItemInfoPanel} from "../calculator/ItemInfoPanel.jsx";
import {LocationSelector} from "../calculator/LocationSelector.jsx";
import {TaxSelector} from "../calculator/TaxSelector.jsx";
import {JournalsSelection} from "../calculator/JournalsSelection.jsx";
import {ResourcesPanel} from "../calculator/ResourcesPanel.jsx";
import {JournalsPanel} from "../calculator/JournalsPanel.jsx";
import {CostPanel} from "../calculator/CostPanel.jsx";
import {ResourceReturnPanel} from "../calculator/ResourceReturnPanel.jsx";
import {JournalsReturnPanel} from "../calculator/JournalsReturnPanel.jsx";

export function CalculatorView() {
    return (
        <div className="flex-grow grid grid-cols-3 grid-rows-3 w-screen px-20 py-2">
            <>
                <ItemSelection/>
                <ItemInfoPanel/>
                <div className="border-2 w-full h-full flex items-center justify-center">
                    <div>Placeholder</div>
                </div>
            </>
            <>
                <div className="flex flex-col [&>*]:flex-grow">
                    <LocationSelector/>
                    <TaxSelector/>
                    <JournalsSelection/>
                </div>
                <ResourcesPanel/>
                <JournalsPanel/>
            </>
            <>
                <CostPanel/>
                <ResourceReturnPanel/>
                <JournalsReturnPanel/>
            </>

        </div>
    )
}