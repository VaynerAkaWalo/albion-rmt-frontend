import {useState} from "react";

export function TextBoxWithLabelH({name}) {
    const [val, setVal] = useState(0)

    function handleChange(e) {
        setVal(e.target.value)
    }

    return (
        <div className="flex flex-row justify-between text-center w-full py-2 px-2">
            <label className="text-center" htmlFor={name}>{name}</label>
            <input name={name} id={name} className="w-3/5 border border-gray-600 text-right" value={val} onChange={handleChange}></input>
        </div>
    )
}