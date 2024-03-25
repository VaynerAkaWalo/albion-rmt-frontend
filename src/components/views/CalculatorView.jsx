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
import {ItemProvider} from "../calculator/context/ItemProvider.jsx";
import {CalculatorContext} from "../calculator/context/CalculatorContext.jsx";
import {TemporaryPanel} from "../calculator/TemporaryPanel.jsx";

export function CalculatorView() {
    return (
        <CalculatorContext child={
            <div className="flex-grow grid grid-cols-3 grid-rows-3 w-screen px-20 py-2">
                <>
                    <ItemSelection/>
                    <ItemInfoPanel/>
                    <TemporaryPanel/>
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
        }/>
    )
}