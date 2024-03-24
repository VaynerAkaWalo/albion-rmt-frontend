export function SelectComponent({name, items, label = false}) {
    const options = [];

   items.map(item => {
        options.push(createOption(item))
    })

    return (
        <div className="w-full flex flex-col">
            {label && <label className="text-center" htmlFor={name}>{name}</label>}
            <select name={name} id={name} className="w-full">
                {options}
            </select>
        </div>
    )

    function createOption(option) {
        return <option value={option}>{option}</option>
    }
}