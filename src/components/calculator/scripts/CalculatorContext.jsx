import {ItemProvider} from "./ItemProvider.jsx";
import {ResourceProvider} from "./ResourceProvider.jsx";

export function CalculatorContext({child}) {
    return (
        <ItemProvider child={
            <ResourceProvider child={child}/>
        }/>
    )
}