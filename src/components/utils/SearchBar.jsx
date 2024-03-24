import {useState} from "react";

export function SearchBar() {
    const [value, setValue] = useState()

    function handleChange(e) {
        setValue(e.target.value)
    }

    return (
        <div className="">
            <input className="border-2 border-b-gray-400" type="text" value={value} onChange={handleChange}/>
        </div>
    )
}