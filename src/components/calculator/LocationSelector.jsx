import {SelectComponent} from "../utils/SelectComponent.jsx";

export function LocationSelector() {
    return (
        <div className="border-b columns-2 p-4 [&>*]:mx-2">
            <SelectComponent {...locations}/>
            <div className="flex flex-col text-center">
                <label htmlFor="preffered city">Recommended City</label>
                <span id="preffered city">Thetford</span>
            </div>
        </div>
    )
}

var locations = {
    name: "Selected location",
    label: true,
    items: [
        "Thetford",
        "Fort Sterling",
        "Caerleon",
        "Personal Island",
        "Hideout",
        "City w/o return",
        "Custom"
    ]
}