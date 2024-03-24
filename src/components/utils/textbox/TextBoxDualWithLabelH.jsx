import {useState} from "react";

export function TextBoxDualWithLabelH({name}) {
    const [val1, setVal1] = useState(0)
    const [val2, setVal2] = useState(0)

    function handleChange1(e) {
        setVal1(e.target.value)
    }

    function handleChange2(e) {
        setVal2(e.target.value)
    }

    return (
        <div className="flex flex-row justify-between text-center w-full py-2 px-2">
            <label className="text-center" htmlFor={name}>{name}</label>
            <div id={name} className="w-3/5 flex flex-row justify-between">
                <input className="w-2/5 border border-gray-600 text-right" value={val1} onChange={handleChange1}></input>
                <input className="w-2/5 border border-gray-600 text-right" value={val2} onChange={handleChange2}></input>
            </div>
        </div>
    )
}