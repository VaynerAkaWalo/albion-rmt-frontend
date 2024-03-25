export function TextBoxWithLabel({name, value, changeValue}) {
    function changeState(e) {
        changeValue(e.target.value)
    }

    return (
        <div className="flex flex-col items-center text-center w-24 py-4">
            <label className="text-center" htmlFor={name}>{name}</label>
            <input name={name} id={name} className="w-2/3 border border-gray-600 text-right" value={value} onChange={changeState}/>
        </div>
    )
}