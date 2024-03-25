import {useState} from "react";

export function TextBoxDualWithLabelH({name, value1, value2}) {

    return (
        <div className="flex flex-row justify-between text-center w-full py-2 px-2">
            <label className="text-center" htmlFor={name}>{name}</label>
            <div id={name} className="w-3/5 flex flex-row justify-between">
                <input className="w-2/5 border border-gray-600 text-right" value={value1}></input>
                <input className="w-2/5 border border-gray-600 text-right" value={value2}></input>
            </div>
        </div>
    )
}