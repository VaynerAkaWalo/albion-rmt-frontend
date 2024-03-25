
export function TextBoxWithLabelH({name, value, onChange}) {

    return (
        <div className="flex flex-row justify-between text-center w-full py-2 px-2">
            <label className="text-center" htmlFor={name}>{name}</label>
            <input name={name} id={name} className="w-3/5 border border-gray-600 text-right" value={value}></input>
        </div>
    )
}