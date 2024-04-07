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
import {CalculatorContext} from "../calculator/context/CalculatorContext.jsx";
import {TemporaryPanel} from "../calculator/TemporaryPanel.jsx";

export function CalculatorView() {
    return (
        <CalculatorContext child={
            <div className="grid grid-cols-3 w-screen h-full px-20 py-4">
                <div className="flex flex-col [&>*]:flex-1">
                    <ItemSelection/>
                    <div className="flex w-full flex-col border-2 [&>*]:flex-1">
                        <LocationSelector/>
                        <TaxSelector/>
                        <JournalsSelection/>
                    </div>
                    <CostPanel/>
                </div>
                <div className="flex flex-col [&>*]:flex-1">
                    <ItemInfoPanel/>
                    <ResourcesPanel/>
                    <ResourceReturnPanel/>
                </div>
                <div className="flex flex-col [&>*]:flex-1">
                    <TemporaryPanel/>
                    <JournalsPanel/>
                    <JournalsReturnPanel/>
                </div>
            </div>
        }/>
    )
}