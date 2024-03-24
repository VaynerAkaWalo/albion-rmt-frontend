import {useState} from "react";

export function TextBoxWithLabel({name}) {
    const [val, setVal] = useState(0)

    function handleChange(e) {
        setVal(e.target.value)
    }

    return (
        <div className="flex flex-col items-center text-center w-24 py-4">
            <label className="text-center" htmlFor={name}>{name}</label>
            <input name={name} id={name} className="w-2/3 border border-gray-600 text-right" value={val} onChange={handleChange}></input>
        </div>
    )
}