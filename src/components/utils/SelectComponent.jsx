export function SelectComponent({name, items, label = false, current, changeCurrent}) {
    const options = [];

    items.map(item => {
        options.push(createOption(item))
    })

    return (
        <div className="w-full flex flex-col">
            {label && <label className="text-center" htmlFor={name}>{name}</label>}
            <select name={name} id={name} value={current} onChange={e => changeCurrent(e.target.value)}
                    className="w-full">
                {options}
            </select>
        </div>
    )

    function createOption(option) {
        return <option value={option}>{option}</option>
    }
}