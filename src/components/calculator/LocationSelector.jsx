import {SelectComponent} from "../utils/SelectComponent.jsx";
import Select from "react-select";

export function LocationSelector() {
    const cities = ["Thetford", "Fort Sterling", "Caerleon", "Personal Island", "Hideout", "City w/o return"]
    function createOptions() {
        const array = [];

        cities.map(city => array.push({label: city, value: city}))

        return array;
    }

    return (
        <div className="border-b grid grid-cols-2 [&>*]:m-auto">
            <Select className="w-4/5" menuPosition={"fixed"} options={createOptions()} styles={customStyles} isSearchable={false} />
            <div className="flex flex-col text-center">
                <span>Recommended City</span>
                <span>Thetford</span>
            </div>
        </div>
    )
}

const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: "none"// your font declaration
    }),
    singleValue: (provided) => ({
        ...provided,
        color: "white"
    })
};