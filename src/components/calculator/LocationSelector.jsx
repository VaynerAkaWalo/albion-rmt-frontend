import Select from "react-select";
import {useContext, useState} from "react";
import {GlobalContext} from "./context/CalculatorContext.jsx";

export function LocationSelector() {
    const cities = ["Personal island", "Thetford", "Fort Sterling", "Bridgewatch", "Martlock", "Lymhurst", "Caerleon"]
    const {selectedItem, setSettings} = useContext(GlobalContext)
    const [selectedCity, setSelectedCity] = useState(createOptions()[0])
    const {recommendedCity} = selectedItem

    const changeCity = (e) => {
        let woFocus = 0
        let wFocus = 37.1
        switch (e['value']) {
            case recommendedCity:
                woFocus = 36.7
                wFocus = 53.9
                break
            case "PERSONAL_ISLAND":
                break
            default:
                woFocus = 15.2
                wFocus = 43.5
        }
        setSettings(prev => ({...prev, returnRateWoF: woFocus, returnRateWF: wFocus}))

        setSelectedCity(e)
    }

    function createOptions() {
        const array = [];

        cities.map(city => array.push({label: city, value: city.toUpperCase().replace(" ", "_")}))

        return array;
    }

    const capitalizeFirstLetter = (text) => {
        if (text) {
            return text.charAt(0) + text.toLowerCase().slice(1).replace("_", " ")
        }
        return "";
    }

    return (
        <div className="border-b grid grid-cols-2 [&>*]:m-auto">
            <Select className="w-4/5" menuPosition={"fixed"} options={createOptions()} styles={customStyles} isSearchable={false} value={selectedCity} onChange={changeCity}/>
            <div className="flex flex-col text-center">
                <span>Recommended City</span>
                <span>{recommendedCity ? capitalizeFirstLetter(recommendedCity) : "No city"}</span>
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