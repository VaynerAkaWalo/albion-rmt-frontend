import {SearchBar} from "../utils/SearchBar.jsx";
import Select from "react-select";
import {useEffect} from "react";

export function BlackMarketFilterHeader({filters, setFilters}) {
    const {search, tier, enchant, quality} = filters

    function setSearch(e) {
        setFilters(prev => ({...prev, search: e.target.value}))
    }

    function setTier(e) {
        setFilters(prev => ({...prev, tier: e}))
    }

    function setEnchant(e) {
        setFilters(prev => ({...prev, enchant: e}))
    }

    function setQuality(e) {
        setFilters(prev => ({...prev, quality: e}))
    }

    useEffect(() => {
        setTier(tiers()[0])
        setEnchant(enchants()[0])
        setQuality(qualityOptions()[0])
    }, []);

    return (
        <div className="flex flex-row columns-4 min-h-12 border-b-2 text-center items-center justify-center [&>*]:mx-20">
            <SearchBar text={search} setText={setSearch}/>
            <Select isSearchable={false} styles={customStyles} className="w-full" options={tiers()} value={tier} onChange={setTier}/>
            <Select isSearchable={false} styles={customStyles} className="w-full" options={enchants()} value={enchant} onChange={setEnchant}/>
            <Select isSearchable={false} styles={customStyles} className="w-full" options={qualityOptions()} value={quality} onChange={setQuality}/>
        </div>
    )
}

function tiers() {
    const array = [{label: "all", value: "all"}];
    for (let i = 2; i < 9; i++) {
        array.push({label: i, value:i})
    }

    return array;
}

function enchants() {
    const array = [
        {label: "all", value: "all"},
        {label: "not 4", value: "not 4"}];
    for (let i = 0; i < 5; i++) {
        array.push({label: i, value:i})
    }

    return array;
}

function qualityOptions() {
    const qualities = ['Normal', "Good", 'Outstanding', 'Excellent', 'Masterpiece']
    const array = [{label: "all", value: "all"}];
    for (let i = 0; i < qualities.length; i++) {
        array.push({label: qualities[i], value: i + 1})
    }
    return array
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