import {useState} from "react";

export function SearchBar({text, setText}) {

    return (
        <div className="">
            <input className="border-2 border-b-gray-400" type="text" value={text} onChange={setText}/>
        </div>
    )
}