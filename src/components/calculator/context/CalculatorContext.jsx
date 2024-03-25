import {ItemProvider} from "./ItemProvider.jsx";
import {ResourceProvider} from "./ResourceProvider.jsx";
import {SettingsProvider} from "./SettingsContext.jsx";


export function CalculatorContext({child}) {
    return (
        <ItemProvider child={
            <ResourceProvider child={
                <SettingsProvider child={
                    child
                }/>
            }/>
        }/>
    )
}